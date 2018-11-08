const path = require('path');
const { readFileSync } = require('fs');
const AWS = require('aws-sdk');
AWS.config.region = 'eu-west-1';

// import-to-update

const apiGateway = new AWS.APIGateway({apiVersion: '2015/07/09'});
const apiSwaggerDefinition = readFileSync(path.resolve(__dirname,'../phonics.swagger.json'), 'utf8');
const params = {
    body: apiSwaggerDefinition,
    failOnWarnings: false,
    parameters: {},
    restApiId: 'hi69g4j66l',
    mode: 'overwrite'
};

apiGateway.putRestApi(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
});

/*
apiGateway.importRestApi(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
});
*/

// aws apigateway get-rest-apis
