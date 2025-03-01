const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userCtr");

//router object
const router = express.Router();

//routes
//LOGIN || PORT
router.post("/login", loginController);
router.post("register", registerController);

module.exports = router;
