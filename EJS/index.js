const express = require("express");
const app = express();

const port = 8080;

const path = require("path");

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { diceValue });
});

app.get("/ig/:username", (req, res) => {
    const instaData = require("./data.json");
    let { username } = req.params;
    const data = instaData[username];
    // console.log(data);
    if (data) {
        res.render("instagram.ejs", { data });
    } else {
        res.render("error.ejs");
    }

});