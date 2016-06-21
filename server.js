'use strict';

var http= require('http');
var express=require('express');
var college= require('./college_module');
var MyCollege=new college();
var app=express();
var port=process.env.PORT ||8080;
app.set('port' , port);
app.use('/' , express.static('./public'));
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin" ,"*");
    res.header("Access-Control-Allow-Headers" ,"Origin, X-Requested-Width, 
        Content-Type, Accept");
        app.set('json spaces' , 4);
        res.set("Content-Type" , "application/json");
        next();

});


app.get('/getStudById/:studentId' , function(req,res){
    //get student by Id
    var id=req.params.studentId;
      MyCollege.getById(id,res);
});

app.get('/bestStudents' , function(req,res){
    //get all student with grade 90+
        MyCollege.ex_grade(res);
});

app.get('/excellentStudentByYear/:year' , function(req,res){
    //get all excellent student (grade 90+) by year
    var year=req.params.year;
   var text = MyCollege.year_excellent_grade(res, year);
});
app.get('/' , function(req,res){
    
    res.send("<html><h1>WELCOME TO SHENKAR COLLEGE!</h1></html>");
        
});

http.createServer(app).listen(process.env.PORT ||8080);