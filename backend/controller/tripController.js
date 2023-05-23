//import Trip from '../models/trip.model.js'
const Trip = require('../models/trip.model.js')

const tripRoute = require('../routes/trip.js');

// create new trip
// export const createTrip = async (req,res)=>{

//     const newTrip = new Trip(req.body)

//     try{
//         const savedTrip = await newTrip.save()

//         res.status(200).json({success:true, message:"Successfuly created", data:savedTrip})
//     } catch (err) {
//         res.status(500).json({success:false, message:"Failed to create. Try again"})
//     }
// }
const createTrip = async (req, res) => {
    const newTrip = new Trip(req.body)

    try {
        const savedTrip = await newTrip.save()

        res.status(200).json({ success: true, message: "Successfuly created", data: savedTrip })
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to create. Try again" })
    }
}

// update trip
const updateTrip = async (req, res) => {
    const id = req.params.id

    try {
        const updatedTrip = await Trip.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true })
        res.status(200).json({ success: true, message: "Successfuly updated", data: updatedTrip });

    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update. Try again" });
    }
}

// delete trip
const deleteTrip = async (req, res) => {
    const id = req.params.id;

    try {
        await Trip.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Successfuly deleted" });

    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete. Try again" });
    }
}

// getSingle trip
const getSingleTrip = async (req, res) => {
    const id = req.params.id;
    try {
        const trip = await Trip.findById(id).populate("reviews");
        res.status(200).json({ success: true, message: "Successful", data: trip });

    } catch (err) {
        res.status(404).json({ success: false, message: "Not Found. Try again" });
    }
}

// getAll trip
const getAllTrip = async (req, res) => {
    // for pagination
    const page = parseInt(req.query.page);


    try {

        const trips = await Trip.find({})
            //.populate("reviews")
            //.skip(page * 8).limit(8);

        res.status(200).json({ success: true, count: trips.length, message: "Successful", data: trips });

    } catch (err) {
        res.status(404).json({ success: false, message: "Not Found. Try again" });
    }
}

const getTripsBySearch = async (req, res) => {
    const city_name = new RegExp(req.query.city_name, 'i')
    try {
        const trips = await Trip.find({ city_name })

        res.status(200).json({ success: true, message: "Successful", data: trips });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not Found. Try again" });
    }
}

// get featured trip
const getFeaturedTrip = async (req, res) => {


    try {

        const trips = await Trip.find({featured:True}).limit(8);
            //.populate("reviews")
            //.skip(page * 8).limit(8);

        res.status(200).json({ success: true, message: "Successful", data: trips });

    } catch (err) {
        res.status(404).json({ success: false, message: "Not Found. Try again" });
    }
}

module.exports = {
    createTrip,
    updateTrip,
    deleteTrip,
    getSingleTrip,
    getAllTrip,
    getTripsBySearch,
    getFeaturedTrip
};