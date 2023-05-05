const cors = require("cors");
const express = require("express");
const mysql = require("mysql2");
const app = express();

app.use(cors());
app.use(express.json());

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

app.post("/addFood", (req, res) => {
    console.log(req.body);
    if (req.body.food && req.body.date && req.body.amount) {
        var sql = "INSERT INTO food (Name, Exp_date, Quantity) VALUES (?)";
        var values = [req.body.food, req.body.date, req.body.amount];
        db.query(sql, [values], function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    }
});

app.get("/foodnutrition", (req, res) => {
    const options = {
        method: "GET",
        url: "https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition",
        headers: {
            "X-RapidAPI-Key": "8f883f02b5msh7293a7fb3c71a5bp18dc90jsn04765091ee8c",
            "X-RapidAPI-Host": "nutrition-by-api-ninjas.p.rapidapi.com",
        },
        params: req.body.food,
    };

    const fetchData = async () => {
        const response = await axios.request(options);
        return response.data;
    };

    console.log(fetchData());
});

app.get("/getFoods", (req, res) => {
    db.query("SELECT * FROM food", function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

app.post("/removeFood", (req, res) => {
    console.log(req.body.F_ID);

    var sql = "DELETE FROM food WHERE F_ID = " + mysql.escape(req.body.F_ID);
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record deleted");
    });
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});
