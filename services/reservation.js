const axios = require("axios");

const getReservationClients = async () => {
  const url = "http://localhost:5003/clients";
  const res = await axios.get(url);
  return res.data;
};

const getReservationGroups = async () => {
    const url = "http://localhost:5003/groups";
    const res = await axios.get(url);
    return res.data;
  };

const getReservationReservedGroups = async () => {
    const url = "http://localhost:5003/reservedgroups";
    const res = await axios.get(url);
    return res.data;
};

module.exports = {
    getReservationClients,
    getReservationGroups,
    getReservationReservedGroups
};