const inquirer_prompts = [
    {
        type: "list",
        name: "main menu",
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
];

module.exports = inquirer_prompts;