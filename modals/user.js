const mongoose=require("mongoose")

const user_sch=new mongoose.Schema({
    name:
    {
        type:String,
        required:true,
        maxlength:12,
        minlength:6,
        unique:{true:"Enter a unique name"}
    },
    email:
    {
        type:String,
        match:[
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Invalid Email'
        ],
        required:true,
        unique:true
    },
    password:
    {
        type:String,
        required:true,
        minlength:8
    }

    
})
module.exports=mongoose.model('userdb',user_sch)