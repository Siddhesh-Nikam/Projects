const mongoose = require("mongoose");
const { Schema } = mongoose;

const wishListSchema = new mongoose.Schema({
    userId:{ type: Schema.Types.ObjectId, ref: 'users' },
    productsId:{ type: Schema.Types.ObjectId, ref: 'products' },
});

const Wishlist = mongoose.model("wishlist",wishListSchema);

module.exports=Wishlist;


