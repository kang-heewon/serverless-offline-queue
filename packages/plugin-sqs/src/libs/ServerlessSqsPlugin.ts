import * as Serverless from "serverless";
import * as ServerlessPlugin from "serverless/classes/Plugin";
import { createSqsServer } from "local-aws-sqs";
import type { Server } from "http";
import { SQSClient, ReceiveMessageCommand, DeleteMessageBatchCommand } from "@aws-sdk/client-sqs";

interface PluginConfig {
    port?: number;
    queues?: string[];
}

interface FunctionConfig {
    handler: string;
    events?: Array<{
        sqs?: {
            arn: any;
            batchSize?: number;
        };
    }>;
    environment?: Record<string, any>;
}

export class ServerlessSqsPlugin implements ServerlessPlugin {
    private sqsServer?: Server;
    private sqsClient?: SQSClient;
    private readonly pollingIntervals: Map<string, NodeJS.Timeout> = new Map();
    private lambda?: any;

    constructor(private readonly serverless: Serverless) { }

    hooks: ServerlessPlugin.Hooks = {
        "before:offline:start:init": async () => {
            await this.startSqsServer();
            this.setQueueEnvironmentVariables();
        },
        "offline:start:init": async () => {
            await this.createLambda();
        },
        "offline:start:ready": async () => {
            this.startPolling();
        },
        "after:offline:start:end": async () => {
            this.stopPolling();
            this.stopSqsServer();
        }
    }

    private async startSqsServer(): Promise<void> {
        const pluginConfig = this.getPluginConfig();
        const port = pluginConfig.port ?? 9324;

        const queues = pluginConfig.queues?.map((queueName: string) => ({
            QueueName: queueName
        })) ?? [];

        this.sqsServer = await createSqsServer({
            port,
            queues
        });

        this.sqsClient = new SQSClient({
            region: 'us-east-1',
            endpoint: `http://localhost:${port}`,
            credentials: {
                accessKeyId: 'test',
                secretAccessKey: 'test'
            }
        });

        if (queues.length > 0) {
            this.log(`SQS server started on port ${port}. Queues: ${queues.map(q => q.QueueName).join(', ')}`);
        }
    }

    private async createLambda(): Promise<void> {
        try {
            // @ts-ignore
            const { default: Lambda } = await import('serverless-offline/lambda');

            const lambdas = this.getLambdas();

            this.lambda = new Lambda(this.serverless, this.getOfflineOptions());

            this.lambda.create(lambdas);

            this.log(`Lambda functions initialized: ${lambdas.map(l => l.functionKey).join(', ')}`);
        } catch (error) {
            this.logError('Failed to create Lambda instance:', error);
        }
    }

    private getLambdas() {
        const service = this.serverless.service;
        const lambdas: { functionKey: string; functionDefinition: Serverless.FunctionDefinitionHandler | Serverless.FunctionDefinitionImage; }[] = [];

        const functionKeys = service.getAllFunctions();

        functionKeys.forEach((functionKey: string) => {
            const functionDefinition = service.getFunction(functionKey);
            lambdas.push({ functionKey, functionDefinition });
        });

        return lambdas;
    }

    private getOfflineOptions() {
        const { service: { custom = {}, provider } } = this.serverless;
        const offlineOptions = custom['serverless-offline'] || {};

        return {
            ...provider,
            ...offlineOptions,
            ...this.getPluginConfig()
        };
    }

    private setQueueEnvironmentVariables(): void {
        const pluginConfig = this.getPluginConfig();
        const port = pluginConfig.port ?? 9324;
        const baseUrl = `http://localhost:${port}`;
        const accountId = '000000000000';

        const queueUrls = new Map<string, string>();

        pluginConfig.queues?.forEach((queueName: string) => {
            const queueUrl = `${baseUrl}/${accountId}/${queueName}`;
            queueUrls.set(queueName, queueUrl);
        });

        const functions = this.serverless.service.functions || {};

        Object.entries(functions).forEach(([functionName, functionConfig]: [string, any]) => {
            functionConfig.environment ??= {};

            Object.entries(functionConfig.environment).forEach(([envKey, envValue]: [string, any]) => {
                if (typeof envValue === 'object' && envValue?.Ref) {
                    const refName = envValue.Ref;
                    const matchingQueue = this.findQueueByResourceName(refName, queueUrls);

                    if (matchingQueue) {
                        functionConfig.environment[envKey] = matchingQueue;
                    }
                }
            });
        });
    }

    private findQueueByResourceName(resourceName: string, queueUrls: Map<string, string>): string | null {
        const resources = this.serverless.service.resources?.Resources ?? {};
        const resource = resources[resourceName];

        if (resource?.Type === 'AWS::SQS::Queue') {
            const queueName = resource.Properties?.QueueName;
            if (queueName && queueUrls.has(queueName)) {
                return queueUrls.get(queueName)!;
            }
        }

        return null;
    }

    private startPolling(): void {
        const functions = this.serverless.service.functions ?? {};

        Object.entries(functions).forEach(([functionName, functionConfig]: [string, any]) => {
            const events = functionConfig.events ?? [];

            events.forEach((event: any) => {
                if (event.sqs) {
                    const queueArn = event.sqs.arn;
                    const queueUrl = this.resolveQueueUrl(queueArn);
                    const batchSize = event.sqs.batchSize ?? 10;

                    if (queueUrl) {
                        const queueName = queueUrl.split('/').pop();
                        this.log(`Starting SQS polling: ${functionName} -> ${queueName}`);

                        const interval = setInterval(() => {
                            this.pollQueue(queueUrl, functionName, batchSize);
                        }, 1000);

                        this.pollingIntervals.set(`${functionName}-${queueUrl}`, interval);
                    } else {
                        this.logError(`Unable to resolve queue URL for function: ${functionName}`);
                    }
                }
            });
        });
    }

    private resolveQueueUrl(arn: any): string | null {
        let resourceName: string | null = null;

        if (typeof arn === 'object') {
            if (arn['!GetAtt']) {
                resourceName = arn['!GetAtt'][0];
            } else if (arn['Fn::GetAtt']) {
                resourceName = arn['Fn::GetAtt'][0];
            }
        }

        if (resourceName) {
            const resources = this.serverless.service.resources?.Resources ?? {};
            const resource = resources[resourceName];

            if (resource?.Type === 'AWS::SQS::Queue') {
                const queueName = resource.Properties?.QueueName;
                if (queueName) {
                    const pluginConfig = this.getPluginConfig();
                    const port = pluginConfig.port ?? 9324;
                    const accountId = '000000000000';

                    return `http://localhost:${port}/${accountId}/${queueName}`;
                }
            }
        }

        return null;
    }

    private async pollQueue(queueUrl: string, functionName: string, batchSize: number): Promise<void> {
        if (!this.sqsClient) {
            return;
        }

        try {
            const result = await this.sqsClient.send(new ReceiveMessageCommand({
                QueueUrl: queueUrl,
                MaxNumberOfMessages: batchSize,
                WaitTimeSeconds: 0,
                VisibilityTimeout: 30
            }));

            if (result.Messages && result.Messages.length > 0) {
                const queueName = queueUrl.split('/').pop();
                const sqsEvent = {
                    Records: result.Messages.map(message => ({
                        messageId: message.MessageId,
                        receiptHandle: message.ReceiptHandle,
                        body: message.Body,
                        attributes: message.Attributes || {},
                        messageAttributes: message.MessageAttributes || {},
                        md5OfBody: message.MD5OfBody,
                        eventSource: 'aws:sqs',
                        eventSourceARN: `arn:aws:sqs:us-east-1:000000000000:${queueName}`,
                        awsRegion: 'us-east-1'
                    }))
                };

                try {
                    await this.invokeFunction(functionName, sqsEvent);

                    await this.sqsClient.send(new DeleteMessageBatchCommand({
                        QueueUrl: queueUrl,
                        Entries: result.Messages.map(message => ({
                            Id: message.MessageId,
                            ReceiptHandle: message.ReceiptHandle
                        }))
                    }))

                } catch (error) {
                    this.logError(`Function execution error ${functionName}:`, error);
                }
            }
        } catch (error) {
            this.logError(`Queue polling error:`, error);
        }
    }

    private async invokeFunction(functionName: string, event: any): Promise<any> {
        if (!this.lambda) {
            this.logError(`Lambda instance not available for function: ${functionName}`);
            return;
        }

        try {
            const handler = this.lambda.get(functionName);

            if (!handler) {
                this.logError(`Handler not found for function: ${functionName}`);
                return;
            }

            handler.setEvent(event);
            const result = await handler.runHandler();
            return result;
        } catch (error) {
            this.logError(`Function invocation error ${functionName}:`, error);
            throw error;
        }
    }

    private stopPolling(): void {
        this.pollingIntervals.forEach((interval) => {
            clearInterval(interval);
        });
        this.pollingIntervals.clear();
    }

    private stopSqsServer(): void {
        if (this.sqsServer) {
            this.sqsServer.close();
            this.sqsServer = undefined;
        }
    }

    private getPluginConfig(): PluginConfig {
        return this.serverless.service.custom?.['@serverless-offline-queue/plugin-sqs'] as PluginConfig || {};
    }

    private log(message: string): void {
        console.log(`[@serverless-offline-queue/plugin-sqs] ${message}`);
    }

    private logError(message: string, error?: any): void {
        console.error(`[@serverless-offline-queue/plugin-sqs] ${message}`, error || '');
    }
}