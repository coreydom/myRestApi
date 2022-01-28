//require express
const express = require('express'); 

//instance of express router
const router = express.Router(); 

//instance of the basic controller
const Basic = require('../controllers/basic.controller'); 

//define the CRUD routes 
router.post('/createItem', Basic.createItem); 
router.get('/getItems', Basic.getItems);
router.put('/updateItem/:id', Basic.updateItem); 
router.delete('/deleteItem/:id', Basic.deleteItem); 


//export router
module.exports = router; 