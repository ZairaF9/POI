const express = require("express");
const chatRouter = require('./chat.router');

const routerApi = (app) => {
    const router = express.Router();
    app.use('/POI/api', router);
    //endpoints de la v1
    router.use('/chat', chatRouter);
  }

module.exports = routerApi;