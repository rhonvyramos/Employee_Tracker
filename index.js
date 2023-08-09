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

const db_connection = sql.createConnection({
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host:"localhost"
});

db_connection.connect( (err) => {
    if (err) { console.log("Connection error."); console.log(err) }
    console.log("MySQL server connection established on PORT: " + PORT);
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
                choices: inquirer_prompts,
                loop: false
            }
        )
        .then((answers) => {
            exit_tracker = answers.overview;
            console.log(`You have chosen ${answers.overview}`);
            switch(answers.overview) {
                case "View Departments": view_table("departments"); break;
                case "Add Department": department.add_department(); break;
                case "Update Department Data": department.update_department(); break;
    
                case "View Roles": view_table("roles"); break;
                case "Add Role": role.add_role(); break;
                case "Update Role Data": role.update_role(); break;
    
                case "View Employees": view_table("employees"); break;
                case "Add Employee": employee.add_employee(); break;
                case "Update Employee Data": employee.update_employee(); break;
            };
        });

        // terminates connection and code if exit_tracker equals the explicit exit tracker string
        /*if(exit_tracker == "Exit Employee Tracker") { 
            db_connection.end();
            console.log("MySQL server connection terminated from PORT: " + PORT);
            console.log("Employee Tracker exited.")
            return;
        }

        // otherwise call init() again to prompt for options
        init();*/
};

// init function is where program execution begins
init();

function view_table(table_name) {
    db_connection
        .promise()
        .query(`SELECT * FROM ${table_name}`)
        .then(([rows, fields]) => { console.log(rows) })
        .catch(console.log)
        .then( () => db_connection.end())
};

