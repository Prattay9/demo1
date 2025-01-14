const mongoose = require('mongoose');

const URL = process.env.MONGO_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(URL)
        console.log("Connection successful")
    } catch (error) {
        console.error("Database connection failed")
    }
}
module.exports = connectDB;