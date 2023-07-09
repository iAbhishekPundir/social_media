import { Twitter } from "@mui/icons-material";
import "./Navbar.css";
import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { useData } from "../../Contexts/Data/DataContext";
import { useNavigate } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  const {
    userSearch,
    setUserSearch,
    dataState: { users },
  } = useData();
  const socialUser = JSON.parse(localStorage.getItem("socilaUser"));
  const navigate = useNavigate();
  const searchValue = userSearch
    ? users?.filter((item) =>
        item?.username === socialUser?.username
          ? null
          : item.userHandler.toLowerCase().includes(userSearch.toLowerCase())
      )
    : [];
  const handleClick = (userHandler) => {
    setUserSearch("");
    navigate(`/profile/${userHandler}`);
  };

  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block", fontFamily: "cursive" } }}
          >
            Tweetly
          </Typography>
          <Twitter sx={{ display: { xs: "block", sm: "none" } }} />
          <div className="search-input-div">
            <input
              type="search"
              className="searchInput"
              placeholder="Search here "
              onChange={(e) => setUserSearch(e.target.value)}
              value={userSearch}
            />
          </div>
        </StyledToolbar>
      </AppBar>
      <nav className="navbar">
        <div className="search-navbar">
          <div className="searchOutput">
            <ul className="searchResults">
              {searchValue?.map((data) => (
                <li className="searchResult-item" key={data._id}>
                  <div className="profile-container">
                    <img
                      src={data.profilePic}
                      alt="profile1"
                      className="profileImg"
                      onClick={() => handleClick(data.userHandler)}
                    />
                    <div className="profile-info ">
                      <p
                        className="user-follow-name"
                        onClick={() => handleClick(data.userHandler)}
                      >
                        {data.firstName} {data.lastName}
                      </p>
                      <span
                        className="userId "
                        onClick={() => handleClick(data.userHandler)}
                      >
                        {data.userHandler}
                      </span>
                      <hr />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
