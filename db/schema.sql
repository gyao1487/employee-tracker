
DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employee;

CREATE TABLE department (
    dept_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR (30),
    id_from_dept INT,
    salary DECIMAL,
    FOREIGN KEY (id_from_dept) 
    REFERENCES department(dept_id) 
    ON DELETE SET NULL
);

CREATE TABLE employee (
    emp_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    id_from_roles INT,
    manager_id INT,
    FOREIGN KEY (id_from_roles) 
    REFERENCES roles(role_id) 
    ON DELETE SET NULL,
    FOREIGN KEY (manager_id) 
    REFERENCES employee(emp_id)
    ON DELETE SET NULL
    );

