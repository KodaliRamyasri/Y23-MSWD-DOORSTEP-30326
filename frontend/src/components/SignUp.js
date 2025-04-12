// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Box, Button, Container, TextField, Typography, Paper } from "@mui/material";

// const SignUp = () => {
//   const [userData, setUserData] = useState({
//     username: "",
//     password: "",
//     confirmPassword: "",
//     email: "",
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setUserData({
//       ...userData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (userData.password !== userData.confirmPassword) {
//       setError("Passwords do not match!");
//       return;
//     }

//     alert("Sign up successful!");
//     navigate("/login");
//   };

//   return (
//     <Box
//       sx={{
//         background: "#F7F7F7", // Light grey background
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Container maxWidth="sm">
//         <Paper
//           elevation={4}
//           sx={{
//             padding: "40px",
//             borderRadius: "12px",
//             textAlign: "center",
//             backgroundColor: "#FFFFFF",
//           }}
//         >
//           <Typography variant="h5" fontWeight="bold" color="#232F3E" gutterBottom>
//             Create Your Account
//           </Typography>

//           {error && (
//             <Typography color="error" fontSize="14px" marginBottom="15px">
//               {error}
//             </Typography>
//           )}

//           <form onSubmit={handleSubmit}>
//             <TextField
//               fullWidth
//               label="Username"
//               variant="outlined"
//               name="username"
//               value={userData.username}
//               onChange={handleChange}
//               required
//               sx={{ marginBottom: "20px" }}
//             />
//             <TextField
//               fullWidth
//               label="Email"
//               variant="outlined"
//               type="email"
//               name="email"
//               value={userData.email}
//               onChange={handleChange}
//               required
//               sx={{ marginBottom: "20px" }}
//             />
//             <TextField
//               fullWidth
//               label="Password"
//               variant="outlined"
//               type="password"
//               name="password"
//               value={userData.password}
//               onChange={handleChange}
//               required
//               sx={{ marginBottom: "20px" }}
//             />
//             <TextField
//               fullWidth
//               label="Confirm Password"
//               variant="outlined"
//               type="password"
//               name="confirmPassword"
//               value={userData.confirmPassword}
//               onChange={handleChange}
//               required
//               sx={{ marginBottom: "20px" }}
//             />

//             <Button
//               type="submit"
//               variant="contained"
//               fullWidth
//               sx={{
//                 background: "#FF9900", // Amazon Orange
//                 color: "#FFFFFF",
//                 fontWeight: "bold",
//                 textTransform: "uppercase",
//                 "&:hover": {
//                   backgroundColor: "#F08804", // Darker Amazon Orange on hover
//                 },
//               }}
//             >
//               Sign Up
//             </Button>
//           </form>

//           <Typography marginTop="20px">
//             Already have an account?{" "}
//             <Link to="/login" style={{ color: "#FF9900", fontWeight: "bold", textDecoration: "none" }}>
//               Log in here
//             </Link>
//           </Typography>
//         </Paper>
//       </Container>
//     </Box>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Box, Button, Container, TextField, Typography, Paper } from "@mui/material";
import { useAppContext } from "../contexts/AppContext";

const SignUp = () => {
  const { setUser } = useAppContext();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userData.password !== userData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/users/register", {
        name: userData.username,
        email: userData.email,
        password: userData.password,
      });

      setUser(res.data.user);
      setMessage("User registered successfully");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Please try again.");
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
            Create Your Account
          </Typography>

          {error && (
            <Typography color="error" fontSize="14px" marginBottom="15px">
              {error}
            </Typography>
          )}
          {message && (
            <Typography color="success.main" fontSize="14px" marginBottom="15px">
              {message}
            </Typography>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              name="username"
              value={userData.username}
              onChange={handleChange}
              required
              sx={{ marginBottom: "20px" }}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              value={userData.email}
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
              value={userData.password}
              onChange={handleChange}
              required
              sx={{ marginBottom: "20px" }}
            />
            <TextField
              fullWidth
              label="Confirm Password"
              variant="outlined"
              type="password"
              name="confirmPassword"
              value={userData.confirmPassword}
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
                "&:hover": {
                  backgroundColor: "#F08804",
                },
              }}
            >
              Sign Up
            </Button>
          </form>

          <Typography marginTop="20px">
            Already have an account?{" "}
            <Link
              to="/login"
              style={{ color: "#FF9900", fontWeight: "bold", textDecoration: "none" }}
            >
              Log in here
            </Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default SignUp;
