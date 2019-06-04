const axios = require("axios");

const getStaffManagers = async () => {
    const managersUrl = "http://ec2-3-95-202-154.compute-1.amazonaws.com:5000/managers";
    const employeesUrl = "http://ec2-3-95-202-154.compute-1.amazonaws.com:5000/employees";
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

const getManagerAccount = async (userName, password) => {
    const managersUrl = "http://ec2-3-95-202-154.compute-1.amazonaws.com:5000/managers";
    const employeesUrl = "http://ec2-3-95-202-154.compute-1.amazonaws.com:5000/employees";
    const managers = await axios.get(managersUrl);
    const employees = await axios.get(employeesUrl);

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
    const url = "http://ec2-3-95-202-154.compute-1.amazonaws.com:5000/employees";
    const res = await axios.get(url);
    return res.data.data;
};

module.exports = {
    getStaffManagers,
    getStaffEmployees,
    getManagerAccount
};