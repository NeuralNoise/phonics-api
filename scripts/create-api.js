const path = require('path');
const { readFileSync } = require('fs');
const AWS = require('aws-sdk');
AWS.config.region = 'eu-west-2';

const apiGateway = new AWS.APIGateway({apiVersion: '2015/07/09'});
const apiSwaggerDefinition = readFileSync(path.resolve(__dirname,'../phonics.swagger.json'), 'utf8');
const params = {
    body: apiSwaggerDefinition,
    failOnWarnings: false,
    parameters: {}
};
apiGateway.importRestApi(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
});
