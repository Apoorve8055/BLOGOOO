var express = require('express');
var app =  express();
var index_router = require('./routes/index');

app.use(express.static('views'))
app.use(express.static('pages'))

app.set('view engine','ejs');

/*app.get('/', )
*/

app.use('/',index_router);

app.listen(8080,function(){
    console.log("Connected http://127.0.0.l:8080");
});