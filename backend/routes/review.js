const express = require('express');

const reviewRoute = express.Router();
const createReview = require('../controller/reviewController.js')
const verifyUser = require('..//utils/verifyToken.js')

reviewRoute.route('/:tripId', verifyUser).post(createReview)

module.exports = reviewRoute;