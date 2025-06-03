interface QueueMessage {
    messageId: string;
    receiptHandle: string;
    body: string;
    attributes: Record<string, string>;
    messageAttributes: Record<string, any>;
    timestamp: number;
    receiveCount: number;
}

interface QueueConfig {
    name: string;
    visibilityTimeout?: number;
    messageRetentionPeriod?: number;
    delaySeconds?: number;
    maxReceiveCount?: number;
    deadLetterQueue?: string;
}

export class InMemorySqsQueue {
    private messages: QueueMessage[] = [];
    private visibleMessages: Map<string, NodeJS.Timeout> = new Map();

    constructor(private config: QueueConfig) { }

    sendMessage(body: string, messageAttributes?: Record<string, any>): QueueMessage {
        const messageId = Math.random().toString(36).substring(2, 15);
        const message: QueueMessage = {
            messageId,
            receiptHandle: Math.random().toString(36).substring(2, 15),
            body,
            attributes: {},
            messageAttributes: messageAttributes || {},
            timestamp: Date.now(),
            receiveCount: 0
        };

        if (this.config.delaySeconds && this.config.delaySeconds > 0) {
            setTimeout(() => {
                this.messages.push(message);
            }, this.config.delaySeconds * 1000);
        } else {
            this.messages.push(message);
        }

        return message;
    }

    receiveMessage(): QueueMessage | null {
        const availableMessages = this.messages.filter(msg =>
            !this.visibleMessages.has(msg.receiptHandle)
        );

        if (availableMessages.length === 0) {
            return null;
        }

        const message = availableMessages[0];
        message.receiveCount++;

        const visibilityTimeout = (this.config.visibilityTimeout || 30) * 1000;
        const timeout = setTimeout(() => {
            this.visibleMessages.delete(message.receiptHandle);
        }, visibilityTimeout);

        this.visibleMessages.set(message.receiptHandle, timeout);

        if (this.config.maxReceiveCount && message.receiveCount >= this.config.maxReceiveCount) {
            this.deleteMessage(message.receiptHandle);
            if (this.config.deadLetterQueue) {
                console.log(`메시지가 DLQ로 이동: ${this.config.deadLetterQueue}`);
            }
        }

        return message;
    }

    deleteMessage(receiptHandle: string): boolean {
        const messageIndex = this.messages.findIndex(msg => msg.receiptHandle === receiptHandle);
        if (messageIndex !== -1) {
            this.messages.splice(messageIndex, 1);
            if (this.visibleMessages.has(receiptHandle)) {
                clearTimeout(this.visibleMessages.get(receiptHandle)!);
                this.visibleMessages.delete(receiptHandle);
            }
            return true;
        }
        return false;
    }

    getQueueAttributes() {
        return {
            ApproximateNumberOfMessages: this.messages.filter(msg =>
                !this.visibleMessages.has(msg.receiptHandle)
            ).length.toString(),
            ApproximateNumberOfMessagesNotVisible: this.visibleMessages.size.toString(),
            VisibilityTimeout: (this.config.visibilityTimeout || 30).toString(),
            MessageRetentionPeriod: (this.config.messageRetentionPeriod || 1209600).toString()
        };
    }

    getMessageCount(): number {
        return this.messages.length;
    }

    clear(): void {
        this.messages = [];
        this.visibleMessages.forEach(timeout => clearTimeout(timeout));
        this.visibleMessages.clear();
    }
}

export class SqsQueueManager {
    private queues: Map<string, InMemorySqsQueue> = new Map();

    createQueue(name: string, config?: Partial<QueueConfig>): InMemorySqsQueue {
        const queueConfig: QueueConfig = {
            name,
            visibilityTimeout: 30,
            messageRetentionPeriod: 1209600,
            delaySeconds: 0,
            ...config
        };

        const queue = new InMemorySqsQueue(queueConfig);
        this.queues.set(name, queue);
        console.log(`큐 생성: ${name}`);
        return queue;
    }

    getQueue(name: string): InMemorySqsQueue | undefined {
        return this.queues.get(name);
    }

    deleteQueue(name: string): boolean {
        const queue = this.queues.get(name);
        if (queue) {
            queue.clear();
            this.queues.delete(name);
            console.log(`큐 삭제: ${name}`);
            return true;
        }
        return false;
    }

    listQueues(): string[] {
        return Array.from(this.queues.keys());
    }

    clearAll(): void {
        this.queues.forEach(queue => queue.clear());
        this.queues.clear();
    }
} 