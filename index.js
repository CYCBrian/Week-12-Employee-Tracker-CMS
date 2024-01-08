//Import required modules.
const mysql = require ("mysql2");
const inquirer = require ("inquirer");

// Log in credentials and database declaration.
const db = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"password",
        database: "company_db"
    },
)

// Establish connection with SQL, then run init function.
db.connect((error) => {
    if (error) {
      console.error("Error connecting to the database:", error);
      return;
    }
    console.log("Connected to the company_db database.");
    init();
});

// Function to retrieve information from department table in company_db.
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

// Function to retrieve information from role table in company_db.
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

// Function to retrieve information from employee table in company_db.
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

// Prompts constant
const prompts = [
  {
    type: "list",
    name: "menu",
    message: "What would you like to do?",
    choices: [
      // Options for user selection.
      "View all departments.",
      "View all roles.",
      "View all employees.",
      "Add a department.",
      "Add a role.",
      "Add an employee.",
      "Update an employee's role.",
      "Update an employee's manager.",
      "Delete a department.",
      "Delete a role.",
      "Delete an employee.",
      "Exit."
    ]
  }
]

// Flag to track if the welcome message has been displayed
let hasDisplayedWelcomeMessage = false

// Function to handle user selection in menu.
function init() {
  if (!hasDisplayedWelcomeMessage) {
    // Display welcome message only if it hasn't been displayed before
    console.log('         !!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    console.log('         !       WELCOME TO THE      !');
    console.log('         !          EMPLOYEE         !');
    console.log('         !          TRACKER!         !');
    console.log('         !!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    
    hasDisplayedWelcomeMessage = true; // Set the flag to true after displaying the message
  }

  // Prompt user with the menu option.
  inquirer.prompt(prompts).then((answers) => {
    // Handle user selections based on the chosen menu option.

    // If user wants to view the department table.
    if (answers.menu === "View all departments.") {
      // Retrieve and display all departments.
      (() => {
        getDepartments()
          .then((departmentInfo) => {
            console.table(departmentInfo);
            init(); //Return to menu.
          })
          .catch((error) => {
            console.error("Error retrieving departments:", error);
            init(); //Return to menu.
          });
      })();
    }
  
      // If user wants to view the role table.
      else if (answers.menu === "View all roles.") {
        // Retrieve and display all role.
        (() => {
          getRoles()
            .then((roleInfo) => {
              console.table(roleInfo);
              init(); //Return to menu.
            })
            .catch((error) => {
              console.error("Error retrieving roles:", error);
              init();  //Return to menu.
            });
        })();
      }
  
      // If user wants to view the employee table.
      else if (answers.menu === "View all employees.") {
        // Retrieve and display all employees.
        (() => {
          getEmployees()
            .then((employeeInfo) => {
              console.table(employeeInfo);
              init();  //Return to menu.
            })
            .catch((error) => {
              console.error("Error retrieving employees:", error);
              init();  //Return to menu.
            });
        })();
      }

      // If user wants to add a department.
      // Prompt the user to enter the name of the department they wish to add.
      // Insert the department into the database.
      // If successful, log a success message and return to the menu.
      // If there is an error, log the error message and return to the menu.
      else if (answers.menu === "Add a department.") {
        inquirer.prompt([
            {
              type: "input",
              name: "addDepartment",
              message: "Please enter the name of the department you wish to add.",
            },
          ])
          .then((departmentAnswers) => {
            const departmentInfo = departmentAnswers.addDepartment;
            return new Promise((resolve, reject) => {
              db.query(
                `INSERT INTO department (name) VALUES ('${departmentInfo}')`,
                (error, results) => {
                  if (error) {
                    reject(error);
                  } else {
                    console.log("Successfully added department.");
                    resolve();
                  }
                }
              );
            });
          })
          .then(() => {
            init();  //Return to menu.
          })
          .catch((error) => {
            console.error("Error adding department:", error);
            init();  //Return to menu.
          });
      }

      // If user wants to add a role.
      // Prompt the user to enter the title, salary, and department ID for the role.
      // Insert the role into the database.
      // If successful, log a success message and return to the menu.
      // If there is an error, log the error message and return to the menu.
      else if (answers.menu === "Add a role.") {
        inquirer.prompt([
            {
              type: "input",
              name: "title",
              message: "Please enter the role's title:",
            },
            {
              type: "input",
              name: "salary",
              message: "Please enter the role's salary:",
            },
            {
              type: "input",
              name: "department_id",
              message: "Please enter the role's department ID:",
            },
          ])
          .then((roleAnswers) => {
            const { title, salary, department_id } = roleAnswers;
            return new Promise((resolve, reject) => {
              db.query(
                `INSERT INTO role (title, salary, department_id) VALUES ('${title}', ${salary}, ${department_id})`,
                (error, results) => {
                  if (error) {
                    reject(error);
                  } else {
                    console.log("Successfully added role.");
                    resolve();
                  }
                }
              );
            });
          })
          .then(() => {
            init();  //Return to menu.
          })
          .catch((error) => {
            console.error("Error adding role:", error);
            init();  //Return to menu.
          });
      }
      
      // If user wants to add an employee.
      // Prompt the user to enter the first name, last name, role ID, and manager ID for the employee.
      // Insert the employee into the database.
      // If successful, log a success message and return to the menu.
      // If there is an error, log the error message and return to the menu.
      else if (answers.menu === "Add an employee.") {
        inquirer.prompt([
            {
              type: "input",
              name: "firstName",
              message: "Please enter the employee's first name:",
            },
            {
              type: "input",
              name: "lastName",
              message: "Please enter the employee's last name:",
            },
            {
              type: "input",
              name: "roleId",
              message: "Please enter the employee's role ID:",
            },
            {
              type: "input",
              name: "managerId",
              message: "Please enter the employee's manager ID (leave blank if none):",
            },
          ])
          .then((employeeAnswers) => {
            const { firstName, lastName, roleId, managerId } = employeeAnswers;
            return new Promise((resolve, reject) => {
              db.query(
                `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${firstName}', '${lastName}', ${roleId}, ${managerId || null})`,
                (error, results) => {
                  if (error) {
                    reject(error);
                  } else {
                    console.log("Successfully added employee.");
                    resolve();
                  }
                }
              );
            });
          })
          .then(() => {
            init();  //Return to menu.
          })
          .catch((error) => {
            console.error("Error adding employee:", error);
            init();  //Return to menu.
          });
      }

      // If user wants to update an employee's role.
      // Prompt the user to select the employee to update and the new role for the employee.
      // Update the employee's role in the database.
      // If successful, log a success message and return to the menu.
      // If there is an error, log the error message and return to the menu.
      else if (answers.menu === "Update an employee's role.") {
        inquirer
          .prompt([
            {
              type: 'list',
              name: 'employee',
              message: 'Select the employee you wish to update.',
              choices: () => {
                return getEmployees().then((employees) => {
                  return employees.map((employee) => {
                    return {
                      name: `${employee.first_name} ${employee.last_name}`,
                      value: employee.id,
                    };
                  });
                });
              },
            },
            {
              type: 'list',
              name: 'role',
              message: "Select the employee's new role.",
              choices: () => {
                return getRoles().then((roles) => {
                  return roles.map((role) => {
                    return {
                      name: `${ role.title }`,
                      value: role.id,
                    };
                  });
                });
              },
            },
          ])
          .then((updateAnswers) => {
            return new Promise((resolve, reject) => {
              db.query(
                `UPDATE employee SET ? WHERE ?`,
                [
                  { role_id: updateAnswers.role },
                  { id: updateAnswers.employee },
                ],
                (error, results) => {
                  if (error) {
                    reject(error);
                  } else {
                    console.log("Successfully updated employee's role.");
                    resolve();
                  }
                }
              );
            });
          })
          .then(() => {
            init()  //Return to menu.
          })
          .catch((error) => {
            console.error("Error updating employee:", error);
            init();  //Return to menu.
          });
      }

      // If user wants to update an employee's manager.
      // Prompt the user to select the employee to update and the new manager for the employee.
      // Update the employee's manager in the database.
      // If successful, log a success message and return to the menu.
      // If there is an error, log the error message and return to the menu.
      else if (answers.menu === "Update an employee's manager.") {
        inquirer
          .prompt([
            {
              type: 'list',
              name: 'employee',
              message: 'Select the employee you wish to update.',
              choices: () => {
                return getEmployees().then((employees) => {
                  return employees.map((employee) => {
                    return {
                      name: `${employee.first_name} ${employee.last_name}`,
                      value: employee.id,
                    };
                  });
                });
              },
            },
            {
              type: 'list',
              name: 'manager',
              message: "Select the employee's new manager.",
              choices: () => {
                return getManagers().then((managers) => {
                  return managers.map((manager) => {
                    return {
                      name: `${manager.first_name} ${manager.last_name} ${manager.role_id}`,
                      value: manager.id,
                    };
                  });
                });
              },
            },
          ])
          .then((updateAnswers) => {
            return new Promise((resolve, reject) => {
              db.query(
                `UPDATE employee SET ? WHERE ?`,
                [
                  { manager_id: updateAnswers.manager },
                  { id: updateAnswers.employee },
                ],
                (error, results) => {
                  if (error) {
                    reject(error);
                  } else {
                    console.log("Successfully updated employee's manager.");
                    resolve();
                  }
                }
              );
            });
          })
          .then(() => {
            init(); // Return to menu.
          })
          .catch((error) => {
            console.error("Error updating employee:", error);
            init(); // Return to menu.
          });
      }

      // If user wants to delete a department.
      // Prompt the user to select the department to delete.
      // Update the department table in the database.
      // If successful, log a success message and return to the menu.
      // If there is an error, log the error message and return to the menu.
      else if (answers.menu === "Delete a department.") {
        inquirer
          .prompt([
            {
              type: 'list',
              name: 'department',
              message: 'Select the department you wish to delete.',
              choices: () => {
                return getDepartments().then((departments) => {
                  return departments.map((department) => {
                    return {
                      name: department.name,
                      value: department.id,
                    };
                  });
                });
              },
            },
          ])
          .then((deleteDepartment) => {
            return new Promise((resolve, reject) => {
              db.query(
                `DELETE FROM department WHERE ?`,
                [{ id: deleteDepartment.department }],
                (error, results) => {
                  if (error) {
                    reject(error);
                  } else {
                    console.log("Successfully deleted department.");
                    resolve();
                  }
                }
              );
            });
          })
          .then(() => {
            init(); // Return to menu.
          })
          .catch((error) => {
            console.error("Error deleting department:", error);
            init(); // Return to menu.
          });
      }

      // If user wants to delete a department.
      // Prompt the user to select the department to delete.
      // Update the department table in the database.
      // If successful, log a success message and return to the menu.
      // If there is an error, log the error message and return to the menu.
      else if (answers.menu === "Delete a role.") {
        inquirer
          .prompt([
            {
              type: 'list',
              name: 'role',
              message: 'Select the role you wish to delete.',
              choices: () => {
                return getRoles().then((roles) => {
                  return roles.map((role) => {
                    return {
                      name: role.title,
                      value: role.id,
                    };
                  });
                });
              },
            },
          ])
          .then((deleteRole) => {
            return new Promise((resolve, reject) => {
              db.query(
                `DELETE FROM role WHERE ?`,
                [{ id: deleteRole.role }],
                (error, results) => {
                  if (error) {
                    reject(error);
                  } else {
                    console.log("Successfully deleted role.");
                    resolve();
                  }
                }
              );
            });
          })
          .then(() => {
            init(); // Return to menu.
          })
          .catch((error) => {
            console.error("Error deleting department:", error);
            init(); // Return to menu.
          });
      }

      // If user wants to delete an employee.
      // Prompt the user to select the employee to delete.
      // Update the employee table in the database.
      // If successful, log a success message and return to the menu.
      // If there is an error, log the error message and return to the menu.
      else if (answers.menu === "Delete an employee.") {
        inquirer
          .prompt([
            {
              type: 'list',
              name: 'employee',
              message: 'Select the employee you wish to delete.',
              choices: () => {
                return getEmployees().then((employees) => {
                  return employees.map((employee) => {
                    return {
                      name: `${employee.first_name} ${employee.last_name}`,
                      value: employee.id,
                    };
                  });
                });
              },
            },
          ])
          .then((deleteEmployee) => {
            return new Promise((resolve, reject) => {
              db.query(
                `DELETE FROM employee WHERE ?`,
                [{ id: deleteEmployee.employee }],
                (error, results) => {
                  if (error) {
                    reject(error);
                  } else {
                    console.log("Successfully deleted employee.");
                    resolve();
                  }
                }
              );
            });
          })
          .then(() => {
            init(); // Return to menu.
          })
          .catch((error) => {
            console.error("Error deleting employee:", error);
            init(); // Return to menu.
          });
      }

      // If user wants to exit.
      // Display a farewell message.
      // Exit the process with a status code of 0.
      else if (answers.menu === "Exit."){
        console.log('        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        console.log('        !          EXITING...         !')
        console.log('        !      HAVE A GREAT DAY!      !')
        console.log('        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        process.exit(0);
      }

    });
  };
