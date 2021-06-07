const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  name: String,
  adhar: String,
  address: String,
  mob: String,
  bloodgroup: String,
  dob: String,
  services: Array,
});

module.exports = mongoose.model("Postusers", PostSchema);
