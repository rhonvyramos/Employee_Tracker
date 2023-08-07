const inquirer = require("inquirer");
const department = require("./departments.js");

// imports prompts from inquirer prompts
const inquirer_prompts = require("./inquirer_prompts.js");

// init function begins program execution
function init() {
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
            console.log(`You have chosen ${answers.overview}`);
            switch(answers.overview) {
                case "View Departments": department.view_department(); break;
                case "Add Department": department.add_department(); break;
                case "Update Department Data": department.update_department(); break;
            };
            console.log("Prompts exhausted.");
        });
};

init();