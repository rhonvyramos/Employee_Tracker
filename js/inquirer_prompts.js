// inquirer_prompts.js file holds prompts for inquirer object
const inquirer_prompts = [
    {
        type: "list",
        name: "main_menu",
        message: "What would you like to do?",
        choices: [
            "View Departments",
            "View Roles",
            "View Employees",
            "Add Department",
            "Add Role",
            "Add Employee",
            "Update Employee Data",
            "Update Role Data",
            "Update Department Data"
        ]
    },
    {
        name: "view_departments",
        message: "Here are all the Departments in your business...",
        when: (input, answers) => {
            return input.main_menu == "View Departments" ? console.log("Viewing Departments...") : console.log("Not viewing Departments...");
        }
    },
];

// exports prompts for inquirer object
module.exports = inquirer_prompts;