import React, { useState } from "react";
import axios from "axios";
import { Box, Button, Container, TextField, Typography, Paper } from "@mui/material";

const Feedback = () => {
  const [feedback, setFeedback] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
  
    try {
      const { data } = await axios.post("http://localhost:5000/api/feedback/submit", feedback);
      console.log("Server Response:", data);
      setSuccess(true);
      alert("✅ Feedback submitted successfully!");
    } catch (err) {
      console.error("Error submitting feedback", err);
      setError("❌ Error submitting feedback. Please try again.");
    }
  };
  
  return (
    <Box
      sx={{
        background: "#F7F7F7",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={4}
          sx={{
            padding: "40px",
            borderRadius: "12px",
            textAlign: "center",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Typography variant="h5" fontWeight="bold" color="#232F3E" gutterBottom>
            Give Your Feedback
          </Typography>

          {error && (
            <Typography color="error" fontSize="14px" marginBottom="15px">
              {error}
            </Typography>
          )}
          {success && (
            <Typography color="green" fontSize="14px" marginBottom="15px">
              ✅ Feedback submitted successfully!
            </Typography>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              name="name"
              value={feedback.name}
              onChange={handleChange}
              required
              sx={{ marginBottom: "20px" }}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={feedback.email}
              onChange={handleChange}
              required
              sx={{ marginBottom: "20px" }}
            />
            <TextField
              fullWidth
              label="Your Feedback"
              variant="outlined"
              multiline
              rows={4}
              name="message"
              value={feedback.message}
              onChange={handleChange}
              required
              sx={{ marginBottom: "20px" }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                background: "#FF9900",
                color: "#FFFFFF",
                fontWeight: "bold",
                textTransform: "uppercase",
                "&:hover": { backgroundColor: "#F08804" },
              }}
            >
              Submit Feedback
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Feedback;
