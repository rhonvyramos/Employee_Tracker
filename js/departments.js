const sql = require("mysql2");

function viewing_departments() {
    console.log("Viewing departments function called");
    sql.quer

};

function adding_department() {
    console.log("Adding department function called");
};


function updating_department() {
    console.log("Updating department function called");
};

module.exports = { 
    view_departments: viewing_departments,
    add_department: adding_department,
    update_department: updating_department
};