const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    patientName:String,
    patientAge:Number,
    referedDoctor:String,
    medicalReason:String,
    Location:String
});

const Patient = mongoose.model('patients',patientSchema);
module.exports = Patient;

