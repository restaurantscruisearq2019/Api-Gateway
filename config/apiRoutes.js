const reservationURL = "localhost:5001"; //To edit
const clientsURL = reservationURL+"/clients";
const groupsURL = reservationURL+"/groups";
const reservedgroupsURL = reservationURL+"/reservedgroups";

const restaurantsURL = "localhost:5002/restaurants"; //To edit

const staffManagementURL = "localhost:5003"; //To edit
const managersURL = staffManagementURL+"/managers";
const employeesURL = staffManagementURL+"/employees";

module.exports = {
    reservationURL,
    clientsURL,
    groupsURL,
    reservedgroupsURL,
    restaurantsURL,
    staffManagementURL,
    managersURL,
    employeesURL
}

