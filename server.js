const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const { connected } = require("process");
const connectDb = require("./config/db");
const cors = require("cors");

//rest object

const app = express();
//config
dotenv.config();

//mongodb connection
connectDb();
//middleware
app.use(express.json());
app.use(moragan("dev"));
app.use(cors());
//routes setup
app.use("/api/v1/user", require("./routes/userRoutes"));

//port setup
const port = process.env.PORT || 8000;

//listen port
app.listen(port, () => {
  console.log(
    `server is running in ${process.env.DEV_MODE} Mode on port ${process.env.PORT}`
      .yellow.bold
  );
});
