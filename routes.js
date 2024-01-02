const express=require("express");
const asyncHandler=require("express-async-handler")
const router=express.Router();

const home=asyncHandler(async (req,res)=>{
    res.status(200).send({"message":"Api working fine"})
})

const getWeather=asyncHandler(async (req,res)=>{
    let body=req.body
    console.log(body)
    res.status(200).send({"weather":""})
})

router.get("/home",home)
router.post("/getWeather",getWeather)


module.exports=router;