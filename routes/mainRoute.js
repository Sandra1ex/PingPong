const mainRouter = require('express').Router();
const Main = require('../views/Main');

mainRouter.get('/', (req, res) => {
  res.renderComponent(Main);
});

module.exports = mainRouter;
