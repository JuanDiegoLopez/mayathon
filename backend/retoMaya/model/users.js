
var crypto = require('crypto');

var schedule = require('node-schedule');

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'agrotichdsp@gmail.com',
           pass: 'henarfu1234'
       }
   });

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
        return new UsersDAO(db,ObjectID,fs,io);
    }


    //Colecciones a usar en este modelo

        var usuarios= db.collection("usuarios");
        var solicitudes= db.collection("solicitudes");
        var entrenamiento = db.collection("entrenamiento");


        var rule = new schedule.RecurrenceRule();
        rule.dayOfWeek = [0, new schedule.Range(0, 7)];
        rule.hour = 23;
        rule.minute = 55;
    
        var j = schedule.scheduleJob(rule, function(){
    
            var today=new Date();

            solicitudes.find({ fechaFin:{ $lte:today}, estado:{ $lte:1}    }).toArray(function(err, solicitudesArr) {
                "use strict";

                if (err) console.log("Error de bd en fechas (schedule)");
    
                console.log("solicitudes cambiadas (schedule)");

                if (solicitudesArr.length>0) {

                    async.forEachOf(solicitudesArr, function (value, key, callbackAs) {

                        

                        
                        solicitudes.updateOne({_id:ObjectID(String(value._id))},{$set:{estado:3}}, function(err,result) {
                            "use strict";      
    
                            if (err) return callbackAs(true);  
    
                           // console.log("historial de " + value);
    
                    
                            usuarios.findOne( { _id:ObjectID(String(value.solicitante._id)) }, function(err, docusu) {
                                "use strict";       
    
                                if (err) return callbackAs(true);  
    
                                io.emit('solicitudExpirada', { idInversion:value._id }   );


                                const mailOptions = {
                                    from: 'crowleanding@crowd.com', // sender address
                                    to: docusu.correo, // list of receivers
                                    subject: 'Hola '+docusu.nombre+' lamentablemente una solicitud tuya ha sido rechazada', // Subject line
                                    html: '<p>Hola '+docusu.nombre+',</p> espero te encuentres bien. Tu solicitud con título '+value.titulo+' ha sido rechazada debido a su tiempo de expiración. Revisa nuestra APP para más detalles.'// plain text body
                                  };

                                  transporter.sendMail(mailOptions, function (err, info) {
                                    if(err)
                                      console.log(err)
                                    else
                                      console.log(info);
                                 });

    
                                    return callbackAs();
    
                                
    
    
    
                      
    
                                });  
    
    
    
                        });    
    
                    }, function (err) {
                        if (err) return callback(true);
    
                               
                        
    
    
    
                            }); 


                    
                } else {


                    
                }

             






            });  

    
    
        });


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
    
                    usuarios.insertOne({ _id:_id, nombre: usuario.nombre, apellido: usuario.apellido, celular:usuario.celular, correo: usuario.correo, contrasena: usuario.contrasena,socketid:socket.id,creditoExistente16:0, solicitudes:[],inversiones:[]}, function(error, result){
                        "use strict";
                        if(error){
                            return callback(false, "","Error en la base de datos");
                        }


                        const mailOptions = {
                            from: 'crowleanding@crowd.com', // sender address
                            to: usuario.correo, // list of receivers
                            subject: 'Hola '+usuario.nombre+' Bienvenido al mundo de los negocios', // Subject line
                            html: '<p>Hola '+usuario.nombre+',</p> espero te encuentres bien. Te damos la bienvenida a nuestra plataforma donde podras financiar y recibir dinero para tus proyectos. Revisa nuestra APP para más detalles.'// plain text body
                          };

                          transporter.sendMail(mailOptions, function (err, info) {
                            if(err)
                              console.log(err)
                            else
                              console.log(info);
                         });
                        
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
        

            entrenamiento.find(   {$or: [ {id:"maximos"},{id:"redEntrenada"} ]},{sort: { id:1} }  ).toArray(function(err,red){
                "use strict";
                
                if (err) return callback(false,{},"Error de bd");

                var maximos=red[0].maximos;
                var redEntrenada=red[1];

                var redImported = Network.fromJSON(redEntrenada.redEntrenada);
    
                usuarios.findOne({_id:ObjectID(solicitud.id_usuario)}, function(err, docuser) {
                    "use strict";
    
    
            
                    var riesgo= 1-redImported.activate([docuser.corriente1/maximos[0],parseInt(solicitud.duracion2)/maximos[1],docuser.historia3/maximos[2],solicitud.categoria4/maximos[3],solicitud.monto5/maximos[4],docuser.ahorros6/maximos[5],docuser.empleoDesde7/maximos[6],docuser.porceTasa8/maximos[7],docuser.civilSexo9/maximos[8],solicitud.fiador10/maximos[9],docuser.residenciaDesde11/maximos[10],docuser.propiedades12/maximos[11],docuser.edad13/maximos[12],docuser.planesPago14/maximos[13],docuser.residencia15/maximos[14],docuser.creditoExistente16/maximos[15],docuser.trabajo17/maximos[16],docuser.depende18/maximos[17],1/maximos[18] ,docuser.extranjero20/maximos[19]    ]);
                    console.log([docuser.corriente1/maximos[0],parseInt(solicitud.duracion2)/maximos[1],docuser.historia3/maximos[2],solicitud.categoria4/maximos[3],parseInt(solicitud.monto5)/maximos[4],docuser.ahorros6/maximos[5],docuser.empleoDesde7/maximos[6],docuser.porceTasa8/maximos[7],docuser.civilSexo9/maximos[8],solicitud.fiador10/maximos[9],docuser.residenciaDesde11/maximos[10],docuser.propiedades12/maximos[11],docuser.edad13/maximos[12],docuser.planesPago14/maximos[13],docuser.residencia15/maximos[14],docuser.creditoExistente16/maximos[15],docuser.trabajo17/maximos[16],docuser.depende18/maximos[17],1/maximos[18] ,docuser.extranjero20/maximos[19] ])
                    console.log([docuser.corriente1,parseInt(solicitud.duracion2),docuser.historia3,solicitud.categoria4,parseInt(solicitud.monto5),docuser.ahorros6,docuser.empleoDesde7,docuser.porceTasa8,docuser.civilSexo9,solicitud.fiador10,docuser.residenciaDesde11,docuser.propiedades12,docuser.edad13,docuser.planesPago14,docuser.residencia15,docuser.creditoExistente16,docuser.trabajo17,docuser.depende18,1 ,docuser.extranjero20 ])
                   console.log( 1-redImported.activate(  [docuser.corriente1,parseInt(solicitud.duracion2),docuser.historia3,solicitud.categoria4,parseInt(solicitud.monto5),docuser.ahorros6,docuser.empleoDesde7,docuser.porceTasa8,docuser.civilSexo9,solicitud.fiador10,docuser.residenciaDesde11,docuser.propiedades12,docuser.edad13,docuser.planesPago14,docuser.residencia15,docuser.creditoExistente16,docuser.trabajo17,docuser.depende18,1 ,docuser.extranjero20 ] ))
                
                    var fechaInicio=new Date();
              if (riesgo>=0.5) {


                    if (riesgo>0.8) {

                            var fechaFin = new Date(fechaInicio.getFullYear(),fechaInicio.getMonth(),fechaInicio.getDate()+5);
                        
                    } else {

                        var fechaFin = new Date(fechaInicio.getFullYear(),fechaInicio.getMonth(),fechaInicio.getDate()+15);
                        
                    }
                  
              } else {

                if (riesgo<0.2) {

                    var fechaFin = new Date(fechaInicio.getFullYear(),fechaInicio.getMonth(),fechaInicio.getDate()+45);
                        
                } else {

                    var fechaFin = new Date(fechaInicio.getFullYear(),fechaInicio.getMonth(),fechaInicio.getDate()+30);
                    
                }

                  
              }

              var objectId= ObjectID();

              var solicitudBD={_id:objectId,numeroInversores:0,fechaFin:fechaFin,fechaInicio:fechaInicio,invertido:0,descripcionCorta:solicitud.descripcionCorta,riesgo:riesgo,titulo:solicitud.titulo,rentabilidad:solicitud.rentabilidad,nombreFiador:solicitud.nombreFiador,monto5:parseInt(solicitud.monto5),modelo:solicitud.modelo,fiador10:solicitud.fiador10,duracion2:parseInt(solicitud.duracion2),descripcion:solicitud.descripcion,cedulaFiador:solicitud.cedulaFiador,categoria4:solicitud.categoria4,estado:0};



            usuarios.updateOne({_id:ObjectID(solicitud.id_usuario)},{$push:{solicitudes:solicitudBD}}, function(err,result) {
                "use strict";
            
                    if (err) return callback(false, {},"Error de bd");

                    

                    solicitudBD["solicitante"]={nombre:docuser.nombre,_id:solicitud.id_usuario,celular:docuser.celular};

                    solicitudes.insertOne(solicitudBD, function(err, docD) {
                        "use strict";
                        if (err) return callback(false, {},"Error de bd");


                        return callback(true,solicitudBD,"");
        
                      });

                    });

            });

        });
            
        
            }  


            this.postInvertir = function(inversion, callback) {
                "use strict";
    
                inversion.monto=parseInt(inversion.monto);
                
                usuarios.findOne({_id:ObjectID(inversion.idInversor)}, function(err, docinve) {
                    "use strict";


                    solicitudes.findOneAndUpdate({_id:ObjectID(inversion.idInversion), "inversores._id":ObjectID(inversion.idInversor) },{$inc:{"inversores.$.invertido":inversion.monto,invertido:inversion.monto}},{returnOriginal:false}, function(err, result) {
                        "use strict";

                        var estado=1;
                        var docSol=result.value;
                        if (docSol){

                                        if (docSol.invertido >= docSol.monto5  ){ 
                                            
                                            estado=2;
                                            docSol.estado=2;

                                        }

                                        solicitudes.updateOne({_id:ObjectID(inversion.idInversion)  },{$set:{"estado":estado}}, function(err) {
                                            "use strict";
                            
                                                    if (err) return callback(1);                                                      
                                                    
                                            
                                            });
                                            
                                        
                    
                                        usuarios.updateOne({_id:ObjectID(inversion.idInversor), "inversiones._id":docSol._id   },{$set:{"inversiones.$.estado":estado},$inc:{"inversiones.$.invertido":inversion.monto}}, function(err) {
                                            "use strict";
                            
                                                    if (err) return callback(1);                                                      
                                                    
                                            
                                            });

                                            var idSoli=docSol.solicitante._id;
            
                                            delete docSol.solicitante;
            
                                        usuarios.findOneAndUpdate({_id:ObjectID(idSoli),"solicitudes._id":ObjectID(inversion.idInversion)},{$set:{"solicitudes.$":docSol  }}, function(err,result) {
                                            "use strict";
                                        
                                                if (err) return callback(err, false);
                            
                                                var userDoc=result.value;

                                                if (estado==2) {

                                                    const mailOptions = {
                                                        from: 'crowleanding@crowd.com', // sender address
                                                        to: userDoc.correo, // list of receivers
                                                        subject: 'Hola '+userDoc.nombre+' una solicitud tuya ha sido financiada completamente', // Subject line
                                                        html: '<p>Hola '+userDoc.nombre+',</p> espero te encuentres bien. Tu solicitud con título '+docSol.titulo+' ha sido financiada completamente. Revisa nuestra APP para más detalles.'// plain text body
                                                      };

                                                      transporter.sendMail(mailOptions, function (err, info) {
                                                        if(err)
                                                          console.log(err)
                                                        else
                                                          console.log(info);
                                                     });
                                                    

                                                      return callback(true,userDoc.socketid,estado);
                                                }
                                                else {

                                                    return callback(true,userDoc.socketid,estado);

                                                }

                                            
            
                                                
            
            
                                            
                            
                                        });
            
                                                         


                            




                        } 
                        else{


                            


                            solicitudes.findOneAndUpdate({_id:ObjectID(inversion.idInversion)},{$set:{estado:1},$inc:{numeroInversores:1,invertido:inversion.monto},$push:{inversores:{invertido:inversion.monto,nombre:docinve.nombre,_id:docinve._id,celular:docinve.celular}}}, function(err,result) {
                                "use strict";
            
                                        if (err) return callback(1);            
                                        
                                        var solicitudDoc=result.value;
            
                                        solicitudDoc.estado=1;

                                        solicitudDoc.numeroInversores=solicitudDoc.numeroInversores + 1;

                                        solicitudDoc.invertido=solicitudDoc.invertido+inversion.monto;

                                        
                                        if (docSol.invertido >= docSol.monto5  ){
                                                        
                                            estado=2;
                                            solicitudDoc.estado=2;

                                        }

                                            solicitudes.updateOne({ _id:ObjectID(inversion.idInversion) },{$set:{estado:estado}}, function(err) {
                                                "use strict";
                                
                                                        if (err) return callback(1);                                                      
                                                        
                                                
                                                });                                            

                                        
            
            
                                        usuarios.updateOne({_id:ObjectID(inversion.idInversor)},{$push:{inversiones:solicitudDoc}}, function(err) {
                                            "use strict";
                            
                                                    if (err) return callback(1);                                                      
                                                    
                                            
                                            });
            
            
            
                                        usuarios.findOneAndUpdate({_id:ObjectID(solicitudDoc.solicitante._id),"solicitudes._id":ObjectID(inversion.idInversion)},{$inc:{"solicitudes.$.numeroInversores":1,"solicitudes.$.invertido":inversion.monto},$set:{"solicitudes.$.estado":estado},$push:{"solicitudes.$.inversores":{invertido:inversion.monto,nombre:docinve.nombre,_id:docinve._id,celular:docinve.celular}}}, function(err,result) {
                                            "use strict";
                                        
                                                if (err) return callback(err, false);
                            
                                                var userDoc=result.value;
            
                                                if (estado==2) {

                                                    const mailOptions = {
                                                        from: 'crowleanding@crowd.com', // sender address
                                                        to: userDoc.correo, // list of receivers
                                                        subject: 'Hola '+userDoc.nombre+' una solicitud tuya ha sido financiada completamente', // Subject line
                                                        html: '<p>Hola '+userDoc.nombre+',</p> espero te encuentres bien. Tu solicitud con título '+solicitudDoc.titulo+' ha sido financiada completamente. Revisa nuestra APP para más detalles.'// plain text body
                                                      };

                                                      transporter.sendMail(mailOptions, function (err, info) {
                                                        if(err)
                                                          console.log(err)
                                                        else
                                                          console.log(info);
                                                     });
                                                    

                                                      return callback(true,userDoc.socketid,estado);
                                                }
                                                else {

                                                    return callback(true,userDoc.socketid,estado);

                                                }
            
                                                
            
            
            
                            
                                        });
            
                                });                            





                        }
    
    

                    
                    });

                });
                                
                } 
 

                //put

                this.putCompletarPerfil = function(docUsu, callback) {
                    "use strict";
        
    
                        usuarios.updateOne({_id:ObjectID(docUsu._id)},{$set:{corriente1:docUsu.corriente1,historia3:docUsu.historia3,ahorros6:docUsu.ahorros6,empleoDesde7:docUsu.empleoDesde7,porceTasa8:docUsu.porceTasa8,civilSexo9:docUsu.civilSexo9,residenciaDesde11:parseInt(docUsu.residenciaDesde11),propiedades12:docUsu.propiedades12,edad13:parseInt(docUsu.edad13),planesPago14:docUsu.planesPago14,residencia15:docUsu.residencia15,trabajo17:docUsu.trabajo17,depende18:parseInt(docUsu.depende18),extranjero20:docUsu.extranjero20 }}, function(err) {
                            "use strict";
            
                                    if (err) return callback(false,"Error de base de datos");      
                                    
                                    
                                    return callback(true,"");
                                    
                            
                            });
                                                                    
                    } 

                    this.desconectadoAppEmit = function(socketid,callback) {
                        "use strict";
                    
                            var token = String(new ObjectID());
                            usuarios.updateOne({socketid:socketid},{$set:{socketid:"" }}, function(err) {
                            "use strict";  
            
                            //if(err) return callback(err,false)
                             
                            //return callback(err,true)
            
                                     return callback(null,true)
            
            
                                });  
            
                            }
 
  

}

module.exports.UsersDAO = UsersDAO;


