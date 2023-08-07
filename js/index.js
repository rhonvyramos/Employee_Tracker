const inquirer = require("inquirer");

// imports prompts from inquirer prompts
const inquirer_prompts = require("./inquirer_prompts.js");

// init function begins program execution
function init() {
    inquirer
        .prompt(inquirer_prompts)
        .then((answers) => {
            console.log(answers.add_role, answers.add_employee, answers.add_department)
        });
};

init();