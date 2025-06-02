const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose
  .connect("mongodb://localhost:27017/mca_network", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Faculty Model
const Faculty = mongoose.model(
  "Faculty",
  new mongoose.Schema({
    name: String,
    department: String,
    email: String,
    phone: String,
    image: String,
    bio: String,
  })
);

// API Route
app.get("/api/faculties", async (req, res) => {
  const faculties = await Faculty.find();
  res.json(faculties);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
