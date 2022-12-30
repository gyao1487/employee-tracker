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

      //Query for adding role:
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

function addRole() {
  const deptArr = [];
  db.query(`SELECT * FROM departments`, (err, res) => {
    if (err) throw err;
    for (let i = 0; i < res.length; i++) {
      deptArr.push(data[i])}
    });
    
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
            choices: deptArr,
            message: "Select the department that this role belongs to:",
          },
        ]).then (answers => {
          let deptId;
          for (let i=0; i< deptArr.length; i++) {
            if (answers.department === array[i].dept_name) {
              departmentId = array[i].dept_id;
            }
          };
          const query =
                `INSERT INTO roles (title, salary, id_from_dept) VALUES (?)`;
              db.query(
                query,
                [[answers.title, answers.salary, deptId]],
                (err, res) => {
                  if (err) throw err;
                  console.log(" ");
                  console.log(`Successfully added ${answers.title} role to Department ${answers.dept}.`)

        }     )
  });
}

//   const deptArr = [];
//   // db.query("SELECT * FROM department", (err, res) => {
//   //   if (err) throw err;
//   //   // res.forEach((dept) => {
//   //   //   let deptData = {
//   //   //     name: dept.name,
//   //   //     value: dept.id };
//   //   // });
//   //   // departments.push(deptData);

//   //   // for (let i = 0; i < res.length; i++) {
//   //   //   departments.push(Object.values(res[i])[0]);
//   //   }
//   // });
//   inquirer.prompt(
//     [{
//       type: "input",
//       name: "title",
//       message: "Enter title for new role:",
//     },
//     {
//       type: "input",
//       name: "salary",
//       message: "Enter the annual salary of this role:",
//     },
//     {
//       type: "list",
//       name: "dept",
//       choices: departments,
//       message: "Enter the id of the department that this role belongs to:",
//     },
//   ]);

//   inquirer.prompt(questions).then((response) => {
//     const query =
//       `INSERT INTO roles (title, salary, id_from_dept) VALUES (?)`;
//     db.query(
//       query,
//       [[response.title, response.salary, response.dept]],
//       (err, res) => {
//         if (err) throw err;
//         console.log(" ");
//         console.log(
//           `Successfully added ${response.title} role to Department ${response.dept}.`
//         );
//       }
//     );
//   });
// }

// showEmployees()

module.exports = showMenu;
