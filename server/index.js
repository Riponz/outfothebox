const express = require("express");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const userSchema = require("./models/userModel");
const postSchema = require("./models/postModel");
const bodyParser = require("body-parser");
const cors = require("cors");

//mongodb+srv://cyphenx:Riponbiswas1%40@outfothebox.qudzfye.mongodb.net/?retryWrites=true&w=majority

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

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

app.post("/ans", async (req, res) => {
  const ans = req.body.answer;
  console.log(req.body.answer);

  const post = new postSchema({
    content: ans,
  });

  const ret = await post.save();
  res.json({
    ret,
  });
});

app.get("/", async (req, res) => {
  const user = new userSchema({
    name: "Diganta",
    email: "1@gmail.com",
    userid: "1",
    password: "1234",
  });
  const ret = await user.save();
  res.json({
    ret,
  });
});

app.get("/view", async (req, res) => {
  const data = await postSchema.find();
  res.json({ data });
});

app.listen(PORT, () => {
  console.log(`Port is running on port ${PORT}`);
});
