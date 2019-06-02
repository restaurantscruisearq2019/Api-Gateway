const axios = require("axios");

const getRestaurant = async (id = null) => {
  const url = "http://localhost:5001/restaurants";
  const res = await axios.get(url);
  return res.data.data;
};

const getRestaurantById = async (id = null) => {
  const url = "http://localhost:5001/restaurants/" + id;
  const res = await axios.get(url);
  return res.data.data;
};

module.exports = {
  getRestaurant,
  getRestaurantById
};
