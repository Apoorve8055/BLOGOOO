var express = require('express');
var router = express.Router();
var ctrl = require('../Controller/controller.js');

// for Default page request route
router.get('/',ctrl.index);

module.exports = router;