let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let port = process.env.PORT || 8000;

let apiVersion = process.env.API_VERSION || 'v1';

let controllers = require('require-all')(__dirname + '/controller');

Object.keys(controllers).map(key => controllers[key]).forEach(route => app.use('/' + apiVersion, route));

app.listen(port);

console.log('Hey, server is listening at: ' + port);
