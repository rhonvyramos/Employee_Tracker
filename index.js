// allows use of .env file that houses sensitive sql connection data
require("dotenv").config();

const inquirer = require("inquirer");

const department = require("./js/departments.js");
const role = require("./js/roles.js");
const employee = require("./js/employees.js");

// connects to mysql server
const sql_db = require("mysql2");


// uses .env file PORT or default port 3306
const PORT = process.env.PORT || 3306;
const db_connection = sql_db.createConnection({
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host:"localhost"
});

db_connection.connect( (err) => {
    if(err) { console.log("Connection error.") }
    console.log("MySQL server connection established on PORT: " + PORT);
});


// imports prompts from inquirer prompts
const inquirer_prompts = require("./js/inquirer_prompts.js");

// init function begins program execution
async function init() {

    // exit tracker variable will hold answers.overview string
    let exit_tracker;
    await inquirer
        .prompt(
            {
                type: "list",
                name: "overview",
                message: "Enter an Employee Tracker option below...",
                choices: inquirer_prompts,
                loop: false
            }
        )
        .then((answers) => {
            exit_tracker = answers.overview;
            console.log(`You have chosen ${answers.overview}`);
            switch(answers.overview) {
                case "View Departments": department.view_departments(); break;
                case "Add Department": department.add_department(); break;
                case "Update Department Data": department.update_department(); break;
    
                case "View Roles": role.view_roles(); break;
                case "Add Role": role.add_role(); break;
                case "Update Role Data": role.update_role(); break;
    
                case "View Employees": employee.view_employees(); break;
                case "Add Employee": employee.add_employee(); break;
                case "Update Employee Data": employee.update_employee(); break;
            };
        });

        // terminates connection and code if exit_tracker equals the explicit exit tracker string
        if(exit_tracker == "Exit Employee Tracker") { 
            db_connection.end();
            console.log("MySQl connection terminated from PORT: " + PORT);
            return;
        }

        // otherwise call init() again to prompt for options
        init();
};

// init function is where program execution begins
init();