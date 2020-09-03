import express from 'express';
import path from 'path'

import baseRouter from '../routes/base';
import initRouter from '../routes/init';

var api = express();

api.use(express.json());
api.use(express.urlencoded({ extended: false }));
api.use(express.static(path.join(__dirname, 'public')));

api.use('/', baseRouter);
api.use('/api/v1', initRouter);

module.exports = api;