var express = require('express');
var router = express.Router();
var ctrl = require('../Controller/controller.js');

// for Default page request route
router.get('/',ctrl.index);
router.get('/About',ctrl.about);
router.get('/Login', ctrl.login);
router.get('/Contact', ctrl.Contact);
router.get('/SignUp', ctrl.signUp);
router.get('/Post', ctrl.post);
router.get('*',ctrl.index);

module.exports = router;