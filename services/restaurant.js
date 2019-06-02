const axios = require("axios");

const getRestaurant = async () => {
  const url = "http://localhost:5001/restaurants";
  const res = await axios.get(url);
  return res.data.data;
};

module.exports = getRestaurant;
