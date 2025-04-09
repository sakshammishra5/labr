const mongoose = require('mongoose');

const labourSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    role:{
        type: String,
        enum: ['labour', 'contractor'],
        required: true
    },
    phoneno: {
        type: Number,
        required: true,
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
    worktype: {
        type: String,
        enum: ['painter', 'labour', 'electrician', 'plumber', 'carpenter'],
        required: true
    },
    workingUnderContractor: {
        type: mongoose.Types.ObjectId,
        ref: 'Contractor'
    }

})


module.exports = mongoose.model('Labour', labourSchema)