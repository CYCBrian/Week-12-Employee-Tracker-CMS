const mysql = require ("mysql2");
const inquirer = require ("inquirer");
const prompts = require ("./lib/prompts");
const { viewDepartments, viewRoles, viewEmployees } = require ("./lib/viewFunctions")
// const { deleteDepartment, deleteRole, deleteEmployee } = require ("./lib/deleteFunctions")
const { addDepartment, addRole, addEmployee }  = require ("./lib/addFunctions")

const db = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"password",
        database: "company_db"
    },
)

db.connect((error) => {
    if (error) {
      console.error("Error connecting to the database:", error);
      return;
    }
    console.log("Connected to the company_db database.");
    init();
});

function init() {
    inquirer.prompt(prompts).then((answers) => {
      // SELECT * FROM department;
      if (answers.menu === "View all departments.") {
        viewDepartments()
      }
  
      // SELECT * FROM role;
      else if (answers.menu === "View all roles.") {
        viewRoles()
      }
  
      // SELECT * FROM employee;
      else if (answers.menu === "View all employees.") {
        viewEmployees()
      }

      // INSERT INTO department (name) VALUES 
      else if (answers.menu === "Add a department.") {
        addDepartment(answers)
      }

      // INSERT INTO role (title, salary, department_id) VALUES
      else if (answers.menu === "Add a role.") {
        addRole(answers)
      }
      
      // INSERT INTO employee (first_name, last_name, role_is, manager_id) VALUES
      else if (answers.menu === "Add a employee.") {
        addEmployee(answers)
      }

      // UPDATE employee SET role_id = ___ WHERE employee.id = ___
      else if (answers.menu === "Update an employee's role.") {
        updateEmployeeRole(answers)
      }

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

    });
  }

  module.exports = init

    // TODO database manipulation
        
        // Update
        // -- Select the employee with ID 3
        // SELECT * FROM employee WHERE ID = 3;
        // -- Update the information within the row
        // UPDATE employee
        // SET role_id = 'New role_id'
        // WHERE ID = 3;
        // UPDATE manager
        // SET manager_id = 'New manager_id'
        // Where ID = 3
        
    // TODO database inner-join