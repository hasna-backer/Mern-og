const express = require("express");
const app = express();

// Set EJS as view engine
app.set("view engine", "ejs");

// Route
app.get("/", (req, res) => {
 res.render("home",{name:"Basil"}); // renders views/home.ejs
});


app.get("/products", (req, res) => {
   const products = ["Laptop", "Phone", "Shoes"];
   res.render("products", { products });
  });
  




// Server
app.listen(3000, () => {
 console.log("Server running on port 3000");
});
