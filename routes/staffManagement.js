const express = require('express');
const router = express.Router();
const apiAdapter = require('../config/apiAdapter');
const { staffManagementURL } = require('../config/apiRoutes');

const api = apiAdapter(staffManagementURL);

//Managers

router.get('/managers', (req, res) => {
    api.get(req.originalUrl).then(resp => {
        res.send(resp.data)
    });
});

router.get('/managers/:id', (req, res) => {
    api.get(req.originalUrl).then(resp => {
        res.send(resp.data)
    });
});

router.post('/managers/add', (req, res) => {
    api.get(req.originalUrl).then(resp => {
        res.send(resp.data)
    });
});

router.put('/managers/update/:id', (req, res) => {
    api.get(req.originalUrl).then(resp => {
        res.send(resp.data)
    });
});

router.delete('/managers/delete/:id', (req, res) => {
    api.get(req.originalUrl).then(resp => {
        res.send(resp.data)
    });
});

//Employees

router.get('/employees', (req, res) => {
    api.get(req.originalUrl).then(resp => {
        res.send(resp.data)
    });
});

router.get('/employees/:id', (req, res) => {
    api.get(req.originalUrl).then(resp => {
        res.send(resp.data)
    });
});

router.post('/employees/add', (req, res) => {
    api.get(req.originalUrl).then(
        res.send(req.body)
    );
});

router.put('/employees/update/:id', (req, res) => {
    api.get(req.originalUrl).then(resp => {
        res.send(resp.data)
    });
});

router.delete('/employees/delete/:id', (req, res) => {
    api.get(req.originalUrl).then(resp => {
        res.send(resp.data)
    });
});


module.exports = router;