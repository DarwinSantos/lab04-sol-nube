var express = require('express');
var app = express();

app.get('/', c_inicio);
app.get('/clientes', c_clientes);
app.get('/productos', c_productos)


function c_inicio(req,res){
    res.send("<h1>Inicio Index en Express </h1>")
}

function c_clientes(req,res){
    res.send("<ul><li>Marco Sullca</li><li>Darwin Santos</li><li>Juan Vilchez</li></ul>")
}

function c_productos(req,res){
    res.send("<ul><li>Laptop Azus</li><li>Laptop Lenovo</li><li>Laptop Hp</li></ul>")
}

function c_server(){
    var host = server.address().address;
    var port = server.address().port;

    console.log(host+ ':' + port)
}

var server = app.listen(9000,c_server)