var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8090;

var router = express.Router();

router.get('/hello', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

var apiVersion = process.env.API_VERSION || 'v1';

app.use('/' + apiVersion, router);
app.listen(port);

console.log('Hey, magic happens here: ' + port);
