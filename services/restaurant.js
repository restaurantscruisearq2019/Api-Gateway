const axios = require("axios");

const getRestaurant = async (id = null) => {
  const url = "http://localhost:5001/restaurants";
  const res = await axios.get(url);
  return id ? res.data.data.filter(r => r._id === id) : res.data.data;
};

module.exports = {
  getRestaurant
};
