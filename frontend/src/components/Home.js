import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const containerStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    color: '#232F3E', // Amazon Dark Blue for text
    padding: '0',
    height: '100vh',
    backgroundColor: '#FFFFFF', // White background for a clean, professional look
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const titleStyle = {
    fontSize: '3rem',
    marginBottom: '15px',
    fontWeight: 'bold',
    color: '#131921', // Amazon's Dark Navy for contrast
  };

  const descriptionStyle = {
    fontSize: '1.2rem',
    maxWidth: '600px',
    marginBottom: '30px',
    lineHeight: '1.8',
    color: '#37475A', // Amazon's Deep Grey for readability
    padding: '0 20px',
  };

  const buttonStyle = {
    padding: '15px 30px',
    fontSize: '1.2rem',
    color: '#FFFFFF',
    background: '#FF9900', // Amazon Orange
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const handleMouseOver = (e) => {
    e.target.style.transform = 'scale(1.05)';
    e.target.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
  };

  const handleMouseOut = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
  };

  const handleClick = () => {
    navigate('/signup');
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Welcome to Doorstep</h1>
      <p style={descriptionStyle}>
        Your one-stop e-commerce platform for hassle-free shopping and fast doorstep delivery. 
        Discover unbeatable deals, top brands, and a seamless experience today!
      </p>
      <button
        style={buttonStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        Register Now
      </button>
    </div>
  );
};

export default Home;
