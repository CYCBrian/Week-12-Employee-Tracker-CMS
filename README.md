<a name="top"></a>
# Employee Tracker CMS
![Static Badge](https://img.shields.io/badge/MIT-blue.svg?style=plastic)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Installation and Usage](#installation-and-usage)
- [Technologies Used](#technologies-used)
- [GitHub](#github)
- [License](#license)

## Overview

This command-line application manages a company's employee database, allowing users to view, add, update, and delete departments, roles, and employees. This project is built using Node.js, Inquirer, and MySQL.

## Features

The Employee Tracker provides the following functionality:

- **View All Departments**: Displays a formatted table showing department names and IDs.
- **View All Roles**: Displays a formatted table showing role IDs, role titles, salaries, and associated department IDs.
- **View All Employees**: Displays a formatted table showing employee IDs, first names, last names, associated role IDs, and associated manager IDs (if applicable).
- **Add a Department**: Adds a department to the database by entering a department name.
- **Add a Role**: Adds a role to the database by entering its title, salary, and department ID.
- **Add an Employee**: Adds an employee to the database by entering their first name, last name, role ID, and manager ID (if applicable).
- **Update an Employee's Role**: Updates an employee's role by selecting an employee and assigning a new role.
- **Update an Employee's Manager**: Updates an employee's manager by selecting an employee and assigning a new manager.
- **Delete a Department**: Allows the user to select a department to delete from the database.
- **Delete a Role**: Allows the user to select a role to delete from the database.
- **Delete a Employee**: Allows the user to select a employee to delete from the database.

## Demo

[Watch the app in action!](./Assets/employee_tracker_cms_demo.webm)

## Installation and Usage

To run the application:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Set up your MySQL database using the provided schema in `schema.sql`.
4. Optionally, populate your database with sample data using `seeds.sql`.
5. Configure your database credentials directly in `index.js`.
6. Start the application by running `node index.js` or `npm start` in the terminal.
7. Select an option from the main menu and follow the instructions to achieve the desired results.

## Technologies Used

- ![Static Badge](https://img.shields.io/badge/Node.js-darkgreen.svg?style=plastic)
- ![Static Badge](https://img.shields.io/badge/Inquirer-purple.svg?style=plastic)
- ![Static Badge](https://img.shields.io/badge/MySQL-orange.svg?style=plastic)

## GitHub
[Visit my GitHub Profile here!](https://github.com/CYCBrian)

## License
The project is covered under this license:
[MIT](https://choosealicense.com/licenses/mit)

- - -
[Back to Top](#top)
- - -
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
