import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const APIProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(true);
      }
    };

    fetchProducts();
  }, []);

  const pageStyles = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#FFFFFF",
    color: "#232F3E",
    minHeight: "100vh",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const cardStyles = {
    backgroundColor: "#232F3E",
    color: "#FFFFFF",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    width: "320px",
    height: "auto",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    margin: "10px",
  };

  const imageStyles = {
    borderRadius: "8px",
    width: "100%",
    height: "180px",
    objectFit: "contain",
    marginBottom: "15px",
  };

  const titleStyles = {
    color: "#FF9900",
    marginBottom: "15px",
    fontSize: "1.2rem",
    fontWeight: "bold",
  };

  const priceStyles = {
    color: "#17C3B2",
    fontSize: "1rem",
    margin: "10px 0",
  };

  const buttonStyles = {
    backgroundColor: "#FF9900",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "5px",
    padding: "10px 15px",
    cursor: "pointer",
    marginTop: "10px",
    transition: "background-color 0.3s ease",
  };

  const headingStyles = {
    color: "#232F3E",
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "30px",
  };

  if (error) {
    return <div style={pageStyles}>Failed to fetch data. Please try again later.</div>;
  }

  if (!products.length) {
    return <div style={pageStyles}>None</div>;
  }

  return (
    <div style={pageStyles}>
      <h1 style={headingStyles}>API Products</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {products.map((product) => (
          <motion.div
            key={product.id}
            style={cardStyles}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img src={product.image} alt={product.title} style={imageStyles} />
            <h2 style={titleStyles}>{product.title}</h2>
            <p style={priceStyles}>${product.price.toFixed(2)}</p>
            <p>{product.category}</p>
            <motion.button
              style={buttonStyles}
              whileHover={{ scale: 1.1, backgroundColor: "#CC7A00" }}
              whileTap={{ scale: 0.9 }}
            >
              Add to Cart
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default APIProducts;
