function viewing_department() {
    console.log("Viewing department function called");
};

function adding_department() {
    console.log("Adding department function called");
};


function updating_department() {
    console.log("Updating department function called");
};

module.exports = { 
    view_department: viewing_department,
    add_department: adding_department,
    update_department: updating_department
};