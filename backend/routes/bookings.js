const express = require('express');
const {verifyAdmin, verifyUser} = require('../utils/verifyToken.js')
const bookingRoute = express.Router();

const {createBooking, getAllBooking, getBooking} = require('../controller/bookingController.js')

bookingRoute.route('/', verifyUser).post(createBooking);
bookingRoute.route('/:id', verifyAdmin).get(getBooking);
bookingRoute.route('/', verifyUser).post(getAllBooking);

module.exports = bookingRoute;