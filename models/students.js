const { default: mongoose } = require("mongoose");

const students= new mongoose.Schema({
    username:{type:String,},
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
   
},{timestamps:true});

export default mongoose.models.Allstudents ||  mongoose.model('Allstudents', students)