const { viewDepartments, viewRoles, viewEmployees } = require ("./lib/viewFunctions")

function addDepartment(){
    return new Promise((resolve, reject) => {
        viewDepartments()
          .then((answers) => {
            const departmentInfo = answers.name;
            db.query(`INSERT INTO department (name) VALUES ('${departmentInfo}')`, (error, results) => {
              if(error) {
                reject(error);
            } else {
                console.log("Successfully added department.");
                resolve();
            }
          });
        })
        .then(() => {
            return viewRoles()
        })
          .catch((error) => {
            reject(error);
          });
      });
}

function addRole(){
    return new Promise((resolve, reject) => {
        viewRoles()
          .then((answers) => {
            const { title, salary, department_id } = answers;
            db.query( `INSERT INTO role (title, salary, department_id) VALUES ('${title}', ${salary}, ${department_id})`, (error, results) => {
              if(error) {
                reject(error);
            } else {
                console.log("Successfully add role.");
                resolve();
            }
          });
        })
        .then(() => {
            return viewRoles()
        })
          .catch((error) => {
            reject(error);
          });
      });
}

function addEmployee(){
    return new Promise((resolve, reject) => {
        viewEmployees()
          .then((answers) => {
            const { first_name, last_name, role_id, manager_id } = answers;
            db.query( `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${first_name}', '${last_name}', ${role_id}, ${manager_id})`, (error, results) => {
              if(error) {
                reject(error);
            } else {
                console.log("Successfully added employee.");
                resolve();
            }
          });
        })
        .then(() => {
            return viewEmployees()
        })
          .catch((error) => {
            reject(error);
          });
      });
}

module.exports = {
    addDepartment,
    addRole,
    addEmployee
}