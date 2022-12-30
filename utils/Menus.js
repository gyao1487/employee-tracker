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
  });
}

function backToMenu() {
  setTimeout(() => {
    showMenu();
  }, 500);
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

module.exports = showMenu;
