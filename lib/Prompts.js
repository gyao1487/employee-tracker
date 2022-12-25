const menuPrompt = {
  type: "list",
  name: "menu",
  message: "Welcome to the Employee Database. What would you like to do?",
  choices: [
    "View all departments",
    "View all roles",
    "View all employees",
    "Add a department",
    "Add a role",
    "Add an employee",
    "Update an employee role",
  ],
};

const addDeptPrompt = {
  type: "input",
  name: "deptName",
  message: "Please type the name of the new department you are adding:",
};

const addRolePrompt = [
  {
    type: "input",
    name: "roleName",
    message: "Please type the name of the new role:",
  },
  {
    type: "input",
    name: "salary",
    message: "Please input the salary of the role:",
  },
  {
    type: "input",
    name: "deptNum",
    message: "Please enter the department number for this role:",
  },
];

const addEmployeePrompt = [
  {
    type: "input",
    name: "empFirstName",
    message: `Please enter the new employee's first name:`,
  },
  {
    type: "input",
    name: "empLastName",
    message: `Please enter the new employee's last name:`,
  },
  {
    type: "input",
    name: "empRole",
    message: "Please enter the new employee's role:",
  },
  {
    type: "input",
    name: "empManager",
    message: "Please enter the employee id of this employee's manager:",
  },
];

module.exports = {
  menuPrompt,
  addDeptPrompt,
  addRolePrompt,
  addEmployeePrompt,
};
