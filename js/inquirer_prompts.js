// inquirer_prompts.js file holds prompts for inquirer object
const inquirer_prompts = [

    // main menu
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
            "Update Department Data",
            "Update Role Data",
            "Update Employee Data",
        ],
        loop: false
    },

    // viewing options
    {
        name: "view_departments",
        message: "Here are all the Departments in your business...",
        when: (input, answers) => {
            return input.main_menu == "View Departments" ? console.log("Viewing Departments...") : false;
        }
    },
    {
        name: "view_roles",
        message: "Here are all the Roles in your business...",
        when: (input, answers) => {
            return input.main_menu == "View Roles" ? console.log("Viewing Roles...") : false;
        }
    },
    {
        name: "view_employees",
        message: "Here are all the Employees in your business...",
        when: (input, answers) => {
            return input.main_menu == "View Employees" ? console.log("Viewing Employees...") : false;
        }
    },

    // adding options
    {
        name: "add_department",
        message: "You are now adding a Department to your business...",
        when: (input, answers) => {
            return input.main_menu == "Add Department" ? console.log("Adding Department...") : false;
        }
    },
    {
        name: "add_role",
        message: "You are now adding a Role to your business...",
        when: (input, answers) => {
            return input.main_menu == "Add Role" ? console.log("Adding Role...") : false;
        }
    },
    {
        name: "add_employee",
        message: "You are now adding an Employee to your business...",
        when: (input, answers) => {
            return input.main_menu == "Add Employee" ? console.log("Adding Employee...") : false;
        }
    },

    // updating options
    {
        name: "update_department",
        message: "You are now updating Department Data",
        when: (input, answers) => {
            return input.main_menu == "Update Department Data" ? console.log("Updating Department...") : false;
        }
    },
    {
        name: "update_role",
        message: "You are now updating Role data...",
        when: (input, answers) => {
            return input.main_menu == "Update Role Data" ? console.log("Updating Role...") : false;
        }
    },
    {
        name: "update_employee",
        message: "You are now updating Employee data...",
        when: (input, answers) => {
            return input.main_menu == "Update Employee Data" ? console.log("Updating Employee...") : false;
        }
    },
];

// exports prompts for inquirer object
module.exports = inquirer_prompts;