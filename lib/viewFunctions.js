const { getDepartments, getRoles, getEmployees, getManagers} = require("./getFunctions");

function viewDepartments() {
    getDepartments()
      .then((departmentInfo) => {
        console.log(departmentInfo.join("\n"));
        
      })
      .catch((error) => {
        console.error("Error retrieving departments:", error);
        
      });
  }

function viewRoles() {
    getRoles()
    .then((roleInfo) => {
      console.log(roleInfo.join("\n"));
    })
    .catch((error) => {
      console.error("Error retrieving roles:", error);
      
    });
}

function viewEmployees(){
    getEmployees()
    .then((employeeInfo) => {
      console.log(employeeInfo.join("\n"));
    })
    .catch((error) => {
      console.error("Error retrieving employees:", error);
      
    });
}


module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees
};
