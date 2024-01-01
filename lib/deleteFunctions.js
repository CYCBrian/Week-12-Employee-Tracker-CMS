const { viewDepartments, viewRoles, viewEmployees } = require ("./viewFunctions")
const { prompts } = require ("./prompts");
const inquirer = require ("inquirer");

function deleteDepartment() {
    return new Promise((resolve, reject) => {
      viewDepartments()
        .then((answers) => {
          const departmentId = answers.id;
          db.query(`DELETE FROM department WHERE ID = ${departmentId}`, (error, results) => {
            console.log("Successfully deleted department.");
            resolve();
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

function deleteRole() {
    return new Promise((resolve, reject) => {
      viewRoles()
        .then((answers) => {
          const roleId = answers.id;
          db.query(`DELETE FROM role WHERE ID = ${roleId}`, (error, results) => {
            console.log("Successfully deleted role.");
            resolve();
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

function deleteEmployee() {
    return new Promise((resolve, reject) => {
      viewEmployees()
        .then((answers) => {
          const employeeId = answers.id;
          db.query(`DELETE FROM employee WHERE ID = ${employeeId}`, (error, results) => {
            console.log("Successfully deleted employee.");
            resolve();
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

module.exports = {
    deleteDepartment,
    deleteRole,
    deleteEmployee
}