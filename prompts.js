// TODO establish connection to database
// TODO create function to fetch data from databases


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
        name: "new-employee-role",
        message: "Please select the employee's new role.",
        choices: newRole()
    },
    {
        type: "list",
        name: "new-employee-manager",
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