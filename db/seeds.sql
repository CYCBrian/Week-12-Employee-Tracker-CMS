INSERT INTO department (name) VALUES
('Marketing'), ('Finance'), ('Human Resources'), ('Sales');

INSERT INTO role (title, salary, department_id) VALUES
('Digital Marketing Manager', 110000, 1),
('Full Stack Web Developer', 90000, 1),
('Finance Manager', 120000, 2),
('Financial Analyst', 80000, 2),
('Human Resources Manager', 99000, 3),
('Payroll Administrator', 76000, 3),
('Sales Manager', 105000, 4),
('Sales Consultant', 85000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('John', 'Doe', 1, NULL),
    ('Jane', 'Smith', 2, 1),
    ('Alice', 'Johnson', 2, 1),
    ('Bob', 'Williams', 3, NULL),
    ('Ella', 'Brown', 4, 3),
    ('Mike', 'Davis', 5, NULL),
    ('Sophia', 'Miller', 6, 5),
    ('Henry', 'Wilson', 6, 5),
    ('Olivia', 'Moore', 7, NULL),
    ('Liam', 'Taylor', 8, 7);