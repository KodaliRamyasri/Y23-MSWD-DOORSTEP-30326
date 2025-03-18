import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Home page
import Products from './components/Products'; // Products page
import Track from './components/Track'; // Tracking page
import Order from './components/Order'; // Orders page
import DrawerAppBar from './components/NavBar'; // Navbar
import About from './components/About'; // About page
import SignUp from './components/SignUp'; // SignUp page
import Login from './components/Login'; // Login page
import Welcome from './components/Welcome'; // Welcome page
import APIProducts from './components/APIProducts'; // API Products page
import Catalog from './components/Catalog';
import ProductsList from './components/ProductsList';
import OrdersList from './components/OrdersList';

function App() {
  return (
    <Router>
      <div>
        <DrawerAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productslist" element={<ProductsList />} />
          <Route path="/orderslist" element={<OrdersList />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/tracking" element={<Track />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/api-products" element={<APIProducts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
