
const express = require('express');
const router = express.Router();
const restaurants = require('./restaurants');
const reservation = require('./reservation');
const staffManagement = require('./staffManagement');


router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(reservation);
router.use(restaurants);
router.use(staffManagement);

module.exports = router