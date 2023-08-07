function viewing_employees() {
    console.log("Viewing employees function called");
};

function adding_employee() {
    console.log("Adding employee function called");
};


function updating_employee() {
    console.log("Updating employee function called");
};

module.exports = { 
    view_employees: viewing_employees,
    add_employee: adding_employee,
    update_employee: updating_employee
};