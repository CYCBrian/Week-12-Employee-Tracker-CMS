// const { getDepartments, getRoles, getEmployees, getManagers} = require("./getFunctions");
// const init = require("../index.js")

// function viewDepartments() {
//     getDepartments()
//       .then((departmentInfo) => {
//         console.table(departmentInfo);
//       })
//     //  init()
//       .catch((error) => {
//         console.error("Error retrieving departments:", error);
//       });
//   }

// function viewRoles() {
//     getRoles()
//     .then((roleInfo) => {
//       console.table(roleInfo);
//     })
//     // init()
//     .catch((error) => {
//       console.error("Error retrieving roles:", error);
      
//     });
// }

// function viewEmployees(){
//     getEmployees()
//     .then((employeeInfo) => {
//       console.table(employeeInfo);
//     })
//     // init()
//     .catch((error) => {
//       console.error("Error retrieving employees:", error);
      
//     });
// }


// module.exports = {
//     viewDepartments,
//     viewRoles,
//     viewEmployees
// };