'use strict'

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./db.js');


app.use(express.static(__dirname + "/../client"));
app.use(express.static(__dirname + "/../node_modules"));

require('./middleware/middleware.js')(app, express);

require('./middleware/middleware.js')(app, express);

app.listen(port);
console.log('Server listening on ' + port);
