-- initial schemas to run
-- business database will hold department, role, and employee database
CREATE DATABASE business_db;
USE business_db;

-- department table
CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(128)
);

-- role table
CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(128) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) 
    REFERENCES departments(id)
    ON DELETE CASCADE
);

-- employee table
CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(128) NOT NULL,
    last_name VARCHAR(128) NOT NULL,
    role_id INT NOT NULL,
    FOREIGN KEY (role_id) 
    REFERENCES roles(id),
    manager_id INT NOT NULL
);

-- drops database if full restructure is required
-- DROP DATABASE IF EXISTS business_db;