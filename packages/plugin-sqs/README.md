# @serverless-offline-queue/plugin-sqs

A Serverless Offline plugin for emulating Amazon SQS locally.

## Features

- Automatic local SQS server startup
- Automatic queue environment variable injection
- SQS event polling and automatic Lambda function invocation
- CloudFormation resource reference resolution
- Message batch processing support

## Installation

```bash
npm install @serverless-offline-queue/plugin-sqs --save-dev
```

## Usage

### 1. Plugin Setup

Add the plugin to your `serverless.yml`:

```yaml
plugins:
  - serverless-esbuild
  - '@serverless-offline-queue/plugin-sqs'
  - serverless-offline
```

> Important: `@serverless-offline-queue/plugin-sqs` must be loaded before `serverless-offline`.

### 2. Plugin Configuration

```yaml
custom:
  '@serverless-offline-queue/plugin-sqs':
    port: 9324                    # SQS server port (default: 9324)
    queues:                       # List of queues to create
      - ${self:provider.stage}-test-queue
      - ${self:provider.stage}-test-queue-dlq
```

### 3. Resource Definition

```yaml
resources:
  Resources:
    TestQueue:
      Type: AWS::SQS::Queue
      Properties:
        QueueName: ${self:provider.stage}-test-queue
        VisibilityTimeoutSeconds: 300
        MessageRetentionPeriod: 1209600
        RedrivePolicy:
          deadLetterTargetArn: !GetAtt TestQueueDLQ.Arn
          maxReceiveCount: 3
    
    TestQueueDLQ:
      Type: AWS::SQS::Queue
      Properties:
        QueueName: ${self:provider.stage}-test-queue-dlq
        MessageRetentionPeriod: 1209600
```

### 4. Function Definition

```yaml
functions:
  producer:
    handler: src/producer.handler
    events:
      - httpApi: '*'
    environment:
      QUEUE_URL: !Ref TestQueue
  
  consumer:
    handler: src/consumer.handler
    events:
      - sqs:
          arn: !GetAtt TestQueue.Arn
          batchSize: 1
```

### 5. Handler Implementation

**Producer (sending messages):**

```typescript
import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";

const sqs = new SQSClient({
    useQueueUrlAsEndpoint: true
});

export const handler = async () => {
    await sqs.send(new SendMessageCommand({
        QueueUrl: process.env.QUEUE_URL,
        MessageBody: JSON.stringify({ message: "hello world" }),
    }));

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Message sent" })
    };
};
```

**Consumer (processing messages):**

```typescript
export const handler = async (event: any) => {
    for (const record of event.Records) {
        console.log('Processing message:', record.body);
        
        // Message processing logic
        const messageBody = JSON.parse(record.body);
        // ...
    }
};
```

## Running

```bash
serverless offline start
```

or

```bash
npm run dev  # if configured in package.json
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `port` | number | 9324 | Port for the SQS server |
| `queues` | string[] | [] | List of queue names to create |

## Supported CloudFormation Functions

- `!Ref` - Queue URL reference
- `!GetAtt` - Queue ARN reference (YAML format)
- `Fn::GetAtt` - Queue ARN reference (JSON format)

## Example

See the complete example in the `packages/example-sqs` directory.

## Limitations

- Currently only supports JavaScript files compiled with esbuild
- Not all AWS SQS features are supported
- DLQ behavior is only partially emulated

## License

MIT 