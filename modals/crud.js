const { json } = require("express")
const mongoose=require("mongoose")

const crud_sch=new mongoose.Schema({
    name:
    {
        type:String,
        required:true
        
    },
   video:
    {
        type:JSON,
        required:true
    }
})
module.exports=mongoose.model('dbcrud',crud_sch)