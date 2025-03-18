import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import users from "./Users.json"; // Import the users.json file
import { Box, Button, Container, TextField, Typography, Paper } from "@mui/material";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate user credentials
    const user = users.find(
      (u) => u.username === credentials.username && u.password === credentials.password
    );

    if (user) {
      alert("Login successful!");
      navigate("/welcome", { state: { username: user.username } });
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Box
      sx={{
        background: "#F7F7F7", // Light grey background
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
            Login to Your Account
          </Typography>

          {error && (
            <Typography color="error" fontSize="14px" marginBottom="15px">
              {error}
            </Typography>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              required
              sx={{ marginBottom: "20px" }}
            />
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              sx={{ marginBottom: "20px" }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                background: "#FF9900", // Amazon Orange
                color: "#FFFFFF",
                fontWeight: "bold",
                textTransform: "uppercase",
                "&:hover": {
                  backgroundColor: "#F08804", // Darker Amazon Orange on hover
                },
              }}
            >
              Login
            </Button>
          </form>

          <Typography marginTop="20px">
            Don't have an account?{" "}
            <Link to="/signup" style={{ color: "#FF9900", fontWeight: "bold", textDecoration: "none" }}>
              Sign up here
            </Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
