
'use strict'
var EventEmitter= require('events');
//var EventConfig= require('./config');//.events;
var EventConfig= require('./config');

var http= require('http'),
express=require('express');
var hotel= require('./hotel_module');

var MyHotel=new hotel("Inbar-Palas", "the best");

//RETURN AS A RESPONSE TO HTTP SERVER
var history= MyHotel.display();

console.log("-------------");
console.log("history:\n" +history);
MyHotel.on(EventConfig.FIRE , function(data){
    console.log("'"+MyHotel.hotel_name+ "'" + "branch: " + MyHotel.branch+ " grade: " + data);
} );

MyHotel.inc_grade();
MyHotel.inc_grade();
MyHotel.dec_grade();
MyHotel.dec_grade();
MyHotel.dec_grade();
MyHotel.inc_grade();

var app=express();
app.get('/' , function(req,res){
    var text = MyHotel.display();
        res.send(text);
});
http.createServer(app).listen(8080);