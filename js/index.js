const inquirer = require("inquirer");

// imports prompts from inquirer prompts
const inquirer_prompts = require("./inquirer_prompts.js");

function init() {
    inquirer
        .prompt(inquirer_prompts)
        .then((answers) => {
            console.log("All prompts exhausted.");
        });
};

init();