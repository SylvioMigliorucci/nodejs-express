
    var app = require('express')();
    app.set('view engine', 'ejs');
    app.set('views','./app/views')
    console.log('está on express');
module.exports = function(){
    console.log('retorno express');
    return app;
}