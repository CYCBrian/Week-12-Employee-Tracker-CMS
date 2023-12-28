// TODO establish connection to database
// TODO create function to fetch data from databases
// To fetch the list of employees from the database, you can use SQL queries to retrieve the employee names from the employee table. Here's an example using the mysql2 package:


// const mysql = require("mysql2");

// // Create a connection to the database
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "your_username",
//   password: "your_password",
//   database: "your_database"
// });

// // Function to fetch the list of employees from the database
// function getEmployees() {
//   return new Promise((resolve, reject) => {
//     // Execute the SQL query to retrieve the employee names
//     connection.query("SELECT CONCAT(first_name, ' ', last_name) AS employee_name FROM employee", (error, results) => {
//       if (error) {
//         reject(error);
//       } else {
//         // Extract the employee names from the query results
//         const employeeNames = results.map((row) => row.employee_name);
//         resolve(employeeNames);
//       }
//     });
//   });
// }

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
        choices: newRole()
    },
    {
        type: "list",
        name: "update-employee-manager",
        message: "Please select the employee's new manager.",
        choices: newManager()
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
    },
]

module.exports = prompts;