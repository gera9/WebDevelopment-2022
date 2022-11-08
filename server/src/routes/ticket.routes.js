const { authJwt } = require("../middlewares");
const controller = require("../controllers/ticker.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.post("/api/ticket/create", controller.create);
  app.post("/api/ticket/search", controller.search);
  app.post("/api/ticket/update", controller.update);
};
