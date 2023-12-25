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
    origin: "https://outfothebox.vercel.app/",
  })
);

const PORT = 3000;

/**********DATABASE CONNECTION**********/

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



/**********POST ANSWER**********/

app.post("/postAns", async (req, res) => {
  const ans = req.body.answer;
  // const user = req.body.user;

  const post = new postSchema({
    // name: user,
    content: ans,
  });

  const ret = await post.save();
  res.json({
    ret,
  });
});



/**********GET ALL THE ANSWERS**********/

app.get("/getData", async (req, res) => {
  const posts = await postSchema.find();
  
  res.json({
    posts,
  });
});

app.listen(PORT, () => {
  console.log(`Port is running on port ${PORT}`);
});
