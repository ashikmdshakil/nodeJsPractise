var firstExpress = require('express')
var path = require('path')
var router = firstExpress.Router();
var app = firstExpress(); 
app.set('views', __dirname);
app.set('view engine', 'ejs');
app.get('/', (request, response) =>{
    response.render('index', {name: 'ashik'});
});
app.get('/',router);
app.listen(3333);
  