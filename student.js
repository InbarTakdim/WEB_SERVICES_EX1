
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var userSchema= new schema({
    id:{type: Number , unique: true},
    name:{type: String },
    grade: Number,
    year: {type:String},
}, {collection: 'users'});

mongoose.model('student' , userSchema );

module.exports= userSchema;