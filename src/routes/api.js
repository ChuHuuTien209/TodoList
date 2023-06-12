const express = require('express');
const router = express.Router();

const apiController = require('../controller/apiController');



router.get('/todoitems', apiController.getItems);
router.get('/todoitems/:id', apiController.getItem);
router.post('/todoitems', apiController.postItem);
router.put('/todoitems/:id', apiController.putItem);
router.delete('/todoitems/:id', apiController.deleteItem);




module.exports = router;