var app = require('./config/express')();
var rotaProdutos = require('./app/routes/produtos')(app);


app.listen(3000,function(){
    console.log('servidor rodando');
});