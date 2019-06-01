const express = require("express");
const router = express.Router();
const apiAdapter = require("../config/apiAdapter");

const BASE_URL = "http://localhost:5001";
const api = apiAdapter(BASE_URL);

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
