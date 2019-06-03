const axios = require("axios");

const getRestaurant = async (id = null) => {
  const url = "http://localhost:5001/restaurants";
  const res = await axios.get(url);
  return id ? res.data.data.filter(r => r._id === id) : res.data.data;
};

const getDayInfoRestaurants = async () => {
  const url = "http://localhost:5001/restaurants";
  const res = await axios.get(url);
  return res.data.data[0].isopen;
};

const getRestaurantsByCategories = async (category) => {
  const url = "http://localhost:5001/restaurants";
  const res = await axios.get(url);
  const restaurantsByCategories = res.data.data.filter(r => r.category === category);
  return restaurantsByCategories;
};


module.exports = {
  getRestaurant,
  getDayInfoRestaurants,
  getRestaurantsByCategories
};
