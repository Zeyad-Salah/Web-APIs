const Booking = require('../models/booking.model');

//create new booking
const createBooking = async (req, res)=>{
    const newBooking = new Booking(req.body)

    try {
        const savedBooking = await newBooking.save()
        res.status(200).json({success:true, message:"your trip is booked", data:savedBooking})

    }catch (err){
        res.status(500).json({success:true, message:"Internal server error"})

    }
}
// get single booking
const getBooking = async(req, res)=>{
    const id = req.params.id
    try{
        const book = await Booking.findById(id)
        res.status(200).json({success:true, message:"successful", data:book,});
    }catch (err){
        res.status(404).json({success:true, message:"Not Found"})

    }
}

// get all single booking
const getAllBooking = async(req, res)=>{
    try{
        const books = await Booking.find()
        res.status(200).json({success:true, message:"successful", data:books,});
    }catch (err){
        res.status(500).json({success:true, message:"Internal Server Error"})

    }
}

module.exports = {createBooking, getBooking, getAllBooking};