'use strict'

var http= require('http');
var express=require('express');
var college= require('./college_module');
var MyCollege=new college();
var
var app=express();
app.get('/getStudById/:studentId' , function(req,res){
    //get student by Id
    var text = MyCollege.getById(req.params.studentId);
        res.send(text);
});

app.get('/beststudents' , function(req,res){
    //get all student with grade 90+
    var text = MyCollege.ex_grade();
        res.send(text);
});

app.get('/excellentstudentbyyear/:year' , function(req,res){
    //get all excellent student (grade 90+) by year
   var text = MyCollege.year_excellent_grade(req.params.year);
        res.send(text);
});
app.get('/' , function(req,res){
    //get student by Id
    var text ="hey";
        res.send(text);
});
http.createServer(app).listen(process.env.PORT ||8080);