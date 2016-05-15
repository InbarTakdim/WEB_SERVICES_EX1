'use strict';
var mongoose= require('mongoose');
var schema= require('../student');
mongoose.connect('mongodb://db_usr:db_pass@ds021182.mlab.com:21182/students');
var conn = mongoose.connection;
var student = mongoose.model('student' , schema );
conn.on('error' , function(err){
    console.log('connection error' + err);
});


module.exports= class college {
  
    constructor(){}

    getById(id,res){
    //get student by Id
        student.find({}).where('id').equals(id).exec(function(err, user){
           if(err) throw err;
           if(user.length==0){
            res.send("<html><h1>no such id</h1></html>");
          }
        else{ res.send(user); }
        //mongoose.disconnect();
        });
    }


    year_excellent_grade(res ,year){
    //get all excellent student (grade 90+) by year
        student.find({}).where('year').equals(year).where('grade').gt(89).exec(function(err, user){
            if(err) throw err;
            if(user.length==0){
                res.send("<html><h1>evryone under 90 in this year</h1></html>");
             }
            else{ res.send(user); }
            //mongoose.disconnect();
        });
    }

    

  
    ex_grade(res){
        student.find({}).where('grade').gt(89).exec(function(err, user){
            if(err) throw err;
            if(user.length==0){
               res.send("<html><h1>evryone under 90</h1></html>");
             }
            else{ res.send(user); }
            //mongoose.disconnect();
            });
    }

destructor(){mongoose.disconnect();}
}