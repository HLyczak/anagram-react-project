import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 8 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            color="inherit"
            component={Link}
            to="/"
            sx={{ textDecoration: "none" }}
          >
            Honoratorgam
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            component={Link}
            to="/albums"
            sx={{ textDecoration: "none" }}
          >
            Albums
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            component={Link}
            to="/comments"
            sx={{ textDecoration: "none" }}
          >
            Comments
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            component={Link}
            to="/users"
            sx={{ textDecoration: "none" }}
          >
            Users
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            component={Link}
            to="/photos"
            sx={{ textDecoration: "none" }}
          >
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
