const User = require("../models/User")
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const crypto = require("crypto")
const sendEmail = require("../utils/sendEmail")

const signUP = async (req, res) => {
    try {
        const {name, email, password} = req.body
        if (!name || !email || !password){
            return res.status(400).json({
                success: false,
                message: "All fields are needed"
            })
        };
        const existingUser = await User.findOne({email})
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        };
        const hashedPassword = await bcrypt.hash(password,10);
        const verificationToken = crypto.randomBytes(32).toString('hex')
        const user = new User({
            name,
            email,
            password: hashedPassword,
            verificationToken,
        })
        await user.save();
        const verificationLink = `${process.env.BACKEND_URL}/api/auth/verify/${verificationToken}`
        await sendEmail(
            email,
            "Verify Your Email",
            `<h2>Welcome ${name}</h2>
            <p>Click on the link to verify you email:</p>
            <a href="${verificationLink}">${verificationLink}</a>`
        )
        return res.status(201).json({
            success: true,
            message: "User registered Successfully"
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "Server Error",
        })
    }
}

const logIn = async(req, res) =>{
    try {
        const {email, password} = req.body
        if(!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Both fields are needed",
            })
        }
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                success: false,
                message: "Invalid email or password",
            })
        }
        if(!user.isVerified) {
            return res.status(403).json({
                success: false,
                message: "Please verify your email before login",
            })
        }
        const isMatch= await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password",
            })
        }
        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET_KEY,
            {expiresIn: "1d"},
        )
        return res.status(200).json({
            success: true,
            message: "Login Successfull",
            token,
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
           success: false,
           message: 'Server Error',
        })
    }
}

const verifyEmail = async(req,res) => {
    try {
        const {token} = req.params;
        const user = await User.findOne({
            verificationToken : token,
        });
        if (!user){
            return res.status(400).json({
                success: false,
                message: "Invalid or expired verification link",
            })
        }
        user.isVerified = true,
        user.verificationToken = undefined,
        await user.save()
        return res.status(200).json({
            success:true,
            message: "Verification Successfull",
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success:false,
            message: 'Server Error',
        })
    }
}

module.exports = {
    signUP, logIn, verifyEmail
}