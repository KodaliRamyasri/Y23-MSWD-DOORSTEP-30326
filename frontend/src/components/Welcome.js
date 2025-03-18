import React from "react";
import { useLocation } from "react-router-dom";

const Welcome = () => {
  const location = useLocation();
  const { username } = location.state || { username: "Guest" };

  const styles = {
    container: {
      background: "#FFFFFF", // Amazon white background
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      fontFamily: "'Amazon Ember', Arial, sans-serif",
    },
    card: {
      background: "#232F3E", // Amazon dark blue
      borderRadius: "12px",
      padding: "40px 50px",
      textAlign: "center",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
      maxWidth: "500px",
      color: "#FFFFFF", // White text for contrast
      border: "1px solid #37475A", // Amazon grey-blue border
    },
    heading: {
      fontSize: "32px",
      fontWeight: "bold",
      marginBottom: "10px",
      letterSpacing: "1px",
      color: "#FF9900", // Amazon orange accent
    },
    subtext: {
      fontSize: "18px",
      color: "#F0C14B", // Amazon gold accent
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Hello, {username}!</h1>
        <p style={styles.subtext}>Welcome to the platform!</p>
      </div>
    </div>
  );
};

export default Welcome;
