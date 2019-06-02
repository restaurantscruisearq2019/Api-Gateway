const axios = require("axios");


const getTodayClientReservation = async (clientID, date) => {
  const restaurantsUrl = "http://localhost:5001/restaurants";
  const clientsUrl = "http://localhost:5003/clients";
  const reservedgroupsUrl = "http://localhost:5003/reservedgroups";

  const clients = await axios.get(clientsUrl);
  const restaurants = await axios.get(restaurantsUrl);
  const reservedgroups = await axios.get(reservedgroupsUrl);

  const client = clients.data.filter(c => c.id === clientID);
  const groupID = client[0].groupid;
  const clientReservedgroups = reservedgroups.data.filter(crg => crg.groupid === groupID);
  const todayTime = new Date(date);

  var todayClientReservedGroups = clientReservedgroups.filter(tcrg => {
    const rgDate = new Date(tcrg.startdate);
    return todayTime.getDay() === rgDate.getDay();
  });

  todayClientReservedGroups = todayClientReservedGroups.sort(function(a,b){
    return new Date(a.startdate) - new Date(b.startdate)
  });

  var restaurantByRG =[]

/*   for( var i = 0; i<todayClientReservedGroups.length; i++){
      console.log("Reserved Restaurant: " + todayClientReservedGroups[i].restaurantid);
      for( var j = 0; j<restaurants.data.data.length; j++){
        if(todayClientReservedGroups[i].restaurantid === restaurants.data.data[j]._id){
            console.log("Check Restaurant: " + restaurants.data.data[j]._id);
            restaurantByRG.push(restaurants.data.data[j]);
        }
      }
  } */

  todayClientReservedGroups.filter(r => {
    return restaurants.data.data.filter(rrg => {
        if(r.restaurantid === rrg._id){
            restaurantByRG.push(rrg);
            return true;
        }
        return false;
    });
  });

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