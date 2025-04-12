import React from "react";
import { motion } from "framer-motion";
import { useAppContext } from "../contexts/AppContext";

const Welcome = () => {
  const { user } = useAppContext(); // pulling user from JWT context
  const username = user?.name || "Guest";

  const styles = {
    container: {
      background: "#F3F4F6", // soft Amazon-like grey
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      fontFamily: "'Amazon Ember', Arial, sans-serif",
    },
    card: {
      background: "#232F3E",
      borderRadius: "20px",
      padding: "50px 60px",
      textAlign: "center",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
      maxWidth: "600px",
      color: "#FFFFFF",
      border: "1px solid #37475A",
    },
    heading: {
      fontSize: "36px",
      fontWeight: "bold",
      marginBottom: "12px",
      color: "#FF9900",
    },
    subtext: {
      fontSize: "20px",
      color: "#F0C14B",
      marginTop: "15px",
    },
  };

  return (
    <div style={styles.container}>
      <motion.div
        style={styles.card}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 style={styles.heading}>Welcome, {username}!</h1>
        <p style={styles.subtext}>We're glad to have you on board 🚀</p>
      </motion.div>
    </div>
  );
};

export default Welcome;
