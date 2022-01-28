//require mongoose
const mongoose = require('mongoose'); 

//require the basic model
const Basic = mongoose.model('Basic'); 

//Method to handle creating a new record 
module.exports.createItem = (req, res) => {
console.log("here")
    //create an instance of our model
    var basic  = new Basic()

    //assign the fields defined in the model to the incomming request data
    basic.title = req.body.title; 
    basic.price = req.body.price; 
    basic.quantity = req.body.quantity; 
    basic.productId = req.body.productId; 

    //save the new document
    basic.save((err, obj) => {
        if (err) {
            //return err response if incountered
            res.status(422).json({status: false, error: "Error in creating item"}); 
        }
        else {
            //return success response
            res.status(200).json({status: true, message: "Item successfully created"}); 
        }
    })
}

//method to handle getting all items
module.exports.getItems = (req, res) => {
    //get all items in the collection
    Basic.find()
    .then((items) => {
        if (!items) {
            //no documents found return error
            res.status(404).json({status: false, error: "No items found"}); 
        }

        else {
            //return the items in the response
            res.status(200).json({ items }); 
        }
    })
}

//method to handle updating the quantity of a item
module.exports.updateItem = (req, res) => {
    //find the item to update
    Basic.findOneAndUpdate({productId : req.params.id}, 
        {$set : { quantity: req.body.quantity}}, 
        {new : true}, (err, updatedObj) => {
            if (err) {
                res.status(422).json({status : false, error : "Item not updated"}); 
            }
            else {
                res.status(200).json({ updatedObj }); 
            }
        })
}

//method to handle deleting an item
module.exports.deleteItem = (req, res) => {
    //find the item we want to delete
    Basic.findOneAndDelete({productId : req.params.id}, (err, deletedObj) => {
        if (err) {
            res.status(404).json({status: false, error: "Item not found"});
        }
        else {
            res.status(200).json({status: true, message: "Item successfully deleted"}); 
        }
    })
}