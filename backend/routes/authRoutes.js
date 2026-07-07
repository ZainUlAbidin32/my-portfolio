const {signUP, logIn, verifyEmail} = require("../controllers/authController")
const express = require ("express")

const router = express.Router();

router.post("/signup", signUP)
router.post('/login', logIn)
router.get('/verify/:token', verifyEmail)

module.exports = router