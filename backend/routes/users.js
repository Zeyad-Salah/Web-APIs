const express = require('express');

const userRoute = express.Router();

const {
    createUser,
    updateUser,
    deleteUser,
    getSingleUser,
    getAllUser
} = require('../controller/userController.js')
const verifyUser = require('../utils/verifyToken.js')
// const createUser = require('../controller/userController.js');
// const updateUser = require('../controller/userController.js');
// const deleteUser = require('../controller/userController.js');
// const getSingleUser = require('../controller/userController.js');
// const getAllUser = require('../controller/userController.js');

// add new user
userRoute.route('/').post(createUser);

// update trip
userRoute.route('/:id', verifyUser).put(updateUser);

// delete trip
userRoute.route('/:id', verifyUser).delete(deleteUser);

// get Single trip
userRoute.route('/:id', verifyUser).get(getSingleUser);

// get all trips
userRoute.route('/:id', verifyUser).get(getAllUser);

module.exports = userRoute;