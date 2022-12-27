//Imports
const mysql = require('mysql2');

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

module.exports = db