const axios = require("axios");
const { clientsURL, reservedgroupsURL, restaurantsURL } = require('../config/apiRoutes');

const getTodayClientReservation = async (clientID, date) => {

  const clients = await axios.get(clientsURL);
  const restaurants = await axios.get(restaurantsURL);
  const reservedgroups = await axios.get(reservedgroupsURL);

  /* console.log("clients")
  console.log(clients.data);
  console.log("restaurants")
  console.log(restaurants.data);
  console.log("reservedgroups")
  console.log(reservedgroups.data); */

  const client = clients.data.filter(c => c.id === clientID);
  const groupID = client[0].groupid;
  const clientReservedgroups = reservedgroups.data.filter(crg => crg.groupid === groupID);
  var colTime = new Date().toLocaleString("es-CO", {timeZone: "America/Bogota"});
  const todayTime = new Date(colTime);

 /*  console.log("clientID")
  console.log(clientID);
  console.log("client")
  console.log(client);
  console.log("groupID")
  console.log(groupID);
  console.log("todayTime")
  console.log(todayTime); */

  var todayClientReservedGroups = clientReservedgroups.filter(tcrg => {
    const rgDate = new Date(tcrg.startdate);
    /* console.log("todayTime.getDay() === rgDate.getDay()");
    console.log(todayTime);
    console.log(rgDate.getDay());
    console.log(todayTime.getDay() === rgDate.getDay()); */
    return todayTime.getDay() === rgDate.getDay();
  });

  /* console.log("todayClientReservedGroups")
  console.log(todayClientReservedGroups); */

  todayClientReservedGroups = todayClientReservedGroups.sort(function(a,b){
    return new Date(a.startdate) - new Date(b.startdate)
  });

  /* console.log("todayClientReservedGroups")
  console.log(todayClientReservedGroups); */

  var restaurantByRG =[]
  
  todayClientReservedGroups.filter(r => {
    return restaurants.data.data.filter(rrg => {
        if(r.restaurantid === rrg._id){
            restaurantByRG.push(rrg);
            return true;
        }
        return false;
    });
  });
  /* console.log("name")
  console.log(restaurantByRG[0]); */

  const data = {
    breakfast: {
        name: restaurantByRG[0].name,
        hour: todayClientReservedGroups[0].startdate
    },
    lunch: {
        name: restaurantByRG[1].name,
        hour: todayClientReservedGroups[1].startdate
    },
    dinner: {
        name: restaurantByRG[2].name,
        hour: todayClientReservedGroups[2].startdate
    }
  }

  return data;
};

module.exports = getTodayClientReservation;