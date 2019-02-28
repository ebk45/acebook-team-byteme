const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

console.log("bit route execute")
// Require the controllers
const bit_controller = require('../controllers/bit.controller');

//a simple test url to check that all of our files are communicating correctly
router.get('/test', bit_controller.test);
router.get('/', bit_controller.bit_all);


const urlEncodedParser = bodyParser.urlencoded({extended: false});
router.post('/create', urlEncodedParser, bit_controller.bit_create);
router.get('/:id', bit_controller.bit_details);
router.put('/:id/update', urlEncodedParser, bit_controller.bit_update);
router.delete('/:id/delete', bit_controller.bit_delete);


module.exports = router;
