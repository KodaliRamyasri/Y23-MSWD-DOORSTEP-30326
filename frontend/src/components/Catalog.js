import React, { useState } from 'react';

const Catalog = () => {
  const [content, setContent] = useState(null);

  const handlePDFClick = () => {
    setContent(
      <iframe
        src="http://localhost:5000/download.pdf"
        title="PDF Viewer"
        style={styles.contentIframe}
      ></iframe>
    );
  };

  const handleVideoClick = () => {
    setContent(
      <video controls src="http://localhost:5000/video.mp4" style={styles.contentVideo}>
        Your browser does not support the video tag.
      </video>
    );
  };

  const handleImageClick = () => {
    setContent(
      <img src="http://localhost:5000/image.jpg" alt="Displayed content" style={styles.contentImage} />
    );
  };

  return (
    <div style={styles.container}>
      {/* Main Content Section */}
      <div style={styles.contentWrapper}>
        <h1 style={styles.catalogHeading}>Explore Your Files</h1>
        <div style={styles.buttonContainer}>
          <button style={{ ...styles.catalogButton, backgroundColor: "#FF9900" }} onClick={handlePDFClick}>
            PDF
          </button>
          <button style={{ ...styles.catalogButton, backgroundColor: "#F08804" }} onClick={handleVideoClick}>
            Video
          </button>
          <button style={{ ...styles.catalogButton, backgroundColor: "#FFD814", color: "#232F3E" }} onClick={handleImageClick}>
            Image
          </button>
        </div>

        {/* Dynamic Content Section */}
        <div style={styles.contentContainer}>{content}</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: "#F7F7F7", // Light background for contrast
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    textAlign: "center",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "900px",
    padding: "20px",
  },
  catalogHeading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#232F3E", // Amazon-like dark blue
    marginBottom: "1.5rem",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "2rem",
  },
  catalogButton: {
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    outline: "none",
    color: "#FFFFFF",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
    textTransform: "uppercase",
  },
  contentContainer: {
    width: "100%",
    maxWidth: "800px",
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
    padding: "1.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "150px",
  },
  contentIframe: {
    width: "100%",
    height: "600px",
    borderRadius: "8px",
    border: "1px solid #E0E0E0",
  },
  contentVideo: {
    width: "100%",
    height: "auto",
    maxHeight: "500px",
    borderRadius: "8px",
  },
  contentImage: {
    width: "100%",
    height: "auto",
    maxHeight: "500px",
    borderRadius: "8px",
  },
};

export default Catalog;
