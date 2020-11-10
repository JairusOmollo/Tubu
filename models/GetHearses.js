const mongoose = require ('mongoose');
const { path } = require('../app');
const Schema = mongoose.Schema;

const hearseSchema = new Schema({
    numberPlate: {
        type: String,
        required: true
    }, numberOfSeats: {
        type: Number,
        required: true
    }, vehicle: {
        type: String,
        required: true
    },imagea: {
        type: String,
        required: true
    }, imageb: {
        type: String,
        required: true
    }, mobileNumber: {
        type: Number,
        required: true
    }, contactPerson: {
        type: String,
        required: true
    }

}, {timestamps: true});

const Hearse = mongoose.model('Hearse', hearseSchema, "Hearses");
module.exports = Hearse;