const inquirer = require("inquirer");
const prompts = require("./prompts");

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
}

init()