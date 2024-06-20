const mongoose = require("mongoose");
const DB_URL = "mongodb://127.0.0.1:27017/mp1";

const connectDB = async()=>{
    try {
        await mongoose.connect(DB_URL);
        console.log("Connected To DB");
    } catch (error) {
        console.log("an error has occurred");
        console.log(error);
    }
}
connectDB();