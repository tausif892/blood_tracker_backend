const mongoose = require("mongoose");

const donorSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, `Please enter the name of the blood donor`]
    },

    age: {
        type: Number,
        required: [true, `Please enter the age of the blood donor`]
    },
    
    blood_group: {
        type: String,
        required: [true,`Please enter the blood group of the blood donor`]
    },

    phone_number: {
        type: Number,
        required: [true,`Please enter the phone number of the blood donor`]
    },

    gender: {
        type: String,
        required: [true,`Please enter the gender of the blood donor`]
    },

    alternate_contact: {
        type: Number,
        required: [false,`Please enter the alternate contact number (optional)`]
    },
});


module.exports = mongoose.model("Donor Information", donorSchema);