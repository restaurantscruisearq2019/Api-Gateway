const express = require('express');
const router = express.Router();
const apiAdapter = require('../config/apiAdapter');

const BASE_URL = 'http://localhost:5003';
const api = apiAdapter(BASE_URL);

//Reserved Groups

router.get('/reservedgroups', (req, res) => {
    api.get(req.originalUrl).then(resp => {
        res.send(resp.data)
    });
});

router.get('/reservedgroups/:id', (req, res) => {
    api.get(req.originalUrl).then(resp => {
        res.send(resp.data)
    });
});

router.post('/reservedgroups', (req, res) => {
    api.post(req.originalUrl).then(resp => {
        res.send(resp.data)
    });
});

router.put('/reservedgroups/:id', (req, res) => {
    api.put(req.originalUrl).then(resp => {
        res.send(resp.data)
    });
});

router.delete('/reservedgroups/:id', (req, res) => {
    api.delete(req.originalUrl).then(resp => {
        res.send(resp.data)
    });
});

//Clients

router.get('/clients', (req, res) => {
    api.get(req.originalUrl).then(resp => {
        res.send(resp.data)
    });
});

router.get('/clients/:id', (req, res) => {
    api.get(req.originalUrl).then(resp => {
        res.send(resp.data)
    });
});

router.post('/clients', (req, res) => {
    api.post(req.originalUrl, req.body).then(resp => {
        res.send(resp.data)
    });
});

router.put('/clients/:id', (req, res) => {
    api.put(req.originalUrl).then(resp => {
        res.send(resp.data)
    });
});

router.delete('/clients/:id', (req, res) => {
    api.delete(req.originalUrl).then(resp => {
        res.send(resp.data)
    });
});

//Groups

router.get('/groups', (req, res) => {
    api.get(req.originalUrl).then(resp => {
        res.send(resp.data)
    });
});

router.get('/groups/:id', (req, res) => {
    api.get(req.originalUrl).then(resp => {
        res.send(resp.data)
    });
});

router.post('/groups', (req, res) => {
    api.post(req.originalUrl).then(resp => {
        res.send(resp.data)
    });
});

router.delete('/groups/:id', (req, res) => {
    api.delete(req.originalUrl).then(resp => {
        res.send(resp.data)
    });
});

module.exports = router;