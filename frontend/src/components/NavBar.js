import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useAppContext } from "../contexts/AppContext";

const privatePages = [
  "Catalog",
  "Products",
  "Products List",
  "Orders List",
  "API Products",
  "Orders",
  "Tracking",
  "Feedback",
  "Profile",
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const { user, setUser } = useAppContext();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigation = (page) => {
    const routes = {
      SignUp: "/signup",
      Login: "/login",
      About: "/about",
      Catalog: "/catalog",
      Products: "/products",
      "Products List": "/productslist",
      "Orders List": "/orderslist",
      "API Products": "/api-products",
      Orders: "/orders",
      Tracking: "/tracking",
      Feedback: "/feedback",
      Profile: "/profile",
    };

    navigate(routes[page]);
    handleCloseNavMenu();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "#232F3E",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "8px 0",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "#FF9900" }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              letterSpacing: ".2rem",
              color: "#FFFFFF",
              textDecoration: "none",
            }}
          >
            DoorStep
          </Typography>

          {/* Mobile Menu (only after login) */}
          {user && (
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: "#FFFFFF" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {privatePages.map((page) => (
                  <MenuItem key={page} onClick={() => handleNavigation(page)}>
                    <Typography textAlign="center" sx={{ color: "#232F3E", fontSize: "16px" }}>
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
                <MenuItem onClick={handleLogout}>
                  <Typography textAlign="center" sx={{ color: "#D32F2F", fontWeight: 600 }}>
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}

          {/* Spacer to push right-side items */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Nav Items (after login, spread out) */}
          {user && (
            <Box sx={{ flexGrow: 25, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
              {privatePages.map((page) => (
                <Button
                key={page}
                onClick={() => handleNavigation(page)}
                sx={{
                  mx: 1,
                  color: "#FFFFFF",
                  fontSize: "15px",
                  fontWeight: 500,
                  textTransform: "capitalize",
                  "&:hover": {
                    backgroundColor: "rgba(255, 153, 0, 0.2)",
                    color: "#FF9900",
                    transition: "all 0.3s ease",
                  },
                }}
                >
                  {page}
                  </Button>
                ))}
                </Box>
              )}
          {/* Right Side Auth + Public Links */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {!user ? (
              <>
                <Button
                  onClick={() => handleNavigation("About")}
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "15px",
                    fontWeight: 500,
                    "&:hover": {
                      backgroundColor: "rgba(255, 153, 0, 0.2)",
                      color: "#FF9900",
                      transition: "all 0.3s ease",
                    },
                  }}
                >
                  About
                </Button>
                <Button
                  onClick={() => handleNavigation("Login")}
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "15px",
                    fontWeight: 500,
                    "&:hover": {
                      backgroundColor: "rgba(255, 153, 0, 0.2)",
                      color: "#FF9900",
                      transition: "all 0.3s ease",
                    },
                  }}
                >
                  Login
                </Button>
                <Button
                  onClick={() => handleNavigation("SignUp")}
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "15px",
                    fontWeight: 500,
                    "&:hover": {
                      backgroundColor: "rgba(255, 153, 0, 0.2)",
                      color: "#FF9900",
                      transition: "all 0.3s ease",
                    },
                  }}
                >
                  SignUp
                </Button>
              </>
            ) : (
              <>
                <Typography sx={{ color: "#F0C14B", fontSize: "15px", fontWeight: 500 }}>
                  {user.name}
                </Typography>
                <Button
                  variant="outlined"
                  onClick={handleLogout}
                  sx={{
                    color: "#FF9900",
                    borderColor: "#FF9900",
                    "&:hover": {
                      backgroundColor: "rgba(255, 153, 0, 0.1)",
                      borderColor: "#FF9900",
                    },
                  }}
                >
                  Logout
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
