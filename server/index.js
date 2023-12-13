const express = require("express");
const bcrypt = require("bcrypt");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const userSchema = require("./models/userModel")
const postSchema = require("./models/postModel")

//mongodb+srv://cyphenx:Riponbiswas1%40@outfothebox.qudzfye.mongodb.net/?retryWrites=true&w=majority

const app = express();

const PORT = 3000;

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://cyphenx:Riponbiswas1%40@outfothebox.qudzfye.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

const db = mongoose.connection;
db.on("error", (error) => {
  console.error(error);
});
db.once("open", () => console.log("database connected"));

app.get("/", async (req, res) => {
    const user = new userSchema({
        name:"Diganta",
        email:"1@gmail.com",
        userid:"1",
        password:"1234"
    })
    const ret = await user.save();
  res.json({
    ret
  });
});

app.listen(PORT, () => {
  console.log(`Port is running on port ${PORT}`);
});
