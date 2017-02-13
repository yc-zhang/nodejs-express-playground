var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8000;

var apiVersion = process.env.API_VERSION || 'v1';

var controllers = require('require-all')(__dirname + '/controller');

Object.keys(controllers)
    .map(key => controllers[key])
    .forEach(route => app.use('/' + apiVersion, route));

app.listen(port);

console.log('Hey, server is listening at: ' + port);
