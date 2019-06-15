const reservationURL = "http://localhost:5001"; //To edit
const clientsURL = reservationURL+"/clients";
const groupsURL = reservationURL+"/groups";
const reservedgroupsURL = reservationURL+"/reservedgroups";

const restaurantsURL = "http://localhost:5002/restaurants"; //To edit

const staffManagementURL = "http://localhost:5003"; //To edit
const managersURL = staffManagementURL+"/managers";
const employeesURL = staffManagementURL+"/employees";

const ldapURL = "http://localhost"; //To edit

module.exports = {
    reservationURL,
    clientsURL,
    groupsURL,
    reservedgroupsURL,
    restaurantsURL,
    staffManagementURL,
    managersURL,
    employeesURL,
    ldapURL
}

