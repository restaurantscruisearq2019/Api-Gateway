const reservationURL = "http://ec2-3-89-70-91.compute-1.amazonaws.com:5001"; //To edit
const clientsURL = reservationURL+"/clients";
const groupsURL = reservationURL+"/groups";
const reservedgroupsURL = reservationURL+"/reservedgroups";

const restaurantsURL = "http://ec2-184-72-208-137.compute-1.amazonaws.com:5002/restaurants"; //To edit

const staffManagementURL = "http://ec2-18-212-176-232.compute-1.amazonaws.com:5003"; //To edit
const managersURL = staffManagementURL+"/managers";
const employeesURL = staffManagementURL+"/employees";

const ldap = "http://ec2-18-207-203-122.compute-1.amazonaws.com:5004/login"; //To edit

module.exports = {
    reservationURL,
    clientsURL,
    groupsURL,
    reservedgroupsURL,
    restaurantsURL,
    staffManagementURL,
    managersURL,
    employeesURL,
    ldap
}