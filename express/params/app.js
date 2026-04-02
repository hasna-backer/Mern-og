// server.js
const express = require('express');
const app = express();

// :id is a route param — it's a placeholder
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;  // "42" if URL is /users/42
  res.send(`Profile of user #${userId}`);
});

app.get('/search', (req, res) => {
	const query = req.query.q;       // ?q=cats
	const page  = req.query.page;    // ?page=2
  
	res.send(`Searching for "${query}" — page ${page}`);
  });
  
//     /search?q=shirt&page=2



app.get('/users/:id/posts', (req, res) => {
	const userId = req.params.id;     // who
	const sort   = req.query.sort;    // how to sort
	const limit  = req.query.limit;   // how many to show
  
	res.json({
	  user: userId,
	  sort:  sort  || 'newest',
	  limit: limit || 10
	});
  });
  
  // Visit: /users/5/posts
  // Visit: /users/5/posts?sort=popular&limit=20


app.listen(3007);