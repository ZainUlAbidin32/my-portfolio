const mongoose = require("mongoose");
const { error } = require("node:console");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo DB Connected");
    }
    catch (err) {
        console.error("MongoDB Connection Failed");
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;