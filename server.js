const express=require("express")
const app=express()


// for getting user data from request object before the call of the router
app.use(express.json())


//route
app.use("/api",require("./routes"))

app.listen(5000,()=>{
    console.log("Server running on port 5000")
})
