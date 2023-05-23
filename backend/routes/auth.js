const express = require('express');
const {register, signIn} = require('../controller/authController.js');

const authRoute = express.Router();

authRoute.route('/register').post(register);
authRoute.route('/signIn').post(signIn);

module.exports = authRoute;