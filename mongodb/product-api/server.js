const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

dotenv.config(); // load .env variables
connectDB();     // connect to MongoDB

const app = express();
app.use(express.json()); // lets us read req.body as JSON

// Routes
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});



// ## 🧪 Testing with Postman / Thunder Client

// | Action | Method | URL | Body |
// |---|---|---|---|
// | Add product | `POST` | `/api/products` | `{ "name": "Laptop", "price": 50000, "category": "Electronics", "stock": 10 }` |
// | Get all | `GET` | `/api/products` | — |
// | Get one | `GET` | `/api/products/:id` | — |
// | Update | `PUT` | `/api/products/:id` | `{ "price": 45000 }` |
// | Delete | `DELETE` | `/api/products/:id` | — |

// ---

// ## 🔁 How Everything Connects — The Flow
// ```
// Client (Postman)
//       ↓  HTTP Request
//    server.js          ← starts server, connects DB, registers routes
//       ↓
// productRoutes.js      ← matches the URL and method
//       ↓
//   Product.js          ← Mongoose model talks to MongoDB
//       ↓
//    MongoDB            ← data is saved / fetched / updated / deleted
//       ↓
//    Response JSON      ← sent back to client