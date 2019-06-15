const axios = require("axios");
const { clientsURL, reservedgroupsURL, restaurantsURL } = require('../config/apiRoutes');

const getTodayClientReservation = async (clientID, date) => {

  const clients = await axios.get(clientsURL);
  const restaurants = await axios.get(restaurantsURL);
  const reservedgroups = await axios.get(reservedgroupsURL);

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