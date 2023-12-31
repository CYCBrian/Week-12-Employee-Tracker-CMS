const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "company_db",
});

function getDepartments() {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM department", (error, results) => {
      if (error) {
        reject(error);
      } else {
        const departmentInfo = results.map((row) => ({
          name: `${row.id}`,
          value: `${row.name}`,
        }));
        resolve(departmentInfo);
      }
    });
  });
}

function getRoles() {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM role", (error, results) => {
      if (error) {
        reject(error);
      } else {
        const roleInfo = results.map((row) => ({
          name: `${row.id}`,
          value: `${row.title} ${row.salary} ${row.department_id}`,
        }));
        resolve(roleInfo);
      }
    });
  });
}

function getEmployees() {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM employee", (error, results) => {
      if (error) {
        reject(error);
      } else {
        const employeeInfo = results.map((row) => ({
          name: `${row.id}`,
          value: `${row.first_name} ${row.last_name} ${row.role_id} ${row.manager_id}`,
        }));
        resolve(employeeInfo);
      }
    });
  });
}

function getManagers() {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM employee WHERE manager_id IS NULL", (error, results) => {
      if (error) {
        reject(error);
      } else {
        const managerInfo = results.map((row) => ({
          name: `${row.id}`,
          value: `${row.first_name} ${row.last_name} ${row.role_id}`,
        }));
        resolve(managerInfo);
      }
    });
  });
}

module.exports = {
    getDepartments,
    getRoles,
    getEmployees,
    getManagers,
  };