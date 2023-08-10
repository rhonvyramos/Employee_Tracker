require("dotenv").config();

// allows use of .env file that houses sensitive sql connection data
const inquirer = require("inquirer");
const department = require("./js/departments.js");
const role = require("./js/roles.js");
const employee = require("./js/employees.js");

// imports prompts from inquirer prompts
const inquirer_prompts = require("./js/inquirer_prompts.js");

// uses .env file PORT or default port 3306
const PORT = process.env.PORT || 3306;

// connects to mysql server
const sql = require("mysql2");

const db_connection = sql.createPool({
    connectionLimit: 5,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host:"localhost"
});

// init function begins program execution
function init() {

    // exit tracker variable will hold answers.overview string
    let exit_tracker;
    inquirer
        .prompt(
            {
                type: "list",
                name: "overview",
                message: "Enter an Employee Tracker option below...",
                choices: inquirer_prompts.prompt_choices,
                loop: false
            }
        )
        .then((answers) => {
            exit_tracker = answers.overview;
            switch(answers.overview) {
                case "View Departments": view_table("departments"); break;
                case "Add Department": add_into_table("departments"); break;
                case "Update Department Data": department.update_department(); break;
    
                case "View Roles": view_table("roles"); break;
                case "Add Role": add_into_table("roles"); break;
                case "Update Role Data": role.update_role(); break;
    
                case "View Employees": view_table("employees"); break;
                case "Add Employee": add_into_table("employees"); break;
                case "Update Employee Data": employee.update_employee(); break;

                case "Exit Employee Tracker":
                    db_connection.end()
                    console.log("MySQL server connection terminated from PORT: " + PORT);
                    console.log("Employee Tracker exited.")
            };
        });
};

// function to view a business_db table based on choice from prompts
function view_table(table_name) {
    db_connection
        .promise()
        .query(`SELECT * FROM ${table_name}`)
        .then(([rows, fields]) => { console.log(rows) })
        .catch( (err) => { console.log(err); db_connection.end(); })
};

// function to add new data into a business_db table based on choice from prompts
function add_into_table(table_name) {

    // unassigned variables that will hold inquirer prompt answers
    // the variables that will be assigned will be based on table name that was selected in main menu
    let department_name, title, salary, department_id, first_name, last_name, role_id, manager_id;
    let insert_into_syntax;

    inquirer
        .prompt(inquirer_prompts.add_into_table(table_name))
        .then((answers) => {
            console.log(answers);

            // inserting into departments
            if(answers.department_name) { 
                department_name = `"${answers.department_name}"` 
                insert_into_syntax = `INSERT INTO ${table_name} (department_name) VALUES (${department_name});`
            };

            // inserting into roles
            if(answers.title) { 
                title = `"${answers.title}"`; salary = answers.salary; department_id = answers.department_id;
                insert_into_syntax = `INSERT INTO ${table_name} (title, salary, department_id) VALUES (${title}, ${salary}, ${department_id});`; 
            };

            // inserting into employees
            if(answers.first_name) { 
                console.log(`a new employee exists named ${answers.first_name} ${answers.last_name},  who takes the role ID ${answers.role_id}, and is under manager ID ${answers.manager_id}`) 
            };

            db_connection
            .promise()
            .query(insert_into_syntax)
            .then(([rows, fields]) => { console.log(rows) })
            .catch( (err) => { console.log(err); db_connection.end(); })
        });


};

// init function is where program execution begins
init();

