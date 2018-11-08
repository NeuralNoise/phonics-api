const { Lambda } = require('aws-sdk');
const lambdaSdk = new Lambda();

lambdaSdk.listFunctions({}, (err, data) => {
    if(err){
        console.error(err);
    }

    console.log(JSON.stringify(data, null, 4));
});



