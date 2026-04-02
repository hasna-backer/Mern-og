const express = require("express")
const app = express()

// fake database
const users = []

function middlewareA(req, res, next) {
  console.log("method:", req.method)
  console.log("url:", req.url)
  next()
}

app.use(middlewareA)
app.use(express.json())

// POST /signup → registers a new user
app.post("/signup", (req, res) => {
  const { username, password } = req.body
  console.log("username:", username)
  console.log("password:", password)

  // checking if user input is valid
  if (!username || !password) {
    return res.status(400).send("Username and password are required")
  }

  // checking if user already exists
  const existingUser = users.find((user) => user.username === username)
  if (existingUser) {
    return res.status(400).send("User already exists")
  }

  // saving user to fake database
  users.push({ username, password })
  console.log("users:", users)

  res.status(201).send("Signup successful!")
})

// POST /login → logs in an existing user
app.post("/login", (req, res) => {
  const { username, password } = req.body
  console.log("username:", username)
  console.log("password:", password)

  // checking if user input is valid
  if (!username || !password) {
    return res.status(400).send("Username and password are required")
  }

  // checking if user exists in fake database
  const user = users.find((user) => user.username === username)
  if (!user) {
    return res.status(400).send("User not found")
  }

  // checking if password is correct
  if (user.password !== password) {
    return res.status(400).send("Incorrect password")
  }

  res.send("Welcome to Home Page!")
})

app.listen(4001, () => {
  console.log("Server running on port 4001")
})



// POST  http://localhost:4001/signup