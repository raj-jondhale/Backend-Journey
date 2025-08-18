const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const methodOverride = require("method-override");

app.use(express.json()); // for JSON body
app.use(express.urlencoded({ extended: true })); // for form data

app.use(methodOverride("_method"));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


let posts = [
    {
        id: uuidv4(),
        username: "college",
        content: "I Love coding"
    },
    {
        id: uuidv4(),
        username: "Spiderman",
        content: "spiderman o spiderman tune churaya dil ka chain "
    },
    {
        id: uuidv4(),
        username: "Fadnvis",
        content: "Mi punhha yein"
    },

]

//all posts
app.get("/posts", (req, res) => {
    // res.send("server working well!");
    res.render("index.ejs", { posts });
});

//create post
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

//create post
app.post("/posts", (req, res) => {
    // console.log(req.body);
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
    // res.send("Post request Working");
});

//post details
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id == p.id);
    // console.log(post);
    // console.log(id); 
    // res.send("Request Working");
    res.render("show.ejs", { post });
});

// update
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    // console.log(id);
    let newContent = req.body.content
    let post = posts.find((p) => id == p.id);
    post.content = newContent;
    console.log(post);
    // console.log(newContent);
    // res.send("patch request working");
    res.redirect("/posts");
});

//edit

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id == p.id);
    res.render("edit.ejs", { post });

})

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id != p.id);
    res.redirect("/posts");
})

app.listen(port, () => {
    console.log(`listening to port: ${port}`);
});