import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom";

export function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 8 }}>
      <AppBar position="static" color="secondary">
        <Container maxWidth="md">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Typography
              variant="h5"
              color="inherit"
              component={Link}
              to="/"
              sx={{
                textDecoration: "none",
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              A N A G R A M
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                ml: "auto",
                display: { xs: "flex", md: "none" },
              }}
            >
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
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    variant="button"
                    color="inherit"
                    component={Link}
                    to="/albums"
                    sx={{ textDecoration: "none" }}
                  >
                    ALBUMS
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    variant="button"
                    color="inherit"
                    component={Link}
                    to="/comments"
                    sx={{ textDecoration: "none" }}
                  >
                    COMMENTS
                  </Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    variant="button"
                    color="inherit"
                    component={Link}
                    to="/users"
                    sx={{ textDecoration: "none" }}
                  >
                    USERS
                  </Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    variant="button"
                    color="inherit"
                    component={Link}
                    to="/photos"
                    sx={{ textDecoration: "none" }}
                  >
                    PHOTOS
                  </Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    variant="button"
                    color="inherit"
                    component={Link}
                    to="/add-photos"
                    sx={{ textDecoration: "none" }}
                  >
                    ADD PHOTOS
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>

            <Typography
              variant="h6"
              color="inherit"
              component={Link}
              to="/"
              sx={{
                textDecoration: "none",
                display: { xs: "flex", md: "none" },
              }}
            >
              A N A G R A M
            </Typography>

            <Box
              sx={{
                gap: 2,
                display: { xs: "none", md: "flex" },
              }}
            >
              <Typography
                variant="h6"
                color="inherit"
                component={Link}
                to="/albums"
                sx={{ textDecoration: "none" }}
              >
                ALBUMS
              </Typography>
              <Typography
                variant="h6"
                color="inherit"
                component={Link}
                to="/comments"
                sx={{ textDecoration: "none" }}
              >
                COMMENTS
              </Typography>
              <Typography
                variant="h6"
                color="inherit"
                component={Link}
                to="/users"
                sx={{ textDecoration: "none" }}
              >
                USERS
              </Typography>
              <Typography
                variant="h6"
                color="inherit"
                component={Link}
                to="/photos"
                sx={{ textDecoration: "none" }}
              >
                PHOTOS
              </Typography>
              <Typography
                variant="h6"
                color="inherit"
                component={Link}
                to="/add-photos"
                sx={{ textDecoration: "none" }}
              >
                ADD PHOTOS
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
