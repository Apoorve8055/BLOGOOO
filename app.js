var express = require('express');
var app =  express();

app.use(express.static('views'))
app.use(express.static('pages'))

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('pages/index',{
        "title":'My Blog',
        header :{"Logo":'BLOGOOO'},
        menu : {
            "Home" : "/home",
            "About" : "/About",
            "Services" : "/Services",
            "Contact" : "/Contact1",
            "GOTO" : 'www.google.com'
        },
        footer : {
            "footname" : 'Copyright © All right Reserved'
        }
    });
 })

app.listen(8080,function(){
    console.log("Connected http://127.0.0.l:8080");
});