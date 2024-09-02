const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
const cors = require("cors");
const categoryRoutes = require("./routes/category");
const brandRoutes = require("./routes/brand");
const productRoutes = require("./routes/product");
const customerRoutes = require("./routes/customer");
const authRoute = require("./routes/auth");
const { verifyToken, isAdmin } = require("./middleware/auth-middleware");
 
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is working properly");
});

app.use("/category", verifyToken , isAdmin , categoryRoutes);
app.use("/brand", verifyToken , isAdmin ,brandRoutes);
app.use("/product", verifyToken , isAdmin , productRoutes);
app.use("/customer", verifyToken ,customerRoutes);
app.use("/auth",authRoute);

//Connection of NodeJs & MongoDb

async function connectDb() {
    await mongoose.connect("mongodb://0.0.0.0:27017", {
        dbName:"e-comm-store-db",
    });
    console.log("MongoDb connected successfully");
}

connectDb().catch((err)=>{
    console.error(err);
})


app.listen(PORT, () => {
    console.log("Server is listening at PORT : ", PORT);
});












