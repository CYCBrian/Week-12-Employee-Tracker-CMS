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
    message: "Please enter the name of the department you wish to add.",
    when: (answers) => answers.menu === "Add a department."
  },
  {
    type: "input",
    name: "add-role",
    message: "Please enter the role's title, salary, and department (title, salary, department).",
    when: (answers) => answers.menu === "Add a role."
  },
  {
    type: "input",
    name: "add-employee",
    message: "Please enter the employee's first name, last name, role, and manager (first name, last name, role, manager).",
    when: (answers) => answers.menu === "Add a employee."
  },
  {
    type: "list",
    name: "update-employee",
    message: "Please select the employee you wish to update.",
    when: (answers) => answers.menu === "Update an employee's role." || answers.menu === "Update an employee's manager",
    choices: async () => {
      try {
        const employeeInfo = await getEmployees();
        return employeeInfo;
      } catch (error) {
        console.error(error);
        return [];
      }
    }
  },
  {
    type: "list",
    name: "update-employee-role",
    message: "Please select the employee's new role.",
    when: (answers) => answers.menu === "Update an employee's role.",
    choices: async () => {
      try {
        const roleInfo = await getRoles();
        return roleInfo;
      } catch (error) {
        console.error(error);
        return [];
      }
    }
  },
  {
    type: "list",
    name: "update-employee-manager",
    message: "Please select the employee's new manager, or press enter if not applicable",
    when: (answers) => answers.menu === "Update an employee's manager",
    choices: async () => {
      try {
        const managerInfo = await getManagers();
        return managerInfo;
      } catch (error) {
        console.error(error);
        return [];
      }
    }
  },
  {
    type: "list",
    name: "remove-department",
    message: "Please select the department you wish to remove.",
    when: (answers) => answers.menu === "Remove a department.",
    choices: async () => {
      try {
        const departmentInfo = await getDepartments();
        return departmentInfo;
      } catch (error) {
        console.error(error);
        return [];
      }
    }
  },
  {
    type: "list",
    name: "remove-role",
    message: "Please select the role you wish to remove.",
    when: (answers) => answers.menu === "Remove a role.",
    choices: async () => {
      try {
        const roleInfo = await getRoles();
        return roleInfo;
      } catch (error) {
        console.error(error);
        return [];
      }
    }
  },
  {
    type: "list",
    name: "remove-employee",
    message: "Please select the employee you wish to remove.",
    when: (answers) => answers.menu === "Remove a employee.",
    choices: async () => {
      try {
        const employeeInfo = await getEmployees();
        return employeeInfo;
      } catch (error) {
        console.error(error);
        return [];
      }
    }
  }
];

module.exports = {
  getDepartments,
  getRoles,
  getEmployees,
  getManagers,
  prompts,
};