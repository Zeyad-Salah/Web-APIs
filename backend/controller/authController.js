const User = require('../models/user.model.js');
var bcrypt = require('bcryptjs');
const jwt =require('jsonwebtoken');

const register = async(req, res)=> {

    try{

        // hashing password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.photo
        });
        await newUser.save();
        res.status(200).json({success:true, message: 'Successfully created'})

    } catch (err) {
        res.status(500).json({success:flase, message: 'Failed to create. Try again'})

    }
};

const signIn = async(req, res)=> {
    const email = req.body.email;

    try{
        const user = await User.findOne({email})

        //if user doe not exist
        if(!user){
            return res.status(404).json({success: false, message: 'User not Found'})
        }

        //if user exists check the password and compare
        const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password)

        // if password is incorrrect
        if(!checkCorrectPassword){
            return res.status(401).json({success: false, message: 'Incorrect email or Password'})
        }

        const {password, role, ...rest} = user._doc

        // create jwt token
        const token = jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET_KEY, {expiresIn:'15d'});

        // set token in the browser cookies and send the response to the client
        res.cookie('accessToken', token, {
            httpOnly: true,
            expires: token.expiresIn
        }).status(200).json({token,success:true, message:'Successfully Signed IN', data:{...rest}, role});

    } catch (err) {

        res.status(500).json({success: false, message: 'Failed To Sign In'});
    }
};

module.exports = {
    register,
    signIn
}