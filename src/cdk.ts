import cdk = require("@aws-cdk/core");

export class BackendStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
  }
}

const app = new cdk.App();

new BackendStack(app, "TestIt");

app.synth();
