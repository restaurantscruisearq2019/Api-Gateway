const axios = require("axios");

const getStaffManagers = async () => {
    const managersUrl = "http://localhost:5002/managers";
    const employeesUrl = "http://localhost:5002/employees";
    const managers = await axios.get(managersUrl);
    const employees = await axios.get(employeesUrl);
    
    const managerEmployees = employees.data.data.filter( e =>{
      return managers.data.data.filter( m => {
        return m.employees.filter( eID => {
          return eID === e._id;
        })
      })
    });

    var managersObj = [];
  
    managers.data.data.filter(m => {
        managersObj.push({
          name: m.name,
          _id: m._id,
          userName: m.userName,
          password: m.password,
          restaurantid: m.restaurantid,
          employees: managerEmployees
      })
    });

    return managersObj;
};

const getStaffEmployees = async () => {
    const url = "http://localhost:5002/employees";
    const res = await axios.get(url);
    return res.data.data;
};

module.exports = {
    getStaffManagers,
    getStaffEmployees
};