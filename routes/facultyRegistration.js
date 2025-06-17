const express = require("express");
const router = express.Router();
const faculty = require("../model/facultyRegistartion");
router.post("/facultyregister", async (req, res) => {
  try {
    const newfaculty = new faculty(req.body);
    await newfaculty.save();
    res.status(201).json({ message: "Faculty Registered Successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error Occurred" });
  }
});

module.exports = router;
