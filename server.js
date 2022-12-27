//Imports
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = require ('./db/connect')
const showMenu = require('./lib/utils')

//PORT
const PORT = process.env.PORT || 1487;
const app = express ();

// Express middleware
app.use(express.urlencoded({ extended: false}));
app.use (express.json())


db.connect(err => {
    if (err) throw err;
    console.log("");
    console.log('Database successfully connected!');
    setTimeout(() => {
        init();
    }, 500);
    });

function init () {
    console.log("");
    console.log("Welcome to the Employee Database.");
    setTimeout(() => {
      showMenu();
    }, 1000);
}





//Inquirer prompt 
    //Case switches for prompts 
    // inquirer
    //         .prompt(menuQuestion)
    //         .then((data) => {
    //             switch (data.menu) {
    //                 case 'View all departments':
    //                     this.engPrompt();
    //                     break;
    //                 case 'View all roles':
    //                     this.intPrompt();
    //                     // this.menuPrompt();
    //                     break;
    //                 case 'View all employees':
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

    // Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });
