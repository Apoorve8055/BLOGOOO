var express = require('express');
var app =  express();
var index_router = require('./routes/index');
app.use(express.static('views'))
app.use(express.static('pages'))
app.set('view engine','ejs');

app.use('/',index_router);
app.use('/Home',index_router);
app.use('/About',index_router);
app.use('/Contact', index_router);
app.use('/Login', index_router);
app.use('/SignUp', index_router);
app.use('/Post', index_router);
app.use('*',index_router);

app.listen(8080,function(){
    console.log("Connected http://127.0.0.l:8080");
});