const express = require('express');
const Classes = require('./src/AulasController/index')
const routes = express.Router();

routes.get('/classes', Classes.getAula);

module.exports = routes;