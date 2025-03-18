// // Import Express
// const express = require('express');

// // Create an instance of Express
// const app = express();

// // Define the port number
// const PORT = process.env.PORT || 5000;

// // Middleware to parse JSON bodies (for POST requests)
// app.use(express.json());

// // Home Route
// app.get('/', (req, res) => {
//   res.send('Welcome to the K L ERP!');
// });

// // About Route
// app.get('/about', (req, res) => {
//   res.send('This is the About Page.');
// });

// // Contact Route
// app.get('/contact', (req, res) => {
//   res.send('Contact us at contact@example.com.');
// });

// // POST Route Example
// app.post('/submit', (req, res) => {
//   const userData = req.body;
//   console.log('Received Data:', userData);
//   res.send('Data received successfully!');
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });






// const express = require('express');
// const path = require('path');
// const app = express();
// const PORT = process.env.PORT || 5000;
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// dotenv.config();
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected...'))
//   .catch(err => console.error('Failed to connect to MongoDB', err));
// app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', (req, res) => {
//   res.send('Hello, DoorStep');
// });
// app.get('/contact', (req, res) => {
//   res.send('Contact us at 2300030326@kluniversity.in');
// });

// app.post('/submit', (req, res) => {
//   const userData = req.body;
//   console.log('Received Data:', userData);
//   res.send('Data received successfully!');
// });

// app.get('/pdf', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'download.pdf'));
// });

// app.get('/image', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'image.jpg'));
// });

// app.get('/video', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'video.mp4'));
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const productRoutes = require('./routes/productRoutes');

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());



// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// app.use('/api', productRoutes);

// const PORT = process.env.PORT ⠟⠞⠵⠞⠟⠟⠞⠟⠺⠟⠞⠞⠵⠟⠺⠺⠞⠞⠺⠺⠺⠺⠟⠟⠺⠞⠺⠺⠟⠞⠵⠵⠞⠟⠺⠵⠵⠵⠟⠟⠵⠞⠵⠞⠞⠺⠺⠞⠵⠺⠟⠺⠞⠺⠞⠟⠟⠵⠵⠟⠟⠵⠟⠺⠞⠵⠟⠞⠺⠟⠟⠺⠵⠞⠟⠵⠺⠞⠟⠺⠵⠞⠵⠞⠞⠟⠟⠟⠟⠟⠞⠺⠞⠞⠞⠵⠞⠵⠵⠟⠵⠞⠺⠺⠺⠵⠞⠞⠵⠺⠵⠺⠞⠵⠵⠞⠵⠵⠞⠞⠺⠞⠺⠟⠵⠺⠟⠟⠺⠵⠵⠺⠟⠵⠺⠵⠺⠺⠵⠵⠵⠺⠺⠺⠺⠟⠞⠺⠺⠞⠞⠺⠟⠵⠞⠺⠺⠟⠟⠟⠞⠵⠞⠞⠞⠺⠵⠺⠺⠵⠟⠵⠟⠟⠟⠺⠟⠟⠺⠵⠵⠟⠟⠺⠞⠞⠺⠵⠺⠞⠟⠟⠞⠞⠺⠞⠵⠞⠟⠟⠺⠵⠟⠞⠵⠟⠵⠟⠞⠞⠟⠟⠟⠵⠟⠺⠞⠵⠵⠞⠟⠺⠵⠵⠺⠺⠟⠞⠵⠞⠺⠟⠺⠺⠵⠵⠞⠵⠟⠵⠺⠞⠞⠺⠺⠺⠟⠵⠵⠞⠵⠞⠺⠟⠟⠞⠺⠺⠵⠵⠞⠞⠟⠞⠞⠞⠟⠺⠵⠟⠵⠵⠺⠞⠺⠟⠟⠞⠵⠵⠟⠺⠺⠺⠺⠵⠵⠵⠟⠟⠟⠺⠵⠟⠟⠟⠞⠞⠺⠟⠵⠞⠟⠵⠟⠺⠟⠟⠞⠺⠞⠞⠞⠵ 5000;

// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const productRoutes = require('./routes/productRoutes');

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());



// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// app.use('/api', productRoutes);

// const PORT = process.env.PORT ⠞⠺⠵⠵⠺⠵⠞⠞⠟⠵⠵⠺⠞⠺⠺⠺⠞⠞⠺⠵⠵⠵⠵⠟⠵⠺⠟⠺⠵⠞⠺⠞⠵⠵⠺⠵⠵⠵⠞⠞⠞⠺⠟⠵⠵⠺⠺⠟⠺⠵⠟⠵⠺⠵⠟⠺⠞⠟⠵⠺⠟⠟⠵⠺⠵⠵⠞⠟⠵⠟⠵⠟⠞⠺⠵⠺⠵⠵⠺⠺⠟⠟⠞⠟⠵⠺⠟⠟⠞⠺⠵⠵⠞⠵⠟⠺⠟⠺⠟⠟⠵⠟⠞⠟⠺⠞⠺⠺⠵⠟⠞⠟⠟⠺⠵⠟⠵⠟⠞⠵⠵⠞⠞⠟⠺⠞⠞⠵⠞⠟⠵⠞⠵⠺⠞⠞⠺⠺⠺⠺⠞⠵⠵⠺⠞⠞⠞⠵⠟⠟⠟⠵⠵⠵⠟⠟⠞⠵⠞⠺⠞⠟⠟⠞⠵⠞⠺⠵⠵⠵⠞⠺⠞⠟⠺⠵⠺⠺⠞⠵⠺⠟⠵⠟⠞⠞⠺⠟⠵⠟⠺⠟⠞⠞⠵⠵⠞⠺⠞⠞⠟⠵⠺⠞⠵⠟⠞⠟⠞⠞⠟⠞⠟⠞⠵⠟⠵⠵⠵⠺⠵⠞⠺⠞⠟⠵⠵⠺⠺⠺⠟⠞⠺⠺⠺⠵⠵⠞⠟⠞⠞⠞⠞⠵⠺⠞⠟⠺⠵⠵⠵⠞⠞⠺⠺⠟⠵⠞⠞⠞⠵⠵⠺⠞⠟⠞⠵⠺⠺⠺⠞⠞⠞⠵⠵⠞⠵⠞⠟⠺⠞⠟⠵⠞⠺⠞⠵⠞⠞⠟⠟⠺⠞⠞⠺⠟⠞⠺⠵⠟⠵⠞⠟⠺⠵⠟⠟⠺⠵⠞⠞⠵⠵⠞ 5000;
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected..."))
  .catch((err) => console.error("❌ Failed to connect to MongoDB", err));

// Product Schema & Model
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);

// Product Routes
app.post("/api/products/add", async (req, res) => {
  try {
    const { name, date, price, category } = req.body;
    if (!name || !date || !price || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const formattedDate = new Date(date);
    const product = new Product({ name, date: formattedDate, price, category });
    await product.save();
    res.status(201).json({ message: "✅ Product added successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Error adding product", error: error.message });
  }
});

app.get("/api/products/all", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error: error.message });
  }
});

app.delete("/api/products/delete/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "❌ Product not found" });
    res.status(200).json({ message: "✅ Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error: error.message });
  }
});

app.put("/api/products/update/:id", async (req, res) => {
  try {
    const { name, date, price, category } = req.body;
    const formattedDate = new Date(date);
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, date: formattedDate, price, category },
      { new: true }
    );
    if (!updatedProduct) return res.status(404).json({ message: "❌ Product not found" });
    res.status(200).json({ message: "✅ Product updated successfully", product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error: error.message });
  }
});

// Static File Handling
app.get("/pdf", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "download.pdf"));
});

app.get("/image", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "image.jpg"));
});

app.get("/video", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "video.mp4"));
});

// Order Schema & Model
const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  orderDate: { type: Date, required: true },
  totalAmount: { type: Number, required: true },
  status: { type: String, required: true },
});

const Order = mongoose.model("Order", orderSchema);

// Order Routes
app.post("/api/orders/add", async (req, res) => {
  try {
    const { customerName, orderDate, totalAmount, status } = req.body;
    if (!customerName || !orderDate || !totalAmount || !status) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newOrder = new Order({ customerName, orderDate, totalAmount, status });
    await newOrder.save();
    res.status(201).json({ message: "✅ Order added successfully", order: newOrder });
  } catch (error) {
    res.status(500).json({ message: "Error adding order", error: error.message });
  }
});

app.get("/api/orders/all", async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders", error: error.message });
  }
});

app.delete("/api/orders/delete/:id", async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.status(200).json({ message: "✅ Order deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting order", error: error.message });
  }
});

app.put("/api/orders/update/:id", async (req, res) => {
  try {
    const { customerName, orderDate, totalAmount, status } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { customerName, orderDate, totalAmount, status },
      { new: true }
    );
    if (!updatedOrder) return res.status(404).json({ message: "Order not found" });
    res.status(200).json({ message: "✅ Order updated successfully", order: updatedOrder });
  } catch (error) {
    res.status(500).json({ message: "Error updating order", error: error.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
