const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tripSchema = new Schema({
    country_name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    city_name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    activity: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    accommodation: {
        type: String,
        required: true,
        unique: true,
    },
    transportation: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },

}, {
    timestamps: true,
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;