const express = require("express");
const {registerUser} = require("../Controllers/userController")

const router = express.Router()
const jwt = require("jsonwebtoken")

router.post("/register", registerUser)


module.exports = router;