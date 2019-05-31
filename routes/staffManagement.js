const express = require('express');
const router = express.Router();
const apiAdapter = require('../config/apiAdapter');

const BASE_URL = 'http://localhost:5002';
const api = apiAdapter(BASE_URL);

router.get('/managers', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    });
});

router.get('/managers/:id', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    });
});

module.exports = router;