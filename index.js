const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
const mongoose = require("mongoose");
require("./routes").default(app);
dotenv.config();

app.use(
  cors({
    methods: "*",
    allowedHeaders: "*",
    origin: "*",
  })
);
app.use(bodyParser.json());

app.use(express.json());

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },

  (err) => {
    if (err) throw err;
    console.log("connected to db");
  }
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>hello</h1>");
});

port = 5000;
app.listen(process.env.PORT || port, () => {
  console.log("app is running at port " + port);
});
