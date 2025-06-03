import { SendMessageCommand, SQSClient } from "@aws-sdk/client-sqs";
const sqs = new SQSClient({
    endpoint: "http://localhost:9324",
});

export const handler = async () => {
    await sqs.send(new SendMessageCommand({
        QueueUrl: process.env.TEST_QUEUE_URL,
        MessageBody: JSON.stringify({ message: "hello world" }),
    }));

    await sqs.send(new SendMessageCommand({
        QueueUrl: process.env.TEST_QUEUE_2_URL,
        MessageBody: JSON.stringify({ message: "hello world" }),
    }));

    return {
        statusCode: 200,
    };
};