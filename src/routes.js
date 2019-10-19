const routes = require("express").Router();
const sessionController = require('./app/controllers/session-controller');

routes.post("/sessions",sessionController.store);

module.exports = routes;