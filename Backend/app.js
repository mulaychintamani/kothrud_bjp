const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

const Postusers = require("./models/postusers");
// Middel Weare
app.use(bodyparser.json());
const cors = require("cors");

app.use(cors());

// Connect to DB
mongoose.connect(
  "mongodb+srv://root:yuga@2008@cluster0.54fv8.mongodb.net/bjp?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DATABASE IS CONNECTED");
  }
);

// Routs
app.get("/", (req, res) => {
  res.send("We are on home");
});

app.get("/getusers", async (req, res) => {
  try {
    const posts = await Postusers.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

app.post("/addnewusers", (req, res) => {
  const post = new Postusers({
    name: req.body.name,
    adhar: req.body.adhar,
    address: req.body.address,
    mob: req.body.mob,
    bloodgroup: req.body.bloodgroup,
    dob: req.body.dob,
    services: req.body.services,
    rationid: req.body.rationid,
    cuponcode: req.body.cuponcode,
    vhicalno: req.body.vhicalno,
    licence: req.body.licence,
    date: new Date(),
  });
  post.save().then((data) => {
    res.json(data);
  });
});

//listen Server
app.listen(8081);
