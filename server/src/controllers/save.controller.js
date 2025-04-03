const share=require("../models/share.model.js")

async function Savefile(req,res) {

try {
    const {gencode}=req.body;
    const img=req.file.path
    console.log(img,gencode,"check");
    
if (!gencode||!img) {
    return res.json({
        status: false,
        message:"Coudn't upload"
    })
}


const save= await share.create({
       genartedcode:gencode,
       filepath:img
    })

if(save)
{
    return res.json({
        message:"File uploaded",
        success:true
    })
}


} catch (error) {
    console.log("error",error);
    return res.json({
        status:false,
        message:error
    })
    
}


  }


  module.exports={Savefile}