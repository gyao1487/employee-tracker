//Imports
const express = require('express');
const mysql = require('mysql2');

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

//Inquirer prompt 
    //Case switches for prompts 

// View all departments

// View all roles

// View all employeeds

// Add a department

// Add a role

// Add an employee 