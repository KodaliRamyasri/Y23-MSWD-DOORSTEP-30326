// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home'; // Home page
// import Products from './components/Products'; // Products page
// import Track from './components/Track'; // Tracking page
// import Order from './components/Order'; // Orders page
// import DrawerAppBar from './components/NavBar'; // Navbar
// import About from './components/About'; // About page
// import SignUp from './components/SignUp'; // SignUp page
// import Login from './components/Login'; // Login page
// import Welcome from './components/Welcome'; // Welcome page
// import APIProducts from './components/APIProducts'; // API Products page
// import Catalog from './components/Catalog';
// import ProductsList from './components/ProductsList';
// import OrdersList from './components/OrdersList';
// import Feedback from './components/Feedback';

// function App() {
//   return (
//     <Router>
//       <div>
//         <DrawerAppBar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/catalog" element={<Catalog />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/productslist" element={<ProductsList />} />
//           <Route path="/orderslist" element={<OrdersList />} />
//           <Route path="/orders" element={<Order />} />
//           <Route path="/tracking" element={<Track />} />
//           <Route path="/welcome" element={<Welcome />} />
//           <Route path="/api-products" element={<APIProducts />} />
//           <Route path="/feedback" element={<Feedback/>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DrawerAppBar from './components/NavBar'; // Navbar

// Pages
import Home from './components/Home'; 
import Products from './components/Products';
import Track from './components/Track';
import Order from './components/Order';
import About from './components/About';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Welcome from './components/Welcome';
import APIProducts from './components/APIProducts';
import Catalog from './components/Catalog';
import ProductsList from './components/ProductsList';
import OrdersList from './components/OrdersList';
import Feedback from './components/Feedback';

// Context and Auth
import { AppProvider } from './contexts/AppContext';
import ProtectedRoute from './contexts/ProtectedRoute';
import Profile from './components/Profile';

function App() {
  return (
    <AppProvider>
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
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/profile" element={<Profile/>} />

            {/* Protected Home Route */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
