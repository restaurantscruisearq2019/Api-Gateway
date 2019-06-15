const axios = require("axios");
const { clientsURL, groupsURL, reservedgroupsURL } = require('../config/apiRoutes');

const getReservationClients = async () => {
  const res = await axios.get(clientsURL);
  return res.data;
};

const getReservationGroups = async () => {
    const res = await axios.get(groupsURL);
    return res.data;
  };

const getReservationReservedGroups = async () => {
    const res = await axios.get(reservedgroupsURL);
    return res.data;
};

module.exports = {
    getReservationClients,
    getReservationGroups,
    getReservationReservedGroups
};