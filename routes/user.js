const express = require("express");
const router = express.Router();

const UserAuth = require("../middleware/check-auth");
const UserController = require("../controllers/user");
const {validateSignupRequest, validateSigninRequest, isRequestValidated } = require("../validators/auth");


router.post("/signup", validateSignupRequest, isRequestValidated, UserController.user_signup);

router.post('/login', validateSigninRequest, isRequestValidated, UserController.user_login);




module.exports = router;