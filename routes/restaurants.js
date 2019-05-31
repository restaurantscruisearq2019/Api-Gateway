const express = require('express');
const router = express.Router();
const apiAdapter = require('../config/apiAdapter');

const BASE_URL = 'http://localhost:5001';
const api = apiAdapter(BASE_URL);

router.get('/restaurants', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    });
});

router.get('/restaurants/:id', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    });
});

module.exports = router;