import { SendMessageCommand, SQSClient } from "@aws-sdk/client-sqs";
const sqs = new SQSClient({});

export const handler = async () => {
    console.log("TEST_QUEUE_URL", process.env.TEST_QUEUE_URL);
    console.log("TEST_QUEUE_2_URL", process.env.TEST_QUEUE_2_URL);

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