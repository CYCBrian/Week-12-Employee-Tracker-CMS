const mysql = require ("mysql2");
const inquirer = require ("inquirer");

// Log in credentials and database declaration
const db = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"password",
        database: "company_db"
    },
)

// Establish connection with SQL, then initialize init function.
db.connect((error) => {
    if (error) {
      console.error("Error connecting to the database:", error);
      return;
    }
    console.log("Connected to the company_db database.");
    init();
});

// Function to retrieve information from tables in company_db
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

// Prompts constant
const prompts = [
  {
    type: "list",
    name: "menu",
    message: "Welcome. What would you like to do?",
    choices: [
      "View all departments.",
      "View all roles.",
      "View all employees.",
      "Add a department.",
      "Add a role.",
      "Add an employee.",
      "Update an employee's role.",
    ]
  }
  // {
  //   type: "input",
  //   name: "addRole",
  //   message: "Please enter the role's title, salary, and department (title, salary, department).",
  //   when: (answers) => answers.menu === "Add a role.",
  //   transformer: (input) => {
  //     const [title, salary, department_id] = input.split(",");
  //     return { title, salary, department_id };
  //   }
  // },
]


// Function to handle user selection in menu.
function init() {
  inquirer.prompt(prompts).then((answers) => {
    // SELECT * FROM department;
    if (answers.menu === "View all departments.") {
      // Call the unnamed function directly
      (() => {
        getDepartments()
          .then((departmentInfo) => {
            console.table(departmentInfo);
            init();
          })
          .catch((error) => {
            console.error("Error retrieving departments:", error);
            init();
          });
      })();
    }
  
      // SELECT * FROM role;
      else if (answers.menu === "View all roles.") {
        (() => {
          getRoles()
            .then((roleInfo) => {
              console.table(roleInfo);
              init();
            })
            .catch((error) => {
              console.error("Error retrieving roles:", error);
              init();
            });
        })();
      }
  
      // SELECT * FROM employee;
      else if (answers.menu === "View all employees.") {
        (() => {
          getEmployees()
            .then((employeeInfo) => {
              console.table(employeeInfo);
              init();
            })
            .catch((error) => {
              console.error("Error retrieving employees:", error);
              init();
            });
        })();
      }

      // INSERT INTO department (name) VALUES 
      else if (answers.menu === "Add a department.") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "addDepartment",
              message: "Please enter the name of the department you wish to add.",
              validate: (input) => {
                return input ? true : "Please enter the name of the department.";
              },
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
            init();
          })
          .catch((error) => {
            console.error("Error adding department:", error);
            init();
          });
      }

      // INSERT INTO role (title, salary, department_id) VALUES
      else if (answers.menu === "Add a role.") {
        inquirer
          .prompt([
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
            init();
          })
          .catch((error) => {
            console.error("Error adding role:", error);
            init();
          });
      }
      
      // INSERT INTO employee (first_name, last_name, role_is, manager_id) VALUES
      else if (answers.menu === "Add an employee.") {
        inquirer
          .prompt([
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
            init();
          })
          .catch((error) => {
            console.error("Error adding employee:", error);
            init();
          });
      }

      // UPDATE employee SET role_id = ___ WHERE employee.id = ___
      else if (answers.menu === "Update an employee's role.") {
        updateEmployeeRole(answers)
      }

    });
  }
