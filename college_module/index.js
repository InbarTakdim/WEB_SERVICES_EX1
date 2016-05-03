'use strict'
var myArray= require('./data/students.json');

module.exports= class college {

    constructor(){}

    year_excellent_grade(year)
    {
        //get all excellent student (grade 90+) by year
        var ar= new Array;
        for(var i=0; i<myArray.length; i++)
        {
            if(myArray[i].grade >=90 && myArray[i].year== year )
                {ar.push(myArray[i]);
               
                }
        }

    return ar;

    }

    getById(studId){
    //get student by id
        var who=-1;
        for(var i=0; i<myArray.length; i++)
        {
            if(myArray[i].id == studId)
                {
                 who=i;
                 break;
                }
        }

        if(who==-1){
            return "INVALID ID";
        }
        return myArray[who];
        
    }

    ex_grade(){
        //get all student with grade 90+
        var ar= new Array;
        var who=0;
        for(var i=0; i<myArray.length; i++)
        {
            if(myArray[i].grade >=90)
                {ar.push(myArray[i]);
               
                }
        }

       return ar;

    }

}