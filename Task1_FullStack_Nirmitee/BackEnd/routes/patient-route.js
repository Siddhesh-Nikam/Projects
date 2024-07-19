
const express = require("express");
const router = express.Router();

const { addPatient , getPatients , getPatient , deletePatient } = require('./../handlers/patientHandle');

router.post("/patients",async (req,res)=>{
    await addPatient(req.body);
    res.send("Done");
});

router.get("/patients",async (req,res)=>{
    let patients = await getPatients();
    res.send(patients);
});

router.get("/patients/:id",async (req,res)=>{
    console.log("Id : " , req.params["id"])
    let patient = await getPatient(req.params["id"]);
    res.send(patient);
});

router.delete("/patients/:id", async (req,res)=>{
    await deletePatient(req.params["id"]);
    res.send();
})

module.exports = router;
