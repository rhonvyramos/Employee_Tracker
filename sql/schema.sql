-- initial schemas to run
-- business database will hold department, role, and employee database
CREATE DATABASE business_db;
USE business_db;

-- department table
CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
    ON DELETE CASCADE,
    name VARCHAR(128),
);

-- role table
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title NAME VARCHAR(128) NOT NULL,
    salary DECIMAL NOT NULL,
    FOREIGN KEY department_id 
    REFERENCES department(id)
    ON DELETE CASCADE
);

-- employee table
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(128) NOT NULL,
    last_name VARCHAR(128) NOT NULL,
    FOREIGN KEY role_id 
    REFERENCES role(id),
    manager_id INT NOT NULL
);