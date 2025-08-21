const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let AllChats = [
    {
        from: "Professor",
        to: "Berlin",
        msg: "Exit from bank",
        created_at: new Date(),
    },
    {
        from: "neha",
        to: "preeti",
        msg: "send me notes for the exam",
        created_at: new Date(),
    },
    {
        from: "rohit",
        to: "mohit",
        msg: "teach me JS callbacks",
        created_at: new Date(),
    },
    {
        from: "Ranjit",
        to: "Alpesh",
        msg: "Bring me some fruits",
        created_at: new Date(),
    },
    {
        from: "Sam",
        to: "Satya",
        msg: "Love you 3000",
        created_at: new Date(),
    },
]
Chat.insertMany(AllChats);
