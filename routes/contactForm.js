const express = require("express");
const router = express.Router();
const Contact = require("../model/contactForm");
router.post("/contactUser", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: "Message send successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Error Occurred" });
  }
});

module.exports = router;
