const { menuPrompt } = require("./Prompts");
const inquirer = require('inquirer');
const db = require('../db/connect')
const cTable = require('console.table')


function showMenu() {
  inquirer.prompt(menuPrompt)
  .then((data) => {
    switch (data.menu) {
      case "View all departments":
       //showDept();
       db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
    });
        break;
    //   case "View all roles:":
    //     showRoles();
    //     break;
    //   case "View all employees":
    //     showEmployees();
    //     break;
    //   case "Add a department":
    //     addDept();
    //     break;
    //   case "Add a role":
    //     addRolePrompt();
    //     break;
    //   case "Add an employee":
    //     addEmployee();
    //     break;
    //   case "Update an employee role":
    //     updateEmployee();
    //     break;
    }
  }
  );
}

function showDept() {
    const sql = `SELECT * from department`;
    db.query(sql, (err, rows) => {
      if (err) {
        console.log(err.message);
      }
      console.log("");
      console.table(rows);
      setTimeout(() => {
        showMenu();
      }, 800);
    });
  }

// showRoles()

// showEmployees()




module.exports = showMenu