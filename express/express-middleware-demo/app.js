const express = require('express');
const app = express();


app.get('/',(req,res)=>{
	res.send('Home Page')
})

app.get('/flipkart/users/id/cart',(req,res)=>{
	res.send('Users Page')
})

app.get('/users/:id',(req,res)=>{
	const id = req.params.id
	res.send(`User ID is: ${id}`)
})


app.get('/search',(req,res)=>{
	console.log(req.query);
	
	const item=req.query.item || 'No item found'

	res.send(item)
})

// /search?item=shirt
// /search?item=shoe




app.get('/users/:id/posts', (req, res) => {
	const { id } = req.params
	const page = req.query.page || 1
	const limit = req.query.limit || 10
  
	res.send(`Posts for user ${id} — page ${page}, limit ${limit}`)
  })


  /users/42/posts?page=2&limit=5





app.listen(3001,() => {
	console.log('Server running on http://localhost:3001')
  })