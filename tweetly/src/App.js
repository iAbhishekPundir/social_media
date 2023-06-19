// import Mockman from "mockman-js";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import UserFeed from "./components/UserFeed/UserFeed";

import SignIn from "./Features/SignIn/SignIn";
import SignUp from "./Features/SignUp/SignUp";
import { Explore } from "./Features/Explore/Explore";
import { Bookmark } from "./Features/Bookmark/Bookmark";
import { Profile } from "./Features/Profile/Profile";
import { MainContainer } from "./components/MainContainer/MainContainer";

function App() {

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainContainer>
            <UserFeed />
          </MainContainer>
        }
      />
      <Route
        path="/explore"
        element={
          <MainContainer>
            <Explore />
          </MainContainer>
        }
      />

      <Route
        path="/bookmark"
        element={
          <MainContainer>
            <Bookmark />
          </MainContainer>
        }
      />
      <Route
        path="/profile"
        element={
          <MainContainer>
            <Profile />
          </MainContainer>
        }
      />
      <Route
        path="/profile/:userHandler"
        element={
          <MainContainer>
            <Profile />
          </MainContainer>
        }
      />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      {/* <Route path="/mockman" element={<Mockman />} /> */}
    </Routes>
  );
}

export default App;
