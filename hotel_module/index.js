'use strict'
var EventEmitter= require('events');
var EventConfig= require('../config');


module.exports= class hotel extends EventEmitter{

    constructor(hotel_n, hotel_b){
        super();
        this.hotel_name=hotel_n;
        this.branch=hotel_b;
        this.grade=0;
        this.ar= new Array("hotel: "+ this.hotel_name,"branch: "+ this.branch );
        
    }

    inc_grade(){
        this.grade++;
        this.ar.push("after inc>>"+ this.grade);
        this.emit(EventConfig.FIRE,  this.grade);
    }

    dec_grade(){
        if(this.grade>=1)
       { 
            this.grade--;
            this.ar.push("after dec>>"+ this.grade);
            this.emit(EventConfig.FIRE,  this.grade);
       }

       else{
            this.ar.push("dec failed! grade is zero>>"+ this.grade);
             this.emit(EventConfig.FIRE, "dec failed>> "+ this.grade);
       }


    }

    display(){
        return this.ar;
    }








}