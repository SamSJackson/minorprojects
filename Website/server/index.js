const express = require('express');
const parser = require('body-parser');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: 'statusdb',
})

app.use(cors());
app.use(parser.urlencoded({extended: true}));
app.use(express.json());

app.get('/api/statuses', (req, res) => {
    const sqlQuery = "SELECT * FROM basic_status";
    db.query(sqlQuery, (error, result) => {
        if (error) {
            res.send(`error => ${error}`);
        }
        res.send(result);
    })
})


app.listen(3001, () => {
    console.log("Running on port 3001");
})