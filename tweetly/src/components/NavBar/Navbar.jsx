import { Twitter } from "@mui/icons-material";
import {
  AppBar,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  marginRight:"38px",
  borderRadius: theme.shape.borderRadius,
  width: "22%",
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{ display: { xs: "none", sm: "block", fontFamily: "cursive" } }}
        >
          Tweetly
        </Typography>
        <Twitter sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search people..." />
        </Search>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
