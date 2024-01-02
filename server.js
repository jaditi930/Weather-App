const express=require("express")
const app=express()

const cors=require("cors")

const corsOptions ={
    origin:'*', 
    credentials:true,            

}

// for getting user data from request object before the call of the router
app.use(express.json())

app.use(cors(corsOptions));

//route
app.use("/api",require("./routes"))

app.listen(5000,()=>{
    console.log("Server running on port 5000")
})
