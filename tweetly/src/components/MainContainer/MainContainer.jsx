import React, { useState } from "react";

import Navbar from "../NavBar/Navbar";
// import UserFeed from '../UserFeed/UserFeed'
import Sidebar from "../Sidebar/Sidebar";
import Rightbar from "../Rightbar/Rightbar";
import { RequiresAuth } from "../../Auth/RequireAuth";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";

export const MainContainer = ({ children }) => {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <RequiresAuth>
            <Navbar />
            <Stack direction="row" spacing={2} justifyContent="space-between">
              <Sidebar setMode={setMode} mode={mode} />

              {children}

              <Rightbar />
            </Stack>
          </RequiresAuth>
        </Box>
      </ThemeProvider>
    </>
  );
};
