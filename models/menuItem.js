import mongoose from "mongoose";

const menuSchema = mongoose.Schema({
        title: String,
        message: String,
        price: String,
        type: String,
});

const MenuItem = mongoose.model('MenuItem', menuSchema);

export default MenuItem;