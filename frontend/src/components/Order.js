import React from "react";
import { motion } from "framer-motion";

const orders = [
  {
    orderId: "O101",
    orderDate: "2025-01-01",
    customerName: "Alice",
    customerAddress: "123 Main St, Springfield",
    deliveryDate: "2025-01-05",
    paymentMode: "Credit Card",
  },
  {
    orderId: "O102",
    orderDate: "2025-01-02",
    customerName: "Bob",
    customerAddress: "456 Elm St, Shelbyville",
    deliveryDate: "2025-01-06",
    paymentMode: "PayPal",
  },
];

const Order = () => {
  const pageStyles = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#F7F7F7", // Amazon-like light grey background
    color: "#232F3E", // Amazon Dark Blue text
    minHeight: "100vh",
    padding: "20px",
  };

  const tableContainer = {
    width: "90%",
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
  };

  const tableStyles = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const headerStyles = {
    backgroundColor: "#232F3E", // Amazon Dark Blue header
    color: "#FFFFFF",
    textAlign: "left",
    padding: "12px",
    fontSize: "1rem",
    fontWeight: "bold",
  };

  const cellStyles = {
    padding: "12px",
    textAlign: "left",
    fontSize: "0.9rem",
    borderBottom: "1px solid #DDDDDD", // Light grey border for separation
    transition: "background-color 0.3s ease-in-out", // Smooth hover effect
  };

  const rowStyles = {
    backgroundColor: "#FFFFFF", // Keep all rows white
    color: "#232F3E", // Text remains dark
    transition: "background-color 0.3s ease-in-out", // Smooth hover effect
  };

  const rowHoverStyles = {
    backgroundColor: "#FF9900", // Amazon Orange for hover effect
  };

  const titleStyles = {
    textAlign: "center",
    color: "#232F3E", // Amazon Dark Blue for branding
    margin: "20px 0",
    fontSize: "2rem",
    textTransform: "uppercase",
    letterSpacing: "1.2px",
    fontWeight: "bold",
  };

  return (
    <div style={pageStyles}>
      <motion.h1 
        style={titleStyles} 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Order List
      </motion.h1>
      <motion.div 
        style={tableContainer} 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <table style={tableStyles}>
          <thead>
            <tr>
              <th style={headerStyles}>Order ID</th>
              <th style={headerStyles}>Order Date</th>
              <th style={headerStyles}>Customer Name</th>
              <th style={headerStyles}>Customer Address</th>
              <th style={headerStyles}>Delivery Date</th>
              <th style={headerStyles}>Payment Mode</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <motion.tr
                key={order.orderId}
                style={rowStyles}
                whileHover={rowHoverStyles}
              >
                <td style={cellStyles}>{order.orderId}</td>
                <td style={cellStyles}>{order.orderDate}</td>
                <td style={cellStyles}>{order.customerName}</td>
                <td style={cellStyles}>{order.customerAddress}</td>
                <td style={cellStyles}>{order.deliveryDate}</td>
                <td style={cellStyles}>{order.paymentMode}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default Order;