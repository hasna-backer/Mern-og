const express = require("express")
const app = express()

function middlewareA(req,res,next){
console.log("method:",req.method);
console.log("url:",req.url);
next()
}
app.use(middlewareA)
app.use(express.json()) // 👈 parses incoming JSON body

app.post("/login",(req,res)=>{
	//getting user input from req.body
	const {username,password} = req.body
	console.log("username:",username);
	console.log("password:",password);
	
	//checking if user input is valid
	if(!username || !password){
		return res.status(400).send("Username and password are required")
	}
	//getting data from database
	const DBusername="Hasna"
	const DBpassword="123456"

	//checking if user exists
	if(username !== DBusername){
		return res.status(400).send("User not found")
	}
	//checking if password is correct
	if(password !== DBpassword){
		return res.status(400).send("Incorrect password")
	}
  res.send("Home Page")
})




app.listen(4001,()=>{
  console.log("Server running on port 4001")
})