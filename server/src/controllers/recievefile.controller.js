const share=require("../models/share.model.js")


const recieve=async(req,res)=>
{
    try {
        
        const {code}=req.body;
console.log(code);

        
        const recievedata=await share.findOne({
            where:{
                genartedcode:code
            }
        })

        console.log(recievedata);
        
return res.json({
    status:true,
    data:recievedata
})

    } catch (error) {
        console.log("error in getting file",error);
        
    }
}

module.exports={recieve}