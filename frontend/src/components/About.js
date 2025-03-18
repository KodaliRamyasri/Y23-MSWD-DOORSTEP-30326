import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faLock, faStar, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const About = () => {

  const styles = {
    container: {
      background: "#FFFFFF",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      padding: "50px",
      textAlign: "center",
      fontFamily: "'Amazon Ember', Arial, sans-serif",
    },
    heading: {
      fontSize: "40px",
      fontWeight: "bold",
      color: "#232F3E",
      marginBottom: "20px",
    },
    paragraph: {
      fontSize: "18px",
      color: "#37475A",
      lineHeight: "1.6",
      marginBottom: "30px",
      maxWidth: "800px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    button: {
      background: "#FF9900",
      color: "#FFFFFF",
      padding: "12px 25px",
      border: "none",
      borderRadius: "6px",
      fontSize: "18px",
      fontWeight: "bold",
      cursor: "pointer",
      boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
      transition: "transform 0.3s ease, background-color 0.3s ease",
    },
    buttonContainer: {
      marginTop: "30px",
    },
    iconStyle: {
      fontSize: "30px",
      color: "#FF9900",
      marginBottom: "10px",
    },
    listContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "40px",
      flexWrap: "wrap",
      marginBottom: "30px",
    },
    listItem: {
      fontSize: "18px",
      color: "#37475A",
      textAlign: "center",
      maxWidth: "250px",
    },
    image: {
      width: "350px",
      borderRadius: "10px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
      marginTop: "30px",
    },
    link: {
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to DoorStep</h1>

      <p style={styles.paragraph}>
        At DoorStep, we bring the best products right to your doorstep! We are committed to providing
        an outstanding e-commerce experience with fast delivery, top-quality products, and excellent customer service.
      </p>

      <div style={styles.listContainer}>
        <div className="list-item">
          <FontAwesomeIcon icon={faTruck} style={styles.iconStyle} />
          <p style={styles.listItem}>Fast & Reliable Delivery</p>
        </div>
        <div className="list-item">
          <FontAwesomeIcon icon={faLock} style={styles.iconStyle} />
          <p style={styles.listItem}>Secure Payment Options</p>
        </div>
        <div className="list-item">
          <FontAwesomeIcon icon={faStar} style={styles.iconStyle} />
          <p style={styles.listItem}>Top-rated Customer Service</p>
        </div>
        <div className="list-item">
          <FontAwesomeIcon icon={faCheckCircle} style={styles.iconStyle} />
          <p style={styles.listItem}>100% Satisfaction Guarantee</p>
        </div>
      </div>

      <div style={styles.buttonContainer}>
        <Link to="/products" style={styles.link}>
          <button
            style={styles.button}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.backgroundColor = "#F90";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.backgroundColor = "#FF9900";
            }}
          >
            Shop Now
          </button>
        </Link>
      </div>

      <div>
        <img
          src="https://gepard.io/uploads/product-images-for-ecommerce-websites.jpg"
          alt="Products"
          style={styles.image}
        />
      </div>
    </div>
  );
};

export default About;