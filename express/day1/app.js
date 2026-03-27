const express = require("express")
const app = express()

function middlewareA(req,res,next){
console.log("method:",req.method);
console.log("url:",req.url);
next()
}

app.get("/",(req,res)=>{
  res.send("Home Page")
})

app.get("/about",middlewareA,(req,res)=>{
  res.send("About Page")
})

app.get("/contact",(req,res)=>{
  res.send("Contact Page")
})

app.listen(4001,()=>{
  console.log("Server running on port 4001")
})