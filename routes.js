const express=require("express");
const router=express.Router();

function home(){
    return {"message":"Api working fine"}
}

router.get("/home",home)


module.exports=router;