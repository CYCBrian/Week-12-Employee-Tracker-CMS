const { viewDepartments, viewRoles, viewEmployees } = require ("./viewFunctions")
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "company_db",
});

function addDepartment(answers){
    return new Promise((resolve, reject) => {
            const departmentName = answers.addDepartment;
            db.query(`INSERT INTO department (name) VALUES ('${departmentName}')`, (error, results) => {
              if(error) {
                reject(error);
            } else {
                console.log("Successfully added department.");
                resolve();
            }
            // init()
          });
            return viewDepartments()
      });
}

function addRole(answers){
    return new Promise((resolve, reject) => {
            const { title, salary, department_id } = answers.addRole;
            db.query( `INSERT INTO role (title, salary, department_id) VALUES ('${title}', ${salary}, ${department_id})`, (error, results) => {
              if(error) {
                reject(error);
            } else {
                console.log("Successfully add role.");
                resolve();
            }
            // init()
          });
            return viewRoles()
      });
}

function addEmployee(){
    return new Promise((resolve, reject) => {
            const { first_name, last_name, role_id, manager_id } = answers.addEmployee;
            db.query( `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${first_name}', '${last_name}', ${role_id}, ${manager_id})`, (error, results) => {
              if(error) {
                reject(error);
            } else {
                console.log("Successfully added employee.");
                resolve();
            }
            // init()
          });
            return viewEmployees()
      });
}

module.exports = {
    addDepartment,
    addRole,
    addEmployee
}