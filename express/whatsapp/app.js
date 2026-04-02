import express from "express";
const app = express()


app.get("/",(req,res)=>{
  res.send("Home Page")
})

app.get("/send-message",(req,res)=>{
	res.json({name:"John"})
})
  


app.listen(4001,()=>{
  console.log("Server running on port 4001")
})