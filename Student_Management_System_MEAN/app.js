const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const mongoose = require("mongoose");//
const userRoutes = require("./routes/user-route");
var cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Running')
})

app.use(userRoutes);

//Connection to mongoose

async function connectDb(){
    await mongoose.connect("mongodb://127.0.0.1:27017",{
        dbName:"UsesDb",
        useNewUrlParser: true,
      useUnifiedTopology: true,
    });
}

//Calling function and error handling

connectDb().catch((err)=>console.log(err));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})