// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import { Box, Button, Container, TextField, Typography, Paper } from "@mui/material";

// const Login = () => {
//   const [credentials, setCredentials] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setCredentials({
//       ...credentials,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear any previous error

//     try {
//       const res = await axios.post("http://localhost:5000/api/users/login", {
//         email: credentials.email,
//         password: credentials.password,
//       });

//       const { token, username } = res.data;

//       localStorage.setItem("token", token);
//       localStorage.setItem("username", username);

//       navigate("/welcome", { state: { username } });
//     } catch (error) {
//       setError(error.response?.data?.message || "Login failed. Please try again.");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         background: "#F7F7F7",
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
//             Login to Your Account
//           </Typography>

//           {error && (
//             <Typography color="error" fontSize="14px" marginBottom="15px">
//               {error}
//             </Typography>
//           )}

//           <form onSubmit={handleSubmit}>
//             <TextField
//               fullWidth
//               label="Email"
//               variant="outlined"
//               name="email"
//               type="email"
//               value={credentials.email}
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
//               value={credentials.password}
//               onChange={handleChange}
//               required
//               sx={{ marginBottom: "20px" }}
//             />

//             <Button
//               type="submit"
//               variant="contained"
//               fullWidth
//               sx={{
//                 background: "#FF9900",
//                 color: "#FFFFFF",
//                 fontWeight: "bold",
//                 textTransform: "uppercase",
//                 "&:hover": {
//                   backgroundColor: "#F08804",
//                 },
//               }}
//             >
//               Login
//             </Button>
//           </form>

//           <Typography marginTop="20px">
//             Don't have an account?{" "}
//             <Link to="/signup" style={{ color: "#FF9900", fontWeight: "bold", textDecoration: "none" }}>
//               Sign up here
//             </Link>
//           </Typography>
//         </Paper>
//       </Container>
//     </Box>
//   );
// };

// export default Login;


import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { Box, Button, Container, TextField, Typography, Paper } from "@mui/material";
import { useAppContext } from "../contexts/AppContext"; // Update path as per your project

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useAppContext(); // ✅ use context to update user globally

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("https://y23-mswd-doorstep-30326.onrender.com/api/users/login", {
        email: credentials.email,
        password: credentials.password,
      });

      const { token } = res.data;
      const decoded = jwtDecode(token); // ✅ decode JWT to get user info

      localStorage.setItem("token", token);
      localStorage.setItem("username", decoded.username || decoded.name); // Fallback for your token shape

      setUser({ name: decoded.username || decoded.name }); // ✅ updates navbar instantly

      navigate("/welcome", { state: { username: decoded.username || decoded.name } });
    } catch (error) {
      setError(error.response?.data?.message || "Login failed. Please try again.");
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
              label="Email"
              variant="outlined"
              name="email"
              type="email"
              value={credentials.email}
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
                background: "#FF9900",
                color: "#FFFFFF",
                fontWeight: "bold",
                textTransform: "uppercase",
                "&:hover": {
                  backgroundColor: "#F08804",
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
