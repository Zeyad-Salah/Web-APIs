//import express from 'express'
//import { createTrip } from '../controller/tripController.js'

const express = require('express');
const {
  createTrip,
  updateTrip,
  deleteTrip,
  getSingleTrip,
  getAllTrip,
  getTripsBySearch,
  getFeaturedTrip
} = require('../controller/tripController.js');

const verifyAdmin = require('../utils/verifyToken.js')
const tripRoute = express.Router();

// create new trip
//tripRoute.post('/', createTrip);
tripRoute.route('/').post(createTrip);

// update trip
tripRoute.route('/:id').put(updateTrip);

// delete trip
tripRoute.route('/:id').delete(deleteTrip)

// tripRoute.route('/:id').delete(verifyAdmin, (req, res) => {
//   deleteTrip(req, res);
// });

// get Single trip
tripRoute.route('/:id').get(getSingleTrip);

// get all trips
tripRoute.route('/').get(getAllTrip);

// get trip by search
tripRoute.route('/search/getTripsBySearch').get(getTripsBySearch);
tripRoute.route('/search/getFeaturedTrip').get(getFeaturedTrip);

module.exports = tripRoute;
//export default tripRoute;
// const router = require('express').Router();
// let Trip = require('../models/trip.model.js');

// router.route('/').get((req, res) => {
//     Trip.find()
//         .then(trips => res.json(trips))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {
//     const country_name = req.body.country_name;
//     const city_name = req.body.city_name;
//     const activity = req.body.activity;
//     const accommodation = req.body.accommodation;
//     const transportation = req.body.transportation;
//     const price = Number(req.body.price);

//     const newTrip = new Trip({ 
//         country_name,
//         city_name,
//         activity,
//         accommodation,
//         transportation,
//         price,
//      });

//     newTrip.save()
//         .then(() => res.json('Trip added!'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

//module.exports = router;