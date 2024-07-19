
const Patient = require("./../db/patient");

async function addPatient(patientModel){
    //todo

    let patient = new Patient({
        ...patientModel
    });
    await patient.save();
    return patient.toObject();
}

async function getPatients(){
    const patients = await Patient.find();
    return patients.map(x=>x.toObject());
}

async function getPatient(id){
    const patient = await Patient.findById(id);
    return patient.toObject();
}

async function deletePatient(id){
    await Patient.findByIdAndDelete(id);
}

module.exports = {addPatient , getPatients , getPatient, deletePatient };
