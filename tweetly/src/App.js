// import Mockman from "mockman-js";
import { useState } from "react";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import UserFeed from "./components/UserFeed/UserFeed";
import Rightbar from "./components/Rightbar/Rightbar";
import AddPost from "./Features/AddPost/AddPost";
import Navbar from "./components/NavBar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import SignIn from "./Features/SignIn/SignIn";
import SignUp from "./Features/SignUp/SignUp";
import { Explore } from "./Features/Explore/Explore";
import { Bookmark } from "./Features/Bookmark/Bookmark";
import { Profile } from "./Features/Profile/Profile";
import { MainContainer } from "./components/MainContainer/MainContainer";
import { Home } from "./components/Home/Home";
function App() {
 
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        {/* <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <UserFeed />
          <Rightbar />
        </Stack>
        <AddPost /> */}
        <Routes>
          <Route path="/" element={
          <MainContainer>
            <UserFeed />
          </MainContainer>} />
          <Route path="/explore" element={
            <MainContainer>
              <Explore/>
            </MainContainer>
          }/>
          
           <Route path="/bookmark" element={
            <MainContainer>
              <Bookmark/>
            </MainContainer>
          }/>
           <Route path="/profile" element={
            <MainContainer>
              <Profile/>
            </MainContainer>
          }/>
          <Route path="/profile/:userHandler" element={<MainContainer>
            <Profile/>
          </MainContainer>}/>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp/>} />
          {/* <Route path="/mockman" element={<Mockman />} /> */}
        </Routes>
      
      </Box>
    </ThemeProvider>
  );
}

export default App;
