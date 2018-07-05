const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const app = express();
require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

app.use('/api', require('./routes'));

module.exports = app;