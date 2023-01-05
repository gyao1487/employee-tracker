const { menuPrompt } = require("./Prompts");
const inquirer = require("inquirer");
const db = require("../db/connect");
const cTable = require("console.table");
const sqlQuery = require('../lib/Queries')

//Function for showing the main menu and options
function showMenu() {
  inquirer.prompt(menuPrompt).then((data) => {
    switch (data.menu) {
      //----VIEW ALL DEPARTMENTS----
      case "View all departments":
        sqlQuery.viewDept();
        backToMenu();
        break;

      //----VIEW ALL ROLES----
      case "View all roles":
        sqlQuery.viewRoles();
        backToMenu();
        break;

      //Query for showing all employee data:
      case "View all employees":
        sqlQuery.viewEmployees();
        backToMenu();
        break;

      //Query for adding department:
      case "Add a department":
        addNewDepartment()
        break;

      //Query for adding role:
      case "Add a role":
        addNewRole();
        
        break;
      //   case "Add an employee":
      //     addEmployee();
      //     break;
      //   case "Update an employee role":
      //     updateEmployee();
      //     break;
    }
  });
}

//Back to Menu function - called to return to menu after completing a request
function backToMenu() {
  setTimeout(() => {
    showMenu();
  }, 500);
}


//Helper function for adding new department
const addNewDepartment = async () => {
  const newDept = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the name of the new department:",
    },
  ]);
  sqlQuery.addDept(newDept);
  setTimeout(() => {
    showMenu();
  }, 500);
}

function addNewRole() {
  let deptChoices;
  db.query(`SELECT * FROM department`, (err, res) => {
    if (err) throw err;
    deptChoices = res.map((department) => ({ name: department.dept_name, value: department.dept_id }));
    inquirer.prompt(
      [{
        type: "input",
        name: "title",
        message: "Enter title for new role:",
      },
      {
        type: "input",
        name: "salary",
        message: "Enter the annual salary of this role:",
      },
      {
        type: "list",
        name: "dept",
        choices: deptChoices,
        message: "Select the department that this role belongs to:",
      },
    ])
    .then ((answers) => {
      const query = `INSERT INTO roles (title, salary, id_from_dept) VALUES (?)`;
          db.query(
            query,
            [[answers.title, answers.salary, answers.dept]],
            (err, res) => {
              if (err) throw err;
              console.log(" ");
              console.log(`Successfully added ${answers.title} role to Department ${answers.dept}.`)
              backToMenu();

    }  )
});
    });
}


// showEmployees()

module.exports = showMenu;
