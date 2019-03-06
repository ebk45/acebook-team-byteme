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
const jsonParser = bodyParser.json({extended: true});
router.post('/addlike', jsonParser, bit_controller.bit_like);
router.post('/create', urlEncodedParser, bit_controller.bit_create);
// route.post('/addsdislike', urlEncodedParser, bit_controller.bit_dislike);
// router.post('/delete', bit_controller.bit_delete);
// router.post('/addcomment', bit_controller.bit_comment);
// router.get('/:id', bit_controller.bit_details);
// router.put('/:id/update', urlEncodedParser, bit_controller.bit_update);


module.exports = router;
