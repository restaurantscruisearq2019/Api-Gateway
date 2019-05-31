var router = require('./routers/router');

module.exports = app => {
    app.get("/", (req, res) => {
      res.send({
        message: "Hi",
        status: "success"
      });
    });
  };
