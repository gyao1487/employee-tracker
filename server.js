//Imports
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 1487;
const app = express ();

// Express middleware
app.use(express.urlencoded({ extended: false}));
app.use (express.json())

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Insert your MySQL username
        user: 'root',
        // Insert your MySQL password
        password:'il0veM3self!',
        database: 'employees_db'
    }
)

async function init() {
    try {
       await app.mngPrompt();
    } catch (err) {
        console.log("Sorry, we've encountered an error!")
    }
}


//Inquirer prompt 
    //Case switches for prompts 
    // inquirer
    //         .prompt(menuQuestion)
    //         .then((data) => {
    //             switch (data.menu) {
    //                 case 'Add an engineer to the team':
    //                     this.engPrompt();
    //                     break;
    //                 case 'Add an intern to the team':
    //                     this.intPrompt();
    //                     // this.menuPrompt();
    //                     break;
    //                 case "Finalize team and generate roster":
    //                     this.finalize()
    //                     break;
    //             }

// View all departments
    //names and ids

// View all roles
    // job, role id, dept, salary

// View all employeeds
    //JOIN table for id, first/last name, job title, deparmtnet, salary, manager

//Adding items (may need constructor functions?)
    // Add a department
        //name of department
    // Add a role
        //name, salary, department
    // Add an employee 
        //first, last, role, manager

//Update role
    //Select name
    //Update role
