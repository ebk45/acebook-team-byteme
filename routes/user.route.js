const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
// Require the controllers
const user_controller = require('../controllers/user.controller');

//a simple test url to check that all of our files are communicating correctly
router.get('/test', user_controller.test);
const jsonParser = bodyParser.json({extended: true});
router.post('/create', jsonParser, user_controller.user_create);
router.post('/login', jsonParser, user_controller.user_login);


module.exports = router;

// router.get('/:id', user_controller.user_details);
// router.put('/:id/update', urlEncodedParser, user_controller.user_update);
// router.delete('/:id/delete', user_controller.user_delete);
