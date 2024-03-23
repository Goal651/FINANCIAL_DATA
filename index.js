require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
let app = express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

var con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.user,
    password: process.env.PASS,
    database: process.env.DB
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'index.html');
    res.sendFile(indexPath);
})


con.connect((error) => {
    if (error) throw error;
    console.log("Connected to the database!");

    //Save data
    app.post('/get_data', (req, res) => {
        var response_object = req.body;
        var user = response_object['user'];
        var sql = "INSERT INTO users (email, password) VALUES (?, ?)";
        con.query(sql, user, (error, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json({ message: 'Student added successfully' });
            }
            console.log('Number of records inserted: ' + result.affectedRows);
            res.send('Form submitted successfully');
        });
    });

    //Get all data
    app.get('/get_data', (req, res) => {
        let sql = "SELECT * FROM users";
        con.query(sql, (error, result) => {
            if (error) throw error;
            res.semd(result);
        })
    });

    app.post('/login', (req, res) => {
        const { email, password } = req.body;
        const sql = 'SELECT password FROM users where email=email ';
        connection.query(sql, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json({ message: 'Student added successfully' });
            }
        });
    });
});


app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
})

