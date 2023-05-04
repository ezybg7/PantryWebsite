const cors = require("cors");
const express = require("express");
const mysql = require("mysql2");
const app = express();

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "Pantry",
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("MySQL Connection Success");
    }
});

app.get("/", (req, res) => {
    res.send("<h1> hello </h1>");
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});
