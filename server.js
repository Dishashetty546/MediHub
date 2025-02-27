const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");

//rest object

const app = express();
//config
dotenv.config();
//middleware
app.use(express.json());
app.use(moragan("dev"));

//routes setup
app.get("/", (req, res) => {
  res.status(200).send({
    message: "server running",
  });
});

//port setup
const port = process.env.PORT || 8000;

//listen port
app.listen(port, () => {
  console.log(
    `server is running in ${process.env.DEV_MODE} Mode on port ${process.env.PORT}`
      .yellow.bold
  );
});
