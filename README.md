# CNX serverless

---

### Requirements

The application is built in `node.js v12.x`, and tested using `jest v25.x`.

- [Install the Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/installation/)
- [Configure your AWS CLI](https://serverless.com/framework/docs/providers/aws/guide/credentials/)
- Install `nvm`: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`
- Install `node`: `nvm install 10.16.0`

### Running Tests

- Run tests using: `yarn test`

### Linting

- Lint code: `yarn lint`

[ESLint](https://eslint.org) is used to lint your code via the [serverless-bundle](https://github.com/AnomalyInnovations/serverless-bundle) plugin.

### Deploy and Run on AWS
- Deploy the application to your AWS environment: `sls deploy`

### Remove from AWS
- Remove serverless stack in your AWS environment: `sls remove`
