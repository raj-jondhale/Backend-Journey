const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("you contacted root path");
});
app.get("/apple", (req, res) => {
    res.send("you contacted apple path");
});

app.get("/orange", (req, res) => {
    res.send("you contacted orange path");
});

app.get("/:username/:id", (req, res) => {
    // console.log(req.params);
    let { username, id } = req.params;
    // res.send(`Welcome to the page of @${username}`);
    let htmlStr = `<h1>Welcome to the page of @${username}!</h1>`;
    res.send(htmlStr);
});

app.get("/search", (req, res) => {
    // console.log(req.query);
    // res.send("no results");
    let { q } = req.query;
    if (!q) {
        res.send(`<h1>Nothing Searched</h1>`);
    }
    res.send(`<h1>search results for query: ${q}</h1>`);
})

app.post("/", (req, res) => {
    res.send("you sent a post request")
})


// app.get("*", (req, res) => {
//     res.send("This path does not exist");
// });

// app.use((req, res) => {
//     console.log("request received");
//     let code = "<h1>Fruits </h1> <ul><li>Apple</li><li>Banana</li></ul>"
//     res.send(code);
// });