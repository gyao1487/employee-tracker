const { menuPrompt } = require("./Prompts");
const inquirer = require("inquirer");
const db = require("../db/connect");
const cTable = require("console.table");

//Function for showing the main menu
function showMenu() {
  inquirer.prompt(menuPrompt).then((data) => {
    switch (data.menu) {
      //Query for showing department data
      case "View all departments":
        db.query("SELECT * FROM department", function (err, results) {
          if (err) {
            console.log(err.message);
          }
          console.log("");
          console.table(results);
          backToMenu();
        });
        break;

      //Query for showing role data
      case "View all roles":
        db.query(
          `
        SELECT role_id as id, title, dept_name AS department, salary FROM roles
        LEFT JOIN department ON roles.id_from_dept = department.dept_id`,
          (err, results) => {
            if (err) {
              console.log(err.message);
            }
            console.log("");
            console.table(results);
            backToMenu();
          }
        );
        break;

      //Query for showing all employee data:
      case "View all employees":
        db.query(
          `
          SELECT  E.emp_id AS id, 
                  E.first_name AS first_name,
                  E.last_name AS last_name,
                  R.title AS role, D.dept_name AS department,
                  CONCAT(M.first_name, " ", M.last_name) AS manager
          FROM employee AS E 
                  LEFT JOIN roles as R ON E.id_from_roles = R.role_id
                  LEFT JOIN department AS D ON R.id_from_dept = D.dept_id
                  LEFT JOIN employee AS M ON E.manager_id = M.emp_id
              `,
          (err, results) => {
            if (err) {
              console.log(err.message);
            }
            console.log("");
            console.table(results);
            backToMenu();
          }
        );
        break;

      //Query for adding department:
      case "Add a department":
        addDepartment();
        break;
      case "Add a role":
        addRole();
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

function backToMenu() {
  setTimeout(() => {
    showMenu();
  }, 500);
}

function addDepartment() {
  let questions = [
    {
      type: "input",
      name: "name",
      message: "Enter the name of the new department:",
    },
  ];

  inquirer.prompt(questions).then((response) => {
    const query = `INSERT INTO department (dept_name) VALUES (?)`;
    db.query(query, [response.name], (err, res) => {
      if (err) throw err;
      console.log(" ");
      console.log(
        `Successfully added ${response.name}! Department id is ${res.insertId}.`
      );
      console.log(" ");
      backToMenu();
    });
  });
}

function addRole () {
  
}

// showEmployees()

module.exports = showMenu;
