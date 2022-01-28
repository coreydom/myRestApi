//require mongoose
var mongoose = require('mongoose'); 

// mongoose.set('useCreateIndex', true); 
var mongoDB_URI = 'mongodb://localhost:27017/RestApi'; 

//create our connection to the local MongoDB instance 
mongoose.connect(mongoDB_URI,
    (err) => {
        if (!err) {
            //alert if a successful connection is made 
            console.log('Successful MongoDB connection')
        }
        else {
            //alert if there is an error in the connection
            console.log("Error connecting to MongoDB: " + JSON.stringify(err, undefined, 2)); 
        }
    }
);

//require our model
require('./basic')
