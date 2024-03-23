require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

let app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'FINANCIAL_DATA')));

// Connect to database
let connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    } else {
        console.log('Connected to MySQL database as id ' + connection.threadId);
    }
});

// Use of middleware
app.use(bodyParser.json());

// Respond to user
app.get('/', function (req, res) {
    const indexPath = path.join(__dirname, 'index.html');
    // Send the HTML file as a response
    res.sendFile(indexPath);
});

app.post('/save', (req, res) => {
    const { username, email, password } = req.body;
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    connection.query(sql, [username, email, password], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Student added successfully' });
        }
    });
});

const server = app.listen(process.env.PORT, () => {
    console.log(`Server running on http://${process.env.HOST}:${process.env.PORT}`);
});
