var model = require('../models/index.js');

exports.index = function (req, res) {
    res.render('pages/index',model.index_content);
}
exports.about = function(req,res){
    res.render("pages/about", model.index_content);
}
exports.login = function (req, res) {
    res.render('pages/Login', model.index_content);
}
exports.Contact = function (req, res) {
    res.render('pages/Contact', model.index_content);
}
exports.signUp = function (req, res) {
    res.render('pages/SignUp', model.index_content);
}
exports.post = function (req, res) {
    res.render('pages/post', model.index_content);
}