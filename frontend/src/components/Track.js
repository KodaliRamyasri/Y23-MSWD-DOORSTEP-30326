import React from "react";
import { motion } from "framer-motion";

const trackingDetails = [
  {
    purchaseId: "T001",
    cname: "Alice",
    eddate: "2025-01-05",
    status: "In Transit",
    deliveryPerson: { did: "D001", dcontact: "+1234567890" },
  },
  {
    purchaseId: "T002",
    cname: "Bob",
    eddate: "2025-01-06",
    status: "Delivered",
    deliveryPerson: { did: "D002", dcontact: "+0987654321" },
  },
];

const Track = () => {
  const pageStyles = {
    fontFamily: "'Amazon Ember', Arial, sans-serif",
    background: "#FFFFFF",
    color: "#111111",
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
    backgroundColor: "#232F3E",
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
    borderBottom: "1px solid #D5D9D9",
    color: "#111111",
  };

  const evenRowStyles = {
    backgroundColor: "#F3F3F3",
  };

  const oddRowStyles = {
    backgroundColor: "#FFFFFF",
  };

  const titleStyles = {
    textAlign: "center",
    color: "#232F3E",
    margin: "20px 0",
    fontSize: "2rem",
    textTransform: "uppercase",
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
        Tracking List
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
              <th style={headerStyles}>Purchase ID</th>
              <th style={headerStyles}>Customer Name</th>
              <th style={headerStyles}>Expected Delivery Date</th>
              <th style={headerStyles}>Status</th>
              <th style={headerStyles}>Delivery Person ID</th>
              <th style={headerStyles}>Delivery Contact</th>
            </tr>
          </thead>
          <tbody>
            {trackingDetails.map((track, index) => (
              <motion.tr
                key={track.purchaseId}
                style={index % 2 === 0 ? evenRowStyles : oddRowStyles}
                whileHover={{ backgroundColor: "#FF9900", color: "#111111", cursor: "pointer" }}
              >
                <td style={cellStyles}>{track.purchaseId}</td>
                <td style={cellStyles}>{track.cname}</td>
                <td style={cellStyles}>{track.eddate}</td>
                <td style={cellStyles}>{track.status}</td>
                <td style={cellStyles}>{track.deliveryPerson.did}</td>
                <td style={cellStyles}>{track.deliveryPerson.dcontact}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default Track;