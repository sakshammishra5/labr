const mongoose = require("mongoose");
const labourSchema = require("./labourSchema");


const contractorSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    role:{
        type: String,
        enum: ['labour', 'contractor'],
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneno: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true
    },
    typeofContractor: {
        type: String,
        enum: ['carpenter', 'painter', 'electrician', 'plumber', 'all'],
        required: true
    },
    laboursWorkingUnder: {
        type: mongoose.Types.ObjectId,
        ref: 'Labour'
    }
})


module.exports = mongoose.model("Contractor", contractorSchema)