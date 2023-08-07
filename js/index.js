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
            }
        )
        .then((answers) => {
            switch(answers.overview) {
                case "Add Department": department.add_department; break;
            };
            console.log(answers.overview);
            console.log("Prompts exhausted.");
        });
};

init();