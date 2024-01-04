
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

    // function updateEmployeeRole {
  db.query (`SELECT * role`)
  db.query (`SELECT * employee`)
//   const employeeList = res.map(employee => ({ name: employees.first_name + ' ' + employees.last_name, value: employee.id)
//   const roleList = res.map(role =>({name: role.first_name + '' + role.......}))
//   const
//   inquirer.prompt([
//  { type: "list",
//  name: "employee",
//  message: "Please select the employee you wish to update."
//  choices: employeeList

// },
// { type: "list",
// name: "newRole",
// message: "Please select the role you wish to assign."
// choices: roleList
//   ])
// }.then((response)=>{
//   db.query (`UPDATE employees SET ? WHERE ?`,
//                     [
//                         {
//                             role.id: response.newRole
//                         },
//                         {
//                             employee.id: response.employee
//                         }
//                     ],

// })

// john doe, 1

// {
//   type: "list",
//   name: "update-employee",
//   message: "Please select the employee you wish to update.",
//   when: (answers) => answers.menu === "Update an employee's role.", //|| answers.menu === "Update an employee's manager",
//   choices: async () => {
//     try {
//       const employeeInfo = await getEmployees();
//       return employeeInfo;
//     } catch (error) {
//       console.error(error);
//       return [];
//     }
//   }
// },
// {
//   type: "list",
//   name: "update-employee-role",
//   message: "Please select the employee's new role.",
//   when: (answers) => answers.menu === "Update an employee's role.",
//   choices: async () => {
//     try {
//       const roleInfo = await getRoles();
//       return roleInfo;
//     } catch (error) {
//       console.error(error);
//       return [];
//     }
//   }
// },

// db.query(`SELECT * FROM roles;`, (err, res) => {
//   if (err) throw err;
//   let LIST OF ROLES = res.map(roles => ({ name: ROLE STUFF}));
//   db.query(`SELECT * FROM employees;`, (err, res) => {
//       if (err) throw err;
//       let LIST OF EMPLOYEES = res.map(employees => ({EMPLOYEE STUFF}));
//       inquirer
//           .prompt([
//               {
//                   name: 'employee',
//                   type: 'list',
//                   message: "Which employee is having their role updated?",
//                   choices: LIST OF EMPLOYEES
//               },
//               {
//                   name: 'updatedRole',
//                   type: 'list',
//                   message: "Which role will be added to?",
//                   choices: LIST OF ROLES
//               }
//           ])
//           .then((response) => {
//               UPDATING TABLE
//               })
//           })
//   })
// })
// }