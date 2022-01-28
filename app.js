var express = require('express'); 
var app = express(); 
var port = 8080; 
const bodyParser = require('body-parser');

require('./models/db');
const basicRouter = require('./routes/basic.router');

//instance of the express app & implement BodyParser
var app = express(); 
app.use(bodyParser.json());

//allow access to the router file
app.use('', basicRouter); 


app.get('/testApi', (req, res) => {
    res.status(200).json({status: true, messsage : "The api is working!"})
})

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
})