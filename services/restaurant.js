const axios = require("axios");

const getRestaurant = async () => {
  const url = "http://localhost:5001/restaurants";
  const res = await axios.get(url);
  return res.data.data;
};

// Transform the raw microservice output into fields/types defined by the GraphQL type
const transform = data => {
  restaurant = data[0];
  console.log(restaurant);

  return {
    _id: restaurant._id,
    name: restaurant.name,
    category: restaurant.category,
    capacity: restaurant.capacity,
    isopen: restaurant.isopen,
    menu: {
      priceRange: restaurant.menu.priceRange
    }
  };
};

module.exports = getRestaurant;
