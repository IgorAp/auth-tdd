require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const express = require("express");
const bodyParser = require('body-parser');
const helmet = require('helmet');

const routes = require('./routes');
const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);


module.exports = app;