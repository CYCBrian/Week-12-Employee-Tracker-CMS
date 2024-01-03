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
        resolve(results);
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
        resolve(results);
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
        resolve(results);
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
        resolve(results);
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