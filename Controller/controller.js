//var model = require('./models/index');

exports.index = function (req, res) {
    res.render('pages/index', {
        "title": 'My Blog',
        header: {"Logo": 'BLOGOOO'},
        menu: {
            "Home": "/home",
            "About": "/About",
            "Services": "/Services",
            "Contact": "/Contact1",
            "GOTO": 'www.google.com'
        },
        footer: {
            "footname": 'Copyright © All right Reserved'
        }
    });
}