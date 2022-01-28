//require mongoose
const mongoose = require('mongoose'); 

//define our collection to write to our data base
var basicSchema = new mongoose.Schema({
    title: String, 
    price: Number,
    quantity: Number,
    productId: Number
})

//export the model
mongoose.model('Basic', basicSchema); 