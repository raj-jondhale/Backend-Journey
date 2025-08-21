const mongoose = require("mongoose");

main()
    .then(() => {
        console.log("Connection Succesful");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);

User.deleteOne({ name: "Bruce" })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });



// User.updateOne({ name: "Bruce" }, { age: 50 })
//     .then((res) => { console.log(res); })
//     .catch((err) => {
//         console.log(err);
//     })

// User.find({ name: "Bruce" })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// User.find({})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// User.insertMany([
//     { name: "Tony", email: "tony@gmail.com", age: 50 },
//     { name: "Peter", email: "peter@gmail.com", age: 40 },
//     { name: "Bruce", email: "bruce@gmail.com", age: 34 },

// ]).then((res) => {
//     console.log(res);
// })

// const user1 = new User({
//     name: "Adam",
//     email: "adam@yahoo.in",
//     age: 48,
// });

// const user2 = new User({
//     name: "eve",
//     email: "eve@gmail.com",
//     age: 20
// })

// user2.save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => console.log(err));