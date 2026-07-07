const dns = require("node:dns/promises");
dns.setServers(["1.1.1.1", "8.8.8.8"]);


const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();
const contactRoutes = require("./routes/contactRoutes");
const authRoutes = require ('./routes/authRoutes')

connectDB();

const app = express();
app.use(cors());
app.use(express.json())

app.use('/api/contact', contactRoutes)
app.use('/api/auth', authRoutes)

app.get('/',(req,res)=>{
    res.send("Backend is running");
})


const PORT = process.env.PORT || 5000;

app.listen (PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})