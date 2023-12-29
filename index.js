const mysql = require("mysql2");
const inquirer = require("inquirer");
const prompts = require("./prompts");

const db = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"password",
        database: "company_db"
    },
    console.log("Connected to the company_db database.")
)

function init(){
inquirer.prompt(prompts).then((answers)=>{
    // TODO database navigation
        // SELECT * FROM department;
        // SELECT * FROM role;
        // SELECT * FROM employee;
    // TODO database manipulation
        // Add
        // INSERT INTO department (name) VALUES
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
});
};

init()

// // Inside the inquirer prompt
// inquirer.prompt([
//   {
//     type: "list",
//     name: "employee",
//     message: "Select an employee to update:",
//     choices: getEmployees() // Call the function to get the current list of employees
//   },
//   {
//     type: "input",
//     name: "newRole",
//     message: "Enter the new role for the employee:"
//   }
// ]).then((answers) => {
//   const selectedEmployee = answers.employee;
//   const newRole = answers.newRole;
//   // Update the employee's role in the database using SQL queries
// });

// In this example, the getEmployees function returns a promise that executes the SQL query to retrieve the employee names from the employee table. The query results are then mapped to extract the employee names, which are returned as an array.


// Make sure to replace "your_username", "your_password", and "your_database" with the appropriate values for your MySQL database connection.


// Let me know if you have any further questions!