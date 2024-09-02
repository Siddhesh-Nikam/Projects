import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000; 
const URI = process.env.MongoDBURI;

// app.get("/",(req,res)=>{
//     res.send("Hello World");
// });

//Connect to mongodb

try{
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("Connected to mongoDB");
} catch(error){
    console.log("Error is : " , error);
}

//Defining route

app.use("/book",bookRoute);

app.use("/user",userRoute);

app.listen(PORT,()=>{
    console.log(`App is learning at port ${PORT}`);
});





