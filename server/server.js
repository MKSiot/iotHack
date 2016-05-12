'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.VCAP_APP_PORT || 3000;
const host = process.env.VCAP_APP_HOST || 'localhost'
const db = require('./db.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client"));
app.use(express.static(__dirname + "/../node_modules"));

require('./middleware/middleware.js')(app, express);

app.listen(port);
console.log('Server listening on ' + port);
