const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();


// Require the controllers
const user_controller = require('../controllers/user.controller');

//a simple test url to check that all of our files are communicating correctly
router.get('/test', user_controller.test);

module.exports = router;
const urlEncodedParser = bodyParser.urlencoded({extended: false});
router.post('/create', urlEncodedParser, user_controller.user_create);
