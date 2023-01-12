import React, { useState } from "react";
import {
  Box,
  Tab,
  Menu,
  Tabs,
  AppBar,
  Toolbar,
  MenuItem,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet, useNavigate } from "react-router-dom";
import { TabPanel } from "./styles";
import { routes } from "../../routes";

function AppBarComponent() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (path) => {
    if (path) {
      navigate(path);
    }
    setAnchorElNav(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Reconstructora MotoCar
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={() => handleCloseNavMenu("/")}>
                  <Typography textAlign="center">Inicio</Typography>
                </MenuItem>
                {routes.map((route) => (
                  <MenuItem
                    key={route.name}
                    onClick={() => handleCloseNavMenu(route.path)}
                  >
                    <Typography textAlign="center">{route.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Reconstructora MotoCar
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Tabs
                textColor="secondary"
                indicatorColor="secondary"
                value={value}
                onChange={handleChange}
              >
                <Tab
                  label="Inicio"
                  onClick={() => handleCloseNavMenu("/")}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Inicio
                </Tab>
                {routes.map((route) => (
                  <Tab
                    label={route.name}
                    key={route.name}
                    onClick={() => handleCloseNavMenu(route.path)}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {route.name}
                  </Tab>
                ))}
              </Tabs>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <TabPanel>
        <Outlet />
      </TabPanel>
    </div>
  );
}
export default AppBarComponent;
