const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/Todoroutes");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(routes);
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`connected to MongoDB..`))
  .catch((err) => console.log("MongoDB connection error:", err));
app.listen(PORT, () => console.log(`listening on: ${PORT}`));