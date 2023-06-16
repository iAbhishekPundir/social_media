// import "./App.css";
// import "./utils.css";
import { useState } from "react";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
// import { Login } from "./Features/Login/Login";
import UserFeed from "./components/UserFeed/UserFeed";
import Rightbar from "./components/Rightbar/Rightbar";
import AddPost from "./components/AddPost/AddPost";
import Navbar from "./components/NavBar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import SignIn from "./Features/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import { Explore } from "./Features/Explore/Explore";
function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
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
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/explore" element={<Explore/>}/>
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
