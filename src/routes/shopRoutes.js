const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopControllers');

router.get('/', shopControllers.shop);
router.get('/item/:id', shopControllers.shopItemId);
router.post('/item/:id/add', shopControllers.shopItemIdAdd);
router.get('/cart', shopControllers.shopCartGet);
router.post('/cart', shopControllers.shopCartPost);

module.exports = router;




 
