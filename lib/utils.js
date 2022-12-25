const { menuPrompt } = require("./Prompts");
const inquirer = require('inquirer');
function showMenu() {
  inquirer.prompt(menuPrompt)
//   .then((data) => {
//     switch (data.menu) {
//       case "View all departments:":
//         showDept();
//         break;
//       case "View all roles:":
//         showRoles();
//         break;
//       case "View all employees":
//         showEmployees();
//         break;
//       case "Add a department":
//         addDept();
//         break;
//       case "Add a role":
//         addRolePrompt();
//         break;
//       case "Add an employee":
//         addEmployee();
//         break;
//       case "Update an employee role":
//         updateEmployee();
//         break;
//     }
//   });
}


module.exports = showMenu