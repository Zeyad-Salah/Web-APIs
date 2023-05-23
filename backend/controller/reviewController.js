const Trip = require('../models/trip.model');
const Review = require('../models/review.model')


const createReview = async (req, res)=> {

    const tripId = req.params.tripId
    const newReview = new Review({...req.body})

    try{
        const saveReview = await newReview.save()

        //after creating a new review now update the reviews array of the trip
        await Trip.fingByIdAndUpdate(tripId, {
            $push: {reviews: savedReview._id}
        })
        res.status(200).json({success:true, message: 'Review Submmitted', data:savedReview})

    }catch (err){
        res.status(500).json({success:false, message: "Failed to submit"})
    }
}

module.exports = createReview;