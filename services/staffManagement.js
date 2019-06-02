const axios = require("axios");

const getStaffManagers = async () => {
    const url = "http://localhost:5002/managers";
    const res = await axios.get(url);
    return res.data.data;
};

const getStaffEmployees = async () => {
    const url = "http://localhost:5002/employees";
    const res = await axios.get(url);
    return res.data.data;
};

module.exports = {
    getStaffManagers,
    getStaffEmployees
};