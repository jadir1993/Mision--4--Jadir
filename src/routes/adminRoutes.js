const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminController')

router.get('/', adminControllers.admin);
router.get('/create', adminControllers.adminCreateGet);
router.post('/create', adminControllers.adminCreatePost);
router.get('/edit/:id', adminControllers.adminEditIdGet);
router.put('/edit/:id', adminControllers.adminEditIdPut);
router.delete('/delete/:id', adminControllers.adminEditIdDelete);

module.exports = router;