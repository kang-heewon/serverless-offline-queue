
export const handler = async (event: any) => {
    console.log("hello world", JSON.parse(event.Records[0].body).message);
};