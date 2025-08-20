const mysql = require("mysql2");
const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: ''
});

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ];
}
// let q = "SHOW TABLES";
// let q = "INSERT INTO user(id,username,email,password) VALUES ?";

//home route
app.get("/", (req, res) => {
    let q = `SELECT COUNT(*) FROM user`;

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]["COUNT(*)"];
            res.render("home.ejs", { count });
        });
    } catch (err) {
        console.log(err);
        res.send("Some error in DB");
    }
});

//show route
app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;

    try {
        connection.query(q, (err, users) => {
            if (err) throw err;
            // console.log(result);
            res.render("showusers.ejs", { users })
        })
    }
    catch (err) {
        console.log(err);
    }

});

//edit route
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            // console.log(result);
            res.render("edit.ejs", { user });
        })
    }
    catch (err) {
        console.log(err);
    }
    // console.log(id);
});

//patch route
app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password: formPass, username: newUsername } = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    // res.send("Updated");
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (formPass != user.password) {
                res.send("WRONG PASSWORD");
            } else {
                let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
                connection.query(q, (err, result) => {
                    if (err) throw err;
                    res.redirect("/user");
                });
            }
            // console.log(result);
            res.send(user);
        })
    }
    catch (err) {
        console.log(err);
    }
});

app.listen("8080", () => {
    console.log("Server is listening on port 8080")
});




// connection.end();