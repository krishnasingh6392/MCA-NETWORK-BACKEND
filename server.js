const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const facultyRoute = require("./routes/facultyRegistration");
const ContactRoute = require("./routes/contactForm");
const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/mca_network", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/facultyregister", facultyRoute);
app.use("/contactUser", ContactRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
