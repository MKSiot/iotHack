'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const db = require('./db.js');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client"));
app.use(express.static(__dirname + "/../node_modules"));

require('./middleware/middleware.js')(app, express);

app.listen(port);
console.log('Server listening on ' + port);
