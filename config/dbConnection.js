const mongoose = require("mongoose");

const connectDb = async() => {
    try{
        const connect = await mongoose.connect("mongodb+srv://tausif:1Pathanwadi@bloodtracker.03l2z.mongodb.net/bloodtracker?retryWrites=true&w=majority&appName=bloodtracker");
        console.log(`Database connected`, connect.connection.host, connect.connection.name);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDb;