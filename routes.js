const express=require("express");
const asyncHandler=require("express-async-handler")
const router=express.Router();

const home=asyncHandler(async (req,res)=>{
    res.status(200).send({"message":"Api working fine"})
})

const getWeather=asyncHandler(async (req,res)=>{
    let cities=req.body.city

    var temp_array=[]
    for(let i =0;i<cities.length;i++)
    {
        const API_URL=`http://api.weatherapi.com/v1/current.json?key=6ceec29059644f99950211220240201&q=${cities[i]}&aqi=no`
        await fetch(`${API_URL}`)
        .then((res)=>res.json())
        .then((data)=>{
            try
            {
            let temp_c=data.current.temp_c
            temp_array.push(temp_c)
            }
            catch(err)
            {
                temp_array.push("Invalid location entered")
            }
            console.log(temp_array)
        })

    }
    console.log(temp_array)
    res.status(200).send({"weather":temp_array})
})

router.get("/home",home)
router.post("/getWeather",getWeather)


module.exports=router;