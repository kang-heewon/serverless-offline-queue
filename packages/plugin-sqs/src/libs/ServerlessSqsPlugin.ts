import * as Serverless from "serverless";
import * as ServerlessPlugin from "serverless/classes/Plugin";

export class ServerlessSqsPlugin implements ServerlessPlugin {
    constructor(private readonly serverless: Serverless) {
        console.log("ServerlessSqsPlugin constructor");
    }

    hooks: ServerlessPlugin.Hooks = {
        "before:offline:start:init": async () => {
            console.log("before:offline:start:init");
        }
    }

}