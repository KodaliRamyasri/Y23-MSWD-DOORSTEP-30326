import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaLaptop,
  FaMobileAlt,
  FaHome,
  FaGift,
  FaTools,
  FaCartPlus,
  FaTshirt,
  FaBook,
  FaCouch,
  FaAppleAlt
} from 'react-icons/fa';

const categories = [
  { icon: <FaLaptop />, label: 'Electronics' },
  { icon: <FaMobileAlt />, label: 'Mobiles' },
  { icon: <FaHome />, label: 'Home & Kitchen' },
  { icon: <FaGift />, label: 'Gifts' },
  { icon: <FaTools />, label: 'Tools' },
  { icon: <FaCartPlus />, label: 'Essentials' },
  { icon: <FaTshirt />, label: 'Fashion' },
  { icon: <FaBook />, label: 'Books' },
  { icon: <FaCouch />, label: 'Furniture' },
  { icon: <FaAppleAlt />, label: 'Groceries' },
];

const Home = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/signup');
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#EAEDED',
      color: '#232F3E',
      minHeight: '100vh',
      padding: '50px 20px'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Welcome to DoorStep</h1>
        <p style={{ fontSize: '1.2rem', color: '#37475A', marginTop: '10px' }}>
          Shop smart, fast, and easy. Explore categories and register to get started!
        </p>
      </div>

      <h2 style={{ fontSize: '2rem', marginTop: '60px', textAlign: 'center' }}>Shop by Categories</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
        gap: '25px',
        maxWidth: '1000px',
        margin: '40px auto'
      }}>
        {categories.map((cat, index) => (
          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            key={index}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '30px 20px',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: '0.3s all ease'
            }}
          >
            <div style={{ fontSize: '2.5rem', color: '#FF9900', marginBottom: '15px' }}>
              {cat.icon}
            </div>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#232F3E'
            }}>{cat.label}</h3>
          </motion.div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <motion.button
          whileHover={{
            scale: 1.1,
            backgroundColor: '#FFB84D',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRegister}
          style={{
            padding: '15px 40px',
            backgroundColor: '#FF9900',
            color: '#fff',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            transition: 'all 0.3s ease'
          }}
        >
          Register Now
        </motion.button>
      </div>
    </div>
  );
};

export default Home;
