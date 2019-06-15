const express = require("express");
const router = express.Router();
const apiAdapter = require("../config/apiAdapter");
const { restaurantsURL } = require('../config/apiRoutes');

const BASE_URL = restaurantsURL.split('/', 1);
const api = apiAdapter(BASE_URL[0]);

router.get("/restaurants", (req, res) => {
  api.get(req.originalUrl).then(resp => {
    res.send(resp.data);
  });
});

router.get("/restaurants/:id", (req, res) => {
  api.get(req.originalUrl).then(resp => {
    res.send(resp.data);
  });
});

router.post("/restaurants/add", (req, res) => {
  api.post(req.originalUrl).then(resp => {
    res.send(resp.data);
  });
});

router.put("/restaurants/update/:id", (req, res) => {
  api.put(req.originalUrl).then(resp => {
    res.send(resp.data);
  });
});

router.delete("/restaurants/delete/:id", (req, res) => {
  api.delete(req.originalUrl).then(resp => {
    res.send(resp.data);
  });
});

module.exports = router;
