
var crypto = require('crypto');

var synaptic = require('synaptic');
var Neuron = synaptic.Neuron,
	Layer = synaptic.Layer,
	Network = synaptic.Network,
	Trainer = synaptic.Trainer,
	Architect = synaptic.Architect;

function UsersDAO(db,ObjectID,fs) {

    /* If this constructor is called without the "new" operator, "this" points
     * to the global object. Log a warning and call it correctly. */
    if (false === (this instanceof UsersDAO)) {
        console.log('Warning: PostsDAO constructor called without "new" operator');
        return new UsersDAO(db,ObjectID,fs);
    }


    //Colecciones a usar en este modelo

        var usuarios= db.collection("usuarios");
        var solicitudes= db.collection("solicitudes");
        var entrenamiento = db.collection("entrenamiento");


            /*var myNetwork = new Architect.Perceptron(2, 2, 1)
            var trainer = new Trainer(myNetwork)
            
            var trainingSet = [
                {
                  input: [0.51,0.2],
                  output: [0]
                },
                {
                  input: [0.2,1],
                  output: [1]
                },
                {
                  input: [1,0.5],
                  output: [1]
                },
                {
                  input: [1.5,1],
                  output: [0]
                },
              ]


            
            console.log(trainer.train(trainingSet));

            console.log(trainer.test(trainingSet));

            console.log(myNetwork.activate([0,0]));*/




      /*  var maximos=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        var trainingSet = [ ];

        fs.readFile("./germanDataSet.txt", 'utf8', function(err, data) {
            if (err) throw err;
            
            var lines=data.split("\n");

            for (let i = 0; i < lines.length-1; i++) {
                var line = lines[i];

                var numbers=line.split(" ");

                
                var input=[];
                for (let j = 0; j < numbers.length-1; j++) {
                    var  number = parseInt(numbers[j]);

                    if (j==4) number=number*1850;
                        
                    

                    input.push(number);


                    if (number>maximos[j]) maximos[j]=number;



                }

                if (parseInt(numbers[numbers.length-1].replace("\n","")) ==1) var output=1;
                else var output=0;

                trainingSet.push({input:input,output: [  output   ] })

                

                
            }

        
            for (let i = 0; i < trainingSet.length; i++) {
                var element = trainingSet[i];

                for (let j = 0; j < element.input.length; j++) {

                    

                    trainingSet[i].input[j]=trainingSet[i].input[j]/maximos[j];
                    
                }

                
                
            }


                 var myNetwork = new Architect.Perceptron(20, 18, 1);

                var trainer = new Trainer(myNetwork);                
                console.log("entrenando");
                console.log(trainer.train(trainingSet.slice(0, 500),{
                    rate: 0.0081,
                    iterations: 25000,
                    error: 0.008,                    
                    log: 1000                
                })  );

                console.log("entrenando2");

                console.log(trainer.test(trainingSet.slice(500, 1000),{
                    rate: 0.0081,
                    iterations: 25000,
                    error: 0.008,                    
                    log: 1000                
                })  );


                var exported = myNetwork.toJSON();

                //console.log(trainer.test(trainingSet));

                //console.log(myNetwork.activate(["A0","A0"]));



            trainingSet.push({id:"maximos",maximos:maximos});

            trainingSet.push({id:"redEntrenada",redEntrenada:exported});



            
            entrenamiento.insertMany(trainingSet, function(error, result){
                "use strict";
               
            });



            


          });*/



        this.postRegistrar = function(usuario,socket, callback){
            "use strict";
    
            
            usuarios.findOne({correo:usuario.correo}, function(error, docUsu){
                "use strict";
                if(error){
                    return callback(false, "","Error de la base de datos");
                }
                
                if (docUsu) {
    
                    return callback(false,"","El usuario ya existe");
    
                    
                } else {
    
    
                    var _id = new ObjectID();
    
    
                    /*if (user.picture!=null) {
                        user.picture =  user.picture.substring(user.picture.indexOf("base64,")+7);
                        fs.writeFile('./public/imagenes/usuarios/' + 'imagen'+_id+'.jpg', user.picture, 'base64', function(err) {
                        console.log(err);
                        }); 
                        
                    }*/
     
    
                   // user.picture='/imagenes/usuarios/' + 'imagen'+_id+'.jpg';  
    
                    usuarios.insertOne({ _id:_id, nombre: usuario.nombre, apellido: usuario.apellido, celular:usuario.celular, correo: usuario.correo, contrasena: usuario.contrasena,socketid:socket.id, solicitudes:[],inversiones:[]}, function(error, result){
                        "use strict";
                        if(error){
                            return callback(false, "","Error en la base de datos");
                        }
                        return callback(true, _id,"");
                    });
    
                    
                }
    
    
    
    
    
    
            });
            
    
            
        }


        this.postLogin = function(userLogin,socket, callback){
            "use strict";
    
            usuarios.findOneAndUpdate({correo:userLogin.correo},{$set:{socketid:socket.id}}, function(error, result){
                "use strict";
                if(error){
                    return callback(false, {},[],"Error de base de datos");
    
                }

                var docUsu=result.value;
                console.log(docUsu)
    
    
                if (docUsu) {
    
    
                    if (docUsu.contrasena==userLogin.contrasena) {


                        solicitudes.find({},{rango:1}).toArray(function(err, solicitudesArr) {
                            "use strict";
        
                                                                            
                            if (err) return callback(false,{},[],"Error de base de datos");  
                                                                                                                                                    
                            return callback(true,docUsu,solicitudesArr,"");
        
                        });   
    
                        
                        
                    } else {
    
                        return callback(false,{},[],"Usuario o contraseña equivocada");
                        
                    }
    
    
    
                    
    
                    
                } 
                else
                {
                    return callback(false,{},[],"Usuario o contraseña equivocada");
                    
                }
    
    
    
            });
            
    
        }


        this.postSolicitar = function(solicitud, callback) {
            "use strict";
        
            

            var solicitudBD={estado:0};


            usuarios.findOneAndUpdate({_id:ObjectID(solicitud.idusu)},{$push:{solicitudes:solicitudBD}}, function(err,result) {
                "use strict";
            
                    if (err) return callback(err, false);

                    var userDoc=result.value;

                    solicitudBD["solicitante"]={nombre:userDoc.nombre,_id:solicitud.idusu,celular:userDoc.celular};

                    solicitudes.insertOne(solicitudBD, function(err, docD) {
                        "use strict";
                        if (err) return callback(err, false);


                        return callback(err,solicitudBD);
        
                      });



            });
            
        
            }  


            this.postInvertir = function(inversion, callback) {
                "use strict";
    
    
                
                usuarios.findOne({_id:ObjectID(inversion.idusuinve)}, function(err, docinve) {
                    "use strict";
    
    
    
                    solicitudes.findOneAndUpdate({_id:ObjectID(inversion.idsol)},{$set:{estado:1},$push:{inversores:{nombre:docinve.nombre,_id:docinve._id,celular:docinve.celular}}}, function(err,result) {
                        "use strict";
    
                                if (err) return callback(1);            
                                
                                var solicitudDoc=result.value;
    
                                solicitudDoc.estado=1;
    
    
                                usuarios.updateOne({_id:ObjectID(inversion.idusuinve)},{$push:{inversiones:solicitudDoc}}, function(err) {
                                    "use strict";
                    
                                            if (err) return callback(1);                                                      
                                            
                                    
                                    });
    
    
    
                                usuarios.findOneAndUpdate({_id:ObjectID(solicitudDoc.solicitante._id),"solicitudes._id":ObjectID(inversion.idsol)},{$set:{"solicitudes.$.estado":1},$push:{"solicitudes.$.inversores":{nombre:docinve.nombre,_id:docinve._id,celular:docinve.celular}}}, function(err,result) {
                                    "use strict";
                                
                                        if (err) return callback(err, false);
                    
                                        var userDoc=result.value;
    
                                        return callback(true,userDoc.socketid);
    
                                        
    
    
    
                    
                                });
    
                        });
                    
                    });
                                
                } 
 

                //put

                this.putCompletarPerfil = function(docUsu, callback) {
                    "use strict";
        
    
                        usuarios.updateOne({_id:ObjectID(docUsu)},{$set:{}}, function(err) {
                            "use strict";
            
                                    if (err) return callback(false,"Error de base de datos");      
                                    
                                    
                                    return callback(true,"");
                                    
                            
                            });
                                                                    
                    } 
 
  

}

module.exports.UsersDAO = UsersDAO;


