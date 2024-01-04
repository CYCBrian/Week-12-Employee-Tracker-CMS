// const { viewDepartments, viewRoles, viewEmployees } = require ("./viewFunctions")
// const mysql = require("mysql2");

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "company_db",
// });

// function deleteDepartment() {
//     return new Promise((resolve, reject) => {
//           const departmentId = answers.id;
//           db.query(`DELETE FROM department WHERE ID = ${departmentId}`, (error, results) => {
//             if(error) {
//                 reject(error);
//             } else {
//                 console.log("Successfully removed department.");
//                 resolve();
//             }
//           });
//             return viewDepartments()
//     });
//   }

// function deleteRole() {
//     return new Promise((resolve, reject) => {
//           const roleId = answers.id;
//           db.query(`DELETE FROM role WHERE ID = ${roleId}`, (error, results) => {
//             if(error) {
//                 reject(error);
//             } else {
//                 console.log("Successfully removed role.");
//                 resolve();
//             }
//           });
//             return viewRoles()
//     });
//   }

// function deleteEmployee() {
//     return new Promise((resolve, reject) => {
//           const employeeId = answers.id;
//           db.query(`DELETE FROM employee WHERE ID = ${employeeId}`, (error, results) => {
//             if(error) {
//                 reject(error);
//             } else {
//                 console.log("Successfully removed employee.");
//                 resolve();
//             }
//           });
//             return viewEmployees()
//     });
//   }

// module.exports = {
//     deleteDepartment,
//     deleteRole,
//     deleteEmployee
// }

      // // DELETE from department WHERE ID = ___;
      // else if (answers.menu === "Remove a department.") {
      //   deleteDepartment()
      // }

      // // DELETE from role WHERE ID = ___;
      // else if (answers.menu === "Remove a role.") {
      //   deleteRole()
      // }

      // // DELETE from employee WHERE ID = ___;
      // else if (answers.menu === "Remove an employee.") {
      //   deleteEmployee()
      // }

// function getManagers() {
//   return new Promise((resolve, reject) => {
//     db.query("SELECT * FROM employee WHERE manager_id IS NULL", (error, results) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(results);
//       }
//     });
//   });
// }