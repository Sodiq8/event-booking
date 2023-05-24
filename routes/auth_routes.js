const express = require("express");

const {
    signUpController,
    signInController,
} = require("../controllers/auth_controller");


const router = express.Router();

router
    .route("/signup")
    .post(signUpController);

router
    .route("/signin")
    .post(signInController);

module.exports = router;