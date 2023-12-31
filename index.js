const mysql = require ("mysql2");
const inquirer = require ("inquirer");
const { prompts } = require ("./lib/prompts.js");
const { viewDepartments, viewRoles, viewEmployees } = require ("./lib/viewFunctions.js")

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
      // TODO database navigation
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
      //   else if (answers.menu === "Add a department"){

      // }     
    });
  }

    // TODO database manipulation
        // Add

        // INSERT INTO role (title, salary, department_id) VALUES
        // INSERT INTO employee (first_name, last_name, role_is, manager_id) VALUES
        
        // Remove
        // DELETE from department WHERE ID = ___;
        // DELETE from role WHERE ID = ___;
        // DELETE from employee WHERE ID = ___;
        
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