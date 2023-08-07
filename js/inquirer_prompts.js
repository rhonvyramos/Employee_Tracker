// inquirer_prompts.js file holds prompts for inquirer object
const prompt_choices = [
    "View Departments",
    "View Roles",
    "View Employees",
    "Add Department",
    "Add Role",
    "Add Employee",
    "Update Department Data",
    "Update Role Data",
    "Update Employee Data"
];

/*const inquirer_prompts = [

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
        when: (answers) => {
            return answers.main_menu == "View Departments";
        }
    },
    {
        name: "view_roles",
        message: "Here are all the Roles in your business...",
        when: (answers) => {
            return answers.main_menu == "View Roles";
        }
    },
    {
        name: "view_employees",
        message: "Here are all the Employees in your business...",
        when: (answers) => {
            return answers.main_menu == "View Employees";
        }
    },

    // adding options
    {
        type: "input",
        name: "add_department",
        message: "What is the name of your new Department? -> ",
        when: (answers) => {
            return answers.main_menu == "Add Department";
        }
    },
    {
        type: "input",
        name: "add_role",
        message: "What is the name of this new Role? -> ",
        when: (answers) => {
            return answers.main_menu == "Add Role";
        }
    },
    {
        type: "input",
        name: "add_employee",
        message: "What is the name of the new Employee? -> ",
        when: (answers) => {
            return answers.main_menu == "Add Employee";
        }
    },

    // updating options
    {
        name: "update_department",
        message: "You are now updating Department Data",
        when: (answers) => {
            return answers.main_menu == "Update Department Data";
        }
    },
    {
        name: "update_role",
        message: "You are now updating Role data...",
        when: (answers) => {
            return answers.main_menu == "Update Role Data";
        }
    },
    {
        name: "update_employee",
        message: "You are now updating Employee data...",
        when: (answers) => {
            return answers.main_menu == "Update Employee Data";
        }
    },
];*/

// exports prompts for inquirer object
module.exports = prompt_choices;