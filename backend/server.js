//import tripRoute from './routes/trip.js'

const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');

require('dotenv').config();
process.on('uncaughtException', function (err) {
    console.log(err);
});

const app = express();
const port = process.env.PORT || 4000;
const corsOptions = {
    origin: true,
    credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const authRoute = require('./routes/auth');
const tripRoute = require('./routes/trip');
const userRoute = require('./routes/users');
const bookingRoute = require('./routes/bookings');
const reviewRoute = require('./routes/review');

app.use('/api/v1/auth', authRoute)
app.use('/api/v1/users', userRoute);
app.use("/api/v1/trips", tripRoute);
app.use("/api/v1/reviews", reviewRoute);
app.use("/api/v1/booking", bookingRoute);


app.listen(port, () => {
    console.log('Server is running on port: ' + port);
})