const db = require("../db/connect");
const inquirer = require("inquirer");

class Query {
  constructor(db) {
    this.db = db;
  }

  viewDept() {
    return this.db.query("SELECT * FROM department", function (err, results) {
      if (err) {
        console.log(err.message);
      }
      console.log("");
      console.table(results);
    });
  }

  viewRoles() {
    return this.db.query(
      `
         SELECT role_id as id, title, dept_name AS department, salary FROM roles
         LEFT JOIN department ON roles.id_from_dept = department.dept_id`,
      (err, results) => {
        if (err) {
          console.log(err.message);
        }
        console.log("");
        console.table(results);
      }
    );
  }

  viewEmployees() {
    return this.db.query(
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
      }
    );
  }

  addDept(data) {
    this.db.query(
      `INSERT INTO department (dept_name) VALUES (?)`,
      [data.name],
      (err, res) => {
        if (err) throw err;
        console.log(" ");
        console.log(`Successfully added ${data.name} department! `);
        console.log(" ");
      }
    );
  }

  addRole(data) {
    this.db.query(
      `INSERT INTO roles (title, salary, id_from_dept) VALUES (?)`,
      [[data.title, data.salary, data.dept]],
      (err, res) => {
        if (err) throw err;
        console.log(" ");
        console.log(
          `Successfully added ${data.title} role to the ${data.dept} department!`
        );
      }
    );
  }

//   getRoleData() {
//     const deptChoices = [];
//     this.db.query(`SELECT * FROM department`, (err, res) => {
//         if (err) throw err;
//         deptChoices = res.map((department) => 
//         ({ name: department.dept_name, value: department.dept_id })); )
//   }

  addEmployee() {}

  updateEmployee() {
    //SELECT * Employees
    //Update: SELECT * roles
  }
}

module.exports = new Query(db);
