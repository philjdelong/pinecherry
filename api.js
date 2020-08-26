var express = require('express');
var path = require('path');

var baseRouter = require('./routes/base');
var initRouter = require('./routes/init');

var api = express();

api.use(express.json());
api.use(express.urlencoded({ extended: false }));
api.use(express.static(path.join(__dirname, 'public')));

api.use('/', baseRouter);
api.use('/api/v1', initRouter)

module.exports = api;
