const routes = require("express").Router();

const sessionController = require('./app/controllers/session-controller');
const authMiddleware = require('./app/middleware/auth');

routes.post("/sessions",sessionController.store);

routes.use(authMiddleware);

routes.get('/dashboard', (req,res) => {
    res.status(200).send();
});

module.exports = routes;