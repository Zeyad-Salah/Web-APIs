const User = require('../models/user.model.js')

const UserRoute = require('../models/trip.model.js');

const createUser = async (req,res)=>{
    const newUser = new Trip(req.body)

    try{
        const savedUser = await newUser.save()

        res.status(200).json({success:true, message:"Successfuly created", data:savedUser})
    } catch (err) {
        res.status(500).json({success:false, message:"Failed to create. Try again"})
    }
}

// update trip
const updateUser = async (req, res) => {
    const id =  req.params.id

    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, {new:true})
        res.status(200).json({success:true, message:"Successfuly updated", data:updateUser});

    } catch (err) {
        res.status(500).json({success:false, message:"Failed to update. Try again"});
    }
}

// delete trip
const deleteUser = async (req, res) => {
    const id =  req.params.id;

    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({success:true, message:"Successfuly deleted"});

    } catch (err) {
        res.status(500).json({success:false, message:"Failed to delete. Try again"});
    }
}

// getSingle trip
const getSingleUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        res.status(200).json({success:true, message:"Successful", data:user});

    } catch (err) {
        res.status(404).json({success:false, message:"Not Found. Try again"});
    }
}

// getAll trip
const getAllUser = async (req, res) => {


    try {

        const users = await User.find({});

        res.status(200).json({success:true, message:"Successful", data:users});

    } catch (err) {
        res.status(404).json({success:false, message:"Not Found. Try again"});
    }
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getSingleUser,
    getAllUser
};

// module.exports = createUser;
// module.exports = updateUser;
// module.exports = deleteUser;
// module.exports = getSingleUser;
// module.exports = getAllUser;    