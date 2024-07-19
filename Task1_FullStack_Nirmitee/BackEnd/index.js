const express = require('express')
const app = express()
const port = 3000
const mongoose = require("mongoose");
const userRoutes = require("./routes/patient-route")

var cors = require("cors");
app.use(cors());

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.use(userRoutes);

async function connectDb(){
    await mongoose.connect("mongodb://127.0.0.1:27017/" , {
        dbName:"Nirmitee",
    });    
}

connectDb().catch((err)=>console.log(err));

app.listen(port,()=>{
    console.log(`Example app learning on port ${port}`)
})

