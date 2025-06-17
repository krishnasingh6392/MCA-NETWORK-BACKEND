const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  designation: String,
  contact: Number,
  email: String,
  area: String,
});
const faculty = mongoose.model("facultyRegistration", userSchema);
module.exports = faculty;
