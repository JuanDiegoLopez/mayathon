var UsersDAO = require('../model/users').UsersDAO; //carga de archvo para el acceso a la base de datos



function UsersHandler(io,db,fs,ObjectID,socket) { //cargamos exactamente las mismas variables que vienen de index.js es decir recibe las variables
    "use strict";

    var users = new UsersDAO(db,ObjectID,fs,io); // Data Acces Object para la base de datos

  
    //post

    this.postRegistrar = function(req, res, next) { 
        "use strict";
        
        console.log(req.body);     
        
        
        users.postRegistrar(req.body, socket, function(estado, id_usuario,mensaje){        
        "use strict";

        res.send({estado:estado, id_usuario:id_usuario,mensaje:mensaje});

        }

        );
    } 

    this.postLogin = function(req, res, next){
        "use strict";

        console.log(req.body);

        

        users.postLogin(req.body,socket, function(estado,doc_usu,solicitudes,mensaje){
        "use strict";

        res.send({estado:estado, doc_usu:doc_usu,inversionesGlobales:solicitudes,mensaje:mensaje});


        }
        );
    }


    
    this.postSolicitar = function(req, res, next){
        "use strict";

        console.log(req.body);

        users.postSolicitar(req.body, function(estado,solicitudBD,mensaje){
        "use strict";

        socket.broadcast.emit('nuevaSolicitud', solicitudBD);

        res.send({estado:estado, solicitud:solicitudBD,mensaje:mensaje});


        }
        );
    }


    this.postInvertir = function(req, res, next){
        "use strict";

        console.log(req.body);

        users.postInvertir(req.body, function(estado,socketid,estadoSol){
        "use strict";

        socket.broadcast.emit('actualizarEstadoInversion', {idInversion:req.body.idInversion,monto:req.body.monto,estado:estadoSol } );

         

        socket.to(socketid).emit('actuEstadoInversion',  req.body.idInversion, req.body.monto   );


        res.send({estado:estado});


        }


        );
    }    

    this.putCompletarPerfil = function(req, res, next){
        "use strict";

        console.log(req.body);

        users.putCompletarPerfil(req.body, function(estado,mensaje){
        "use strict";            
                        
        res.send({estado:estado,mensaje:mensaje});


        }


        );
    }     

    this.desconectadoAppEmit = function(reason) { 
        "use strict";

            console.log("desconectadoAppEmit"); 
            console.log(reason);
            
   if (reason=="client namespace disconnect") {


        users.desconectadoAppEmit(socket.id, function(err,estado) {
            "use strict";

            if(err) console.log("error en disconnect")
            if (estado) console.log("correcta la desconexión y reinicio del token")

        
                
        }); 
    
       
   }


        }


    //Support Functions


    function isJson(item) {
        item = typeof item !== "string"
            ? JSON.stringify(item)
            : item;
    
        try {
            item = JSON.parse(item);
        } catch (e) {
            return false;
        }
    
        if (typeof item === "object" && item !== null) {
            return item;
        }
    
        return false;
    }





}

module.exports = UsersHandler; //al crear la instancia es lo que exportara