//Imports
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = require ('./db/connect')
const showMenu = require('./utils/Menus')

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
    console.log(`

    ███████╗███╗░░░███╗██████╗░██╗░░░░░░█████╗░██╗░░░██╗███████╗███████╗
    ██╔════╝████╗░████║██╔══██╗██║░░░░░██╔══██╗╚██╗░██╔╝██╔════╝██╔════╝
    █████╗░░██╔████╔██║██████╔╝██║░░░░░██║░░██║░╚████╔╝░█████╗░░█████╗░░
    ██╔══╝░░██║╚██╔╝██║██╔═══╝░██║░░░░░██║░░██║░░╚██╔╝░░██╔══╝░░██╔══╝░░
    ███████╗██║░╚═╝░██║██║░░░░░███████╗╚█████╔╝░░░██║░░░███████╗███████╗
    ╚══════╝╚═╝░░░░░╚═╝╚═╝░░░░░╚══════╝░╚════╝░░░░╚═╝░░░╚══════╝╚══════╝
    
    ███╗░░░███╗░█████╗░███╗░░██╗░█████╗░░██████╗░███████╗██████╗░
    ████╗░████║██╔══██╗████╗░██║██╔══██╗██╔════╝░██╔════╝██╔══██╗
    ██╔████╔██║███████║██╔██╗██║███████║██║░░██╗░█████╗░░██████╔╝
    ██║╚██╔╝██║██╔══██║██║╚████║██╔══██║██║░░╚██╗██╔══╝░░██╔══██╗
    ██║░╚═╝░██║██║░░██║██║░╚███║██║░░██║╚██████╔╝███████╗██║░░██║
    ╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═╝░░╚═╝░╚═════╝░╚══════╝╚═╝░░╚═╝`);
    console.log("");
    console.log("Welcome to the Employee Manager!");
    console.log("");
    setTimeout(() => {
      showMenu();
    }, 500);
}

app.use((req, res) => {
    res.status(404).end();
  });
