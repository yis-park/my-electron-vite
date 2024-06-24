import { useState } from "react";
import AppBar from "@mui/material/AppBar";

import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNav = (e: any) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleOpenUser = (e: any) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseNav = () => {
    setAnchorElNav(null);
  };

  const handleCloseUser = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();
  return (
    <AppBar position="static">
      {/* pc */}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/main"
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
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNav}
              sx={{ color: "wranning" }}
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
              onClose={handleCloseNav}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNav}>
                <Button>
                  <Link to="/">main</Link>
                </Button>
                <Button>
                  <Link to="/dashboard">dashboard</Link>
                </Button>
                <Button>
                  <Link to="/login">login</Link>
                </Button>
                <Button>
                  <Link to="/logout">logout</Link>
                </Button>
              </MenuItem>
            </Menu>
          </Box>

          {/* mpbile */}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
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
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button>
              <Link to="/">main</Link>
            </Button>
            <Button>
              <Link to="/dashboard">dashboard</Link>
            </Button>
            <Button>
              <Link to="/login">login</Link>
            </Button>
            <Button>
              <Link to="/">logout</Link>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUser} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://picsum.photos/200/300?avata"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUser}
            >
              <Button>
                <Link to="/profile">Profile</Link>
              </Button>
              <Button>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button>
                <Link to="/">Logout</Link>
              </Button>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
