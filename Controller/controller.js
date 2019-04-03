var model = require('../models/index.js');

exports.index = function (req, res) {
    res.render('pages/index',model.index_content);
}