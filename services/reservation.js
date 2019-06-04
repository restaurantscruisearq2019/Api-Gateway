const axios = require("axios");

const getReservationClients = async () => {
  const url = "http://ec2-35-171-153-128.compute-1.amazonaws.com:5000/clients";
  const res = await axios.get(url);
  return res.data;
};

const getReservationGroups = async () => {
    const url = "http://ec2-35-171-153-128.compute-1.amazonaws.com:5000/groups";
    const res = await axios.get(url);
    return res.data;
  };

const getReservationReservedGroups = async () => {
    const url = "http://ec2-35-171-153-128.compute-1.amazonaws.com:5000/reservedgroups";
    const res = await axios.get(url);
    return res.data;
};

module.exports = {
    getReservationClients,
    getReservationGroups,
    getReservationReservedGroups
};