const mysql = require("mysql2");

// Create a connection to the database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "company_db",
});

// Function to fetch the list of departments from the database
function getDepartments() {
  return new Promise((resolve, reject) => {
    // Execute the SQL query to retrieve the departments
    db.query("SELECT * FROM department", (error, results) => {
      if (error) {
        reject(error);
      } else {
        // Extract the department names from the query results
        const departmentInfo = results.map((row) => `${row.id} ${row.name}`);
        resolve(departmentInfo);
      }
    });
  });
}

// Function to fetch the list of roles from the database
function getRoles() {
  return new Promise((resolve, reject) => {
    // Execute the SQL query to retrieve the roles
    db.query("SELECT * FROM role", (error, results) => {
      if (error) {
        reject(error);
      } else {
        // Extract the role titles from the query results
        const roleInfo = results.map((row) => `${row.id} ${row.title} ${row.salary} ${row.department_id}`);
        resolve(roleInfo);
      }
    });
  });
}

// Function to fetch the list of employees from the database
function getEmployees() {
  return new Promise((resolve, reject) => {
    // Execute the SQL query to retrieve the employees
    db.query("SELECT * FROM employee", (error, results) => {
      if (error) {
        reject(error);
      } else {
        // Extract the employee names from the query results
        const employeeInfo = results.map((row) => `${row.id} ${row.first_name} ${row.last_name} ${row.role_id} ${row.manager_id}`);
        resolve(employeeInfo);
      }
    });
  });
}

// Function to fetch the list of managers from the database
function getManagers() {
  return new Promise((resolve, reject) => {
    // Execute the SQL query to retrieve the managers
    db.query("SELECT * FROM employee WHERE manager_id IS NULL", (error, results) => {
      if (error) {
        reject(error);
      } else {
        // Extract the manager names from the query results
        const managerInfo = results.map((row) => `${row.id} ${row.first_name} ${row.last_name} ${row.role_id}`);
        resolve(managerInfo);
      }
    });
  });
}

const prompts = [
    {
        type: "list",
        name: "menu",
        message: "Welcome. What would you like to do?",
        choices: [
            "View all departments.",
            "View all roles.",
            "View all employees.",
            "View employees by manager.",
            "View employees by department",
            "View total utilized budget of a department.",
            "Add a department.",
            "Add a role.",
            "Add an employee.",
            "Update an employee's role.",
            "Update an employee's manager.",
            "Remove a department.",
            "Remove a role.",
            "Remove an employee."
        ]
    },
    {
        type: "input",
        name: "add-department",
        message: "Please enter the name of the department you wish to add."
    },
    {
        type: "input",
        name: "add-role",
        message: "Please enter the role's title, salary, and department (title, salary, department)."
    },
    {
        type: "input",
        name: "add-employee",
        message: "Please enter the employee's first name, last name, role, and manager (first name, last name, role, manager)."
    },
    {
        type: "list",
        name: "update-employee",
        message: "Please select the employee you wish to update.",
        choices: getEmployees()
    },
    {
        type: "list",
        name: "update-employee-role",
        message: "Please select the employee's new role.",
        choices: getRoles()
    },
    {
        type: "list",
        name: "update-employee-manager",
        message: "Please select the employee's new manager, or press enter if not applicable",
        choices: getManagers()
    },
    {
        type: "list",
        name: "remove-department",
        message: "Please select the department you wish to remove.",
        choices: getDepartments()
    },
    {
        type: "list",
        name: "remove-role",
        message: "Please select the role you wish to remove.",
        choices: getRoles()
    },
    {
        type: "list",
        name: "remove-employee",
        message: "Please select the employee you wish to remove.",
        choices: getEmployees()
    }
]

module.exports = prompts;