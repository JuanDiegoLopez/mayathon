

//Para más información  de cada librería busquen por su nombre en google
var express = require('express') // Express Routing
   , favicon = require('serve-favicon')
  , app = require('express')() // creando el servidor con socket.io
  , server = require('http').createServer(app) //------------------
  , io = require('socket.io').listen(server) // -------------------
  ,MongoClient = require('mongodb').MongoClient
  , routes = require('./routes') // Modulo de rutas, carga una carpeta en el servidor que va a tener todo el enrutamiento
  ,servidorbd= "localhost" //Servidor de la BD
    ,puertobd= "27017",
    morgan  = require('morgan'),
    bodyparser=require('body-parser');
    

    // Configuracion del express

MongoClient.connect('mongodb://'+servidorbd+':'+puertobd+'/maya', function(err, db) { //Se crea la unica conexion en el servidor de la bd
    "use strict"; // tecnicas buenas de programacion
    if(err) throw err;

    // Configuracion del express

    var db= db.db('maya');
    
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(morgan('dev'));
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: true }));
    app.use(express.static(__dirname + '/public'));


    // Pasamos al modulo la conexion app del servidor, db de la base de datos, io de socket.io
    routes(app, db,io);


    server.listen(3576); //socket funcionando en puerto 3576
    console.log('Express server listening on port 3576');
});