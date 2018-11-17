
    var UsersHandler = require('./usersHandler') //Modulo donde se guardara las acciones de todo lo relacionado con el admin arhivo-> admin.ejs
	,multipart = require('connect-multiparty') //Modulo para enviar datos desde el cliente tipo post.	
	,multipartMiddleware = multipart() //instancia de el objeto multipart
	,fs = require('fs') //file server -> libreria para controlar archivos (guardar,recibir y leer archivos, etc)
	,async = require('async')
	,ObjectID = require('mongodb').ObjectID;

	
module.exports = exports = function(app,db, io) { //cargamos exactamente las mismas variables que vienen de app.js es decir recibe las variables
			
			var usersHandler = new UsersHandler(io,db,fs,ObjectID,"");





			app.use(function (req, res, next) {
				
					// Website you wish to allow to connec
					res.setHeader('Access-Control-Allow-Origin', '*');
				
					// Request methods you wish to allow
					res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
				
					// Request headers you wish to allow
					res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
				
					// Set to true if you need the website to include cookies in the requests sent
					// to the API (e.g. in case you use sessions)
					res.setHeader('Access-Control-Allow-Credentials', true);
				
					// Pass to next layer of middleware
					next();
				});



				  
			  //post
				  

				  app.post('/invertir', usersHandler.postInvertir);

				//put

				  app.put('/completarPerfil', usersHandler.putCompletarPerfil);

		

												


		io.sockets.on('connection', function (socket) {  //conexión de websockets para atrapar o "handle" las peticiones socket.io

		console.log("Nueva conexión del front")

		var usersHandler=  new UsersHandler(io,db,fs,ObjectID,socket);
			
		app.post('/login', usersHandler.postLogin);

		app.post('/registrar', usersHandler.postRegistrar);	

		app.post('/solicitar', usersHandler.postSolicitar);


		});

}