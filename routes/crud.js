const express=require("express")
const router=express.Router()
const Dbcrud=require('../modals/crud.js')
router.get('/get/:name',async(req,res)=>{
    try{
       
    const data=await Dbcrud.find({name: req.params.name})
   
    res.json(data)
    }
    catch(err)
    {
        res.json({
            "error":err
        })
    }
})

router.post('/add',async(req,res)=>{
  
    const member=new Dbcrud(
        {
            name:req.body.name,
            video:req.body.video
        }
    )
    
    const data=await Dbcrud.findOneAndRemove({
        name:req.body.name,
        video:req.body.video
    })
        try
        {
         const a=await member.save()
        res.send(" Added Successfully")
        }
        catch(err)
        {
            res.status(404).send(err)
        }
    
})

router.delete('/delete/:name/:_id',async(req,res)=>{
   
    try
    {
        
        const data=await Dbcrud.findOneAndRemove({"_id":`${req.params._id}`,"name":`${req.params.name}`})
        res.json(data)
    }
    catch(err)
    {
       res.end("error occured")
    }
})
module.exports=router