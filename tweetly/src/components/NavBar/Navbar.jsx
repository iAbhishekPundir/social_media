import { Twitter } from "@mui/icons-material";
import {
  AppBar,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useData } from "../../Contexts/Data/DataContext";

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
  const {userSearch, setUserSearch} = useData();
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
        <div>
        <input type="search" className="searchInput" placeholder="Search here " onChange={(e) => setUserSearch(e.target.value)} value={userSearch}  />
        </div>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
