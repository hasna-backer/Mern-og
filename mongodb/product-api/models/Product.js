const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    default: 0
  }
}, { timestamps: true }); // adds createdAt, updatedAt automatically

const Product = mongoose.model('Product', productSchema);

module.exports = Product;