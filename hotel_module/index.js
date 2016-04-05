/*
var http= require('http'),
express=require('express');
var app=express();
app.get('/' , function(req,res){
    res.writeHead(200);
    var hotel= require('./Hotel')
    var hot1= new Hotel();
    hot1.inc_grade();
    hot1.dec_grade();
    hot1.dec_grade();
    hot1.inc_grade();
    hot1.inc_grade();
    hot1.inc_grade();
    res.write(hot1.response);
    res.write("sucess");}
});
http.createServer(app).listen(8080);
*/
//----------------------
'use strict'
var EventEmitter= require('events');
var EventConfig= require('../config');


module.exports= class hotel extends EventEmitter{

    constructor(hotel_n, hotel_b){
        super();
        this.hotel_name=hotel_n;
        this.branch=hotel_b;
        this.grade=0;
        this.res= "name: "+this.hotel_name+ " branch: "+this.branch+"\n";
    }

    inc_grade(){
        this.grade++;
        this.res+="after inc>>"+ this.grade +"\n";
        this.emit(EventConfig.FIRE,  this.grade);
    }

    dec_grade(){
        if(this.grade>=1)
       { 
            this.grade--;
            this.res+="after dec>>"+ this.grade+ "\n";
            this.emit(EventConfig.FIRE,  this.grade);
       }

       else{
             this.res+="dec failed! grade is zero>>"+ this.grade+ "\n";
             this.emit(EventConfig.FIRE, "dec failed>> "+ this.grade);
       }


    }

    display(){
        return this.res;
    }








}