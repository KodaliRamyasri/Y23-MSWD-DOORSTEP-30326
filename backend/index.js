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


// const PORT = process.env.PORT ⠞⠺⠵⠵⠺⠵⠞⠞⠟⠵⠵⠺⠞⠺⠺⠺⠞⠞⠺⠵⠵⠵⠵⠟⠵⠺⠟⠺⠵⠞⠺⠞⠵⠵⠺⠵⠵⠵⠞⠞⠞⠺⠟⠵⠵⠺⠺⠟⠺⠵⠟⠵⠺⠵⠟⠺⠞⠟⠵⠺⠟⠟⠵⠺⠵⠵⠞⠟⠵⠟⠵⠟⠞⠺⠵⠺⠵⠵⠺⠺⠟⠟⠞⠟⠵⠺⠟⠟⠞⠺⠵⠵⠞⠵⠟⠺⠟⠺⠟⠟⠵⠟⠞⠟⠺⠞⠺⠺⠵⠟⠞⠟⠟⠺⠵⠟⠵⠟⠞⠵⠵⠞⠞⠟⠺⠞⠞⠵⠞⠟⠵⠞⠵⠺⠞⠞⠺⠺⠺⠺⠞⠵⠵⠺⠞⠞⠞⠵⠟⠟⠟⠵⠵⠵⠟⠟⠞⠵⠞⠺⠞⠟⠟⠞⠵⠞⠺⠵⠵⠵⠞⠺⠞⠟⠺⠵⠺⠺⠞⠵⠺⠟⠵⠟⠞⠞⠺⠟⠵⠟⠺⠟⠞⠞⠵⠵⠞⠺⠞⠞⠟⠵⠺⠞const express = require("express");


// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const path = require("path");
// const nodemailer = require("nodemailer");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));
// app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.static(path.join(__dirname, "public")));

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("✅ MongoDB connected..."))
//   .catch((err) => console.error("❌ Failed to connect to MongoDB", err));

// // Product Schema & Model
// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   date: { type: Date, required: true },
//   price: { type: Number, required: true },
//   category: { type: String, required: true },
// });

// const Product = mongoose.model("Product", productSchema);

// // Product Routes
// app.post("/api/products/add", async (req, res) => {
//   try {
//     const { name, date, price, category } = req.body;
//     if (!name || !date || !price || !category) {
//       return res.status(400).json({ message: "All fields are required" });
//     }
//     const formattedDate = new Date(date);
//     const product = new Product({ name, date: formattedDate, price, category });
//     await product.save();
//     res.status(201).json({ message: "✅ Product added successfully", product });
//   } catch (error) {
//     res.status(500).json({ message: "Error adding product", error: error.message });
//   }
// });

// app.get("/api/products/all", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching products", error: error.message });
//   }
// });

// app.delete("/api/products/delete/:id", async (req, res) => {
//   try {
//     const product = await Product.findByIdAndDelete(req.params.id);
//     if (!product) return res.status(404).json({ message: "❌ Product not found" });
//     res.status(200).json({ message: "✅ Product deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting product", error: error.message });
//   }
// });

// app.put("/api/products/update/:id", async (req, res) => {
//   try {
//     const { name, date, price, category } = req.body;
//     const formattedDate = new Date(date);
//     const updatedProduct = await Product.findByIdAndUpdate(
//       req.params.id,
//       { name, date: formattedDate, price, category },
//       { new: true }
//     );
//     if (!updatedProduct) return res.status(404).json({ message: "❌ Product not found" });
//     res.status(200).json({ message: "✅ Product updated successfully", product: updatedProduct });
//   } catch (error) {
//     res.status(500).json({ message: "Error updating product", error: error.message });
//   }
// });

// // Static File Handling
// app.get("/pdf", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "download.pdf"));
// });

// app.get("/image", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "image.jpg"));
// });

// app.get("/video", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "video.mp4"));
// });

// // Order Schema & Model
// const orderSchema = new mongoose.Schema({
//   customerName: { type: String, required: true },
//   orderDate: { type: Date, required: true },
//   totalAmount: { type: Number, required: true },
//   status: { type: String, required: true },
// });

// const Order = mongoose.model("Order", orderSchema);

// // Order Routes
// app.post("/api/orders/add", async (req, res) => {
//   try {
//     const { customerName, orderDate, totalAmount, status } = req.body;
//     if (!customerName || !orderDate || !totalAmount || !status) {
//       return res.status(400).json({ message: "All fields are required" });
//     }
//     const newOrder = new Order({ customerName, orderDate, totalAmount, status });
//     await newOrder.save();
//     res.status(201).json({ message: "✅ Order added successfully", order: newOrder });
//   } catch (error) {
//     res.status(500).json({ message: "Error adding order", error: error.message });
//   }
// });

// app.get("/api/orders/all", async (req, res) => {
//   try {
//     const orders = await Order.find();
//     res.status(200).json(orders);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching orders", error: error.message });
//   }
// });

// app.delete("/api/orders/delete/:id", async (req, res) => {
//   try {
//     const order = await Order.findByIdAndDelete(req.params.id);
//     if (!order) return res.status(404).json({ message: "Order not found" });
//     res.status(200).json({ message: "✅ Order deleted" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting order", error: error.message });
//   }
// });

// app.put("/api/orders/update/:id", async (req, res) => {
//   try {
//     const { customerName, orderDate, totalAmount, status } = req.body;
//     const updatedOrder = await Order.findByIdAndUpdate(
//       req.params.id,
//       { customerName, orderDate, totalAmount, status },
//       { new: true }
//     );
//     if (!updatedOrder) return res.status(404).json({ message: "Order not found" });
//     res.status(200).json({ message: "✅ Order updated successfully", order: updatedOrder });
//   } catch (error) {
//     res.status(500).json({ message: "Error updating order", error: error.message });
//   }
// });

// // Nodemailer Transporter Configuration (Using SMTP from .env)
// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST, 
//   port: process.env.SMTP_PORT, 
//   secure: process.env.SMTP_PORT == 465, 
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_APP_PASSWORD,
//   },
//   logger: true,   // Enable logging
//   debug: true,    // Debugging mode
// });

// console.log("SMTP Settings:");
// console.log("Host:", process.env.SMTP_HOST);
// console.log("Port:", process.env.SMTP_PORT);
// console.log("User:", process.env.EMAIL_USER);
// console.log("App Password Exists:", !!process.env.EMAIL_APP_PASSWORD);

// // Function to Send Acknowledgment Email
// const sendFeedbackEmail = async (to, name, feedback) => {
//   try {
//     const mailOptions = {
//       from: `"DoorStep" <${process.env.EMAIL_USER}>`,
//       to,
//       subject: "Thank You for Your Feedback!",
//       text: `Hi ${name},\n\nThank you for your valuable feedback! We appreciate your time and effort in helping us improve.\n\nYour Feedback: "${feedback}"\n\nBest Regards,\nYour Team`,
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log(`✅ Feedback email sent to ${to}: ${info.response}`);
//   } catch (error) {
//     console.error("❌ Error sending feedback email:", error.message);
//   }
// };

// // Feedback Schema & Model (Collection: feedback in DoorStep Database)
// const feedbackSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   message: { type: String, required: true },
//   date: { type: Date, default: Date.now },
// });

// const Feedback = mongoose.model("Feedback", feedbackSchema, "feedback");

// // Feedback Submission Route
// app.post("/api/feedback/submit", async (req, res) => {
//   try {
//     const { name, email, message } = req.body;
//     if (!name || !email || !message) {
//       return res.status(400).json({ message: "❌ All fields are required" });
//     }

//     // Save feedback to MongoDB
//     const feedback = new Feedback({ name, email, message });
//     await feedback.save();
//     console.log(`✅ Feedback saved to DB for ${email}`);

//     // Send Acknowledgment Email
//     sendFeedbackEmail(email, name, message);

//     res.status(201).json({ message: "✅ Feedback submitted successfully!" });
//   } catch (error) {
//     console.error("❌ Error submitting feedback:", error);
//     res.status(500).json({ message: "Error submitting feedback", error: error.message });
//   }
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const userRoutes = require("./routes/userRoutes");
const authenticateJWT = require("./middleware/authenticateJWT");

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection (Original version you had)
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Middleware
app.use(cors({ origin: "https://y23-mswd-doorstep-30326.onrender.com", credentials: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// User Routes
app.use('/api/users', userRoutes);

// Product Schema & Routes
const productSchema = new mongoose.Schema({
  name: String,
  date: Date,
  price: Number,
  category: String,
});
const Product = mongoose.model("Product", productSchema);

app.post("/api/products/add", async (req, res) => {
  try {
    const { name, date, price, category } = req.body;
    if (!name || !date || !price || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const product = new Product({ name, date: new Date(date), price, category });
    await product.save();
    res.status(201).json({ message: "✅ Product added", product });
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
    res.status(200).json({ message: "✅ Product deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error: error.message });
  }
});

app.put("/api/products/update/:id", async (req, res) => {
  try {
    const { name, date, price, category } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, date: new Date(date), price, category },
      { new: true }
    );
    if (!updatedProduct) return res.status(404).json({ message: "❌ Product not found" });
    res.status(200).json({ message: "✅ Product updated", product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error: error.message });
  }
});

// Static Files
app.get("/pdf", (req, res) => res.sendFile(path.join(__dirname, "public", "download.pdf")));
app.get("/image", (req, res) => res.sendFile(path.join(__dirname, "public", "image.jpg")));
app.get("/video", (req, res) => res.sendFile(path.join(__dirname, "public", "video.mp4")));

// Order Schema & Routes
const orderSchema = new mongoose.Schema({
  customerName: String,
  orderDate: Date,
  totalAmount: Number,
  status: String,
});
const Order = mongoose.model("Order", orderSchema);

app.post("/api/orders/add", async (req, res) => {
  try {
    const { customerName, orderDate, totalAmount, status } = req.body;
    if (!customerName || !orderDate || !totalAmount || !status) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newOrder = new Order({ customerName, orderDate, totalAmount, status });
    await newOrder.save();
    res.status(201).json({ message: "✅ Order added", order: newOrder });
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
    res.status(200).json({ message: "✅ Order updated", order: updatedOrder });
  } catch (error) {
    res.status(500).json({ message: "Error updating order", error: error.message });
  }
});

// Nodemailer Setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_PORT == 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
  logger: true,
  debug: true,
});

const sendFeedbackEmail = async (to, name, feedback) => {
  try {
    const mailOptions = {
      from: `"DoorStep" <${process.env.EMAIL_USER}>`,
      to,
      subject: "Thank You for Your Feedback!",
      text: `Hi ${name},\n\nThank you for your feedback!\n\n"${feedback}"\n\nBest,\nYour Team`,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Feedback email sent to ${to}: ${info.response}`);
  } catch (error) {
    console.error("❌ Error sending feedback email:", error.message);
  }
};

// Feedback Schema & Route
const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});
const Feedback = mongoose.model("Feedback", feedbackSchema, "feedback");

app.post("/api/feedback/submit", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: "❌ All fields are required" });
    }

    const feedback = new Feedback({ name, email, message });
    await feedback.save();

    sendFeedbackEmail(email, name, message);

    res.status(201).json({ message: "✅ Feedback submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting feedback", error: error.message });
  }
});

// Update user profile route (PUT)
// routes/userRoutes.js or similar file
// GET /api/users/me
app.get('/api/users/me', authenticateJWT, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.json({
      name: user.name,
      email: user.email
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching profile", error: err.message });
  }
});

app.put('/api/users/me', authenticateJWT, async (req, res) => {
  try {
    const { name } = req.body;
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "Profile not found" });
    }

    if (name) user.name = name;
    await user.save();

    // Send back updated user info (name and email)
    res.json({
      message: "Profile updated successfully",
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Error updating profile", error: err.message });
  }
});


// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
