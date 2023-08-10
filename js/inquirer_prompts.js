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
    "Update Employee Data",
    "Exit Employee Tracker"
];

function add_into_table (table_name, insert_or_update) {
    return prompts = 
    [
        // adding departments
        {
            type: "input",
            name: "department_name",
            message:"Input Department name... ->",
            validate: (input, answers) => {
                return input ? true : console.log("Not a valid input.")
            },
            when: (answers) => {
                return (table_name == "departments");
            }
        },

        // updating departments
        {
            type: "input",
            name: "department_id",
            message:"Input Department ID that will change name... ->",
            validate: (input, answers) => {
                return input ? true : console.log("Not a valid input.")
            },
            when: (answers) => {
                return (table_name == "departments") && (insert_or_update == "update");
            }
        },
        // adding roles
        {
            type: "input",
            name: "title",
            message:"Input new title... ->",
            validate: (input, answers) => {
                return input ? true : console.log("Not a valid input.")
            },
            when: (answers) => {
                return table_name == "roles";
            }
        },
    
        // regex syntax used from this link
        // https://regexpattern.com/currency/
        {
            type: "input",
            name: "salary",
            message:"Input desired salary (##.##)... -> ",
            validate: (input, answers) => {
                return /^(\$)?(([1-9]\d{0,2}(\,\d{3})*)|([1-9]\d*)|(0))(\.\d{2})?$/.test(input) ? true : message = "Not a valid input. Must be an appropriate currency value."
            },
            when: (answers) => {
                return table_name == "roles";
            }
        },

        // regex syntax used from this link
        // https://stackoverflow.com/questions/1779013/check-if-string-contains-only-digits
        {
            type: "input",
            name: "department_id",
            message:"Input Department ID this role falls under (#)... -> ",
            validate: (input, answers) => {
                return /^\d+$/.test(input) ? true : message = "Not a valid input. Must be a singular number."
            },
            when: (answers) => {
                return table_name == "roles";
            }
        },
    
        // adding employee
        {
            type: "input",
            name: "first_name",
            message:"Input Employee's first name... ->",
            validate: (input, answers) => {
                return input ? true : console.log("Not a valid input.")
            },
            when: (answers) => {
                return table_name == "employees";
            }
        },
        {
            type: "input",
            name: "last_name",
            message:"Input Employee's last name... ->",
            validate: (input, answers) => {
                return input ? true : console.log("Not a valid input.")
            },
            when: (answers) => {
                return table_name == "employees";
            }
        },
        {
            type: "input",
            name: "role_id",
            message:"Input Employee's Role ID... -> ",
            validate: (input, answers) => {
                return /^\d+$/.test(input) ? true : message = "Not a valid input. Must be an appropriate currency value."
            },
            when: (answers) => {
                return table_name == "employees";
            }
        },
        {
            type: "input",
            name: "manager_id",
            message:"Input Employee's Manager ID... -> ",
            validate: (input, answers) => {
                return /^\d+$/.test(input) ? true : message = "Not a valid input. Must be an appropriate currency value."
            },
            when: (answers) => {
                return table_name == "employees";
            }
        },
    ]
    
};

// exports prompts for inquirer object
module.exports = { prompt_choices, add_into_table };