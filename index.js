// allows use of .env file that houses sensitive sql connection data
require("dotenv").config();

const inquirer = require("inquirer");

const department = require("./js/departments.js");
const role = require("./js/roles.js");
const employee = require("./js/employees.js");

// connects to mysql server
const sql_db = require("mysql2");
/*const db_connection = sql_db.createConnection({
    database: process.env.DB_NAME,
    host: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});*/

const db_connection = sql_db.createConnection({
    database: "business_db",
    user: "root",
    password: "1K[Yv>+O6(rLJ0U!%2ys%kn/,NwGd_9&{}1Ab_F-*)v?eEu8p:>SKRq3:}b?:D{[I*<zK++*|l7O}",
    host:"localhost"
});

db_connection.connect( (err) => {
    if(err) {
        console.log("whats going on dude")
    }
});

// imports prompts from inquirer prompts
const inquirer_prompts = require("./js/inquirer_prompts.js");

// init function begins program execution
async function init() {

    // exit_tracker variable will hold the prompt choice string
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
            console.log(`You have chosen ${answers.overview}`);
            exit_tracker = answers.overview;
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

        // if-else checks if the exit tracker variable does not equal Exit Employee Tracker choice
        // calls init() function if so, otherwise ends execution
        if(exit_tracker != "Exit Employee Tracker") { 
            init(); 
        } else { 
            console.log("Prompts exhausted."); 
            db_connection.end();
            return; 
        };
};

// init function is where program execution begins
init();