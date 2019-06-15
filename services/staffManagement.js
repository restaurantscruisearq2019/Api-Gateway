const axios = require("axios");
const { managersURL, employeesURL } = require('../config/apiRoutes');

const getStaffManagers = async () => {
    const managers = await axios.get(managersURL);
    const employees = await axios.get(employeesURL);
    
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

const getManagerAccount = async (userName, password) => {
    const managers = await axios.get(managersURL);
    const employees = await axios.get(employeesURL);

    const managerUserNames = managers.data.data.filter(m => {
        return (m.userName === userName) && (m.password === password);
    })

    if(managerUserNames.length !== 1){
        return null;
    }
    
    const managerEmployees = employees.data.data.filter( e =>{
      return managerUserNames.filter( m => {
        return m.employees.filter( eID => {
          return eID === e._id;
        })
      })
    });

    const manager = {
        name: managerUserNames[0].name,
        _id: managerUserNames[0]._id,
        userName: managerUserNames[0].userName,
        password: managerUserNames[0].password,
        restaurantid: managerUserNames[0].restaurantid,
        employees: managerEmployees
    };

    return manager;
};

const getStaffEmployees = async () => {
    const res = await axios.get(employeesURL);
    return res.data.data;
};

module.exports = {
    getStaffManagers,
    getStaffEmployees,
    getManagerAccount
};