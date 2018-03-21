'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3789;
mongoose.Promise =global.Promise;
mongoose.connect('mongodb://zoo:zoo@ds213338.mlab.com:13338/zoo', (err,res)=>{
    if(err){
        throw err;
    }else{
        console.log('Conexion exitosa a zoo');
    }
    app.listen(port,()=>{
        console.log("SERVIDOR LOCAL CON NODE Y EXPRESS CORRE CORRCTAMENTE");
    });
});  