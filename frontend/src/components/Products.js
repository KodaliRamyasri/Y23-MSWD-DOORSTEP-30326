import React from "react";
import productsData from "./ProductsData.json"; // Ensure the correct path to the JSON file

const ProductsList = () => {
  const pageStyles = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#F7F7F7", // Amazon-like light grey background
    color: "#232F3E", // Amazon Dark Blue text
    minHeight: "100vh",
    padding: "20px",
  };

  const tableStyles = {
    width: "90%",
    margin: "20px auto",
    borderCollapse: "collapse",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#FFFFFF", // White background for better contrast
    color: "#232F3E", // Dark blue text for readability
    borderRadius: "8px",
    overflow: "hidden",
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
    color: "#232F3E", // Text remains black
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
      <h1 style={titleStyles}>Products List</h1>
      <table style={tableStyles}>
        <thead>
          <tr>
            <th style={headerStyles}>Product ID</th>
            <th style={headerStyles}>Product Name</th>
            <th style={headerStyles}>Price</th>
            <th style={headerStyles}>Quantity in Stock</th>
            <th style={headerStyles}>Brand</th>
            <th style={headerStyles}>Category</th>
            <th style={headerStyles}>Description</th>
            <th style={headerStyles}>Release Date</th>
            <th style={headerStyles}>Average Rating</th>
            <th style={headerStyles}>Shipping Method</th>
          </tr>
        </thead>
        <tbody>
          {productsData.map((product) => (
            <tr
              key={product.product_id}
              style={rowStyles}
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, rowHoverStyles)
              }
              onMouseLeave={(e) =>
                Object.assign(e.currentTarget.style, rowStyles)
              }
            >
              <td style={cellStyles}>{product.product_id}</td>
              <td style={cellStyles}>{product.product_name}</td>
              <td style={cellStyles}>${product.price.toFixed(2)}</td>
              <td style={cellStyles}>{product.quantity_in_stock}</td>
              <td style={cellStyles}>{product.brand}</td>
              <td style={cellStyles}>{product.category}</td>
              <td style={cellStyles}>{product.description}</td>
              <td style={cellStyles}>{product.release_date}</td>
              <td style={cellStyles}>{product.average_rating}</td>
              <td style={cellStyles}>{product.shipping_method}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
