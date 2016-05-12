'use strict'

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./db.js');
const bodyParser = require('body-parser');


app.use(express.static(__dirname + "/../client"));
app.use(express.static(__dirname + "/../node_modules"));
app.use(bodyParser());

require('./middleware/middleware.js')(app, express);

app.listen(port);
console.log('Server listening on ' + port);
