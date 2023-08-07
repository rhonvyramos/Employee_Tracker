function viewing_roles() {
    console.log("Viewing roles function called");
};

function adding_role() {
    console.log("Adding role function called");
};


function updating_role() {
    console.log("Updating role function called");
};

module.exports = { 
    view_roles: viewing_roles,
    add_role: adding_role,
    update_role: updating_role
};