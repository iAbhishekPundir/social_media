import {
  AccountBox,
  Bookmark,
  Explore,
  Home,
  Logout,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";
import { useAuth } from "../../Contexts/Auth/AuthContext";
import { toast } from "react-toastify";

const Sidebar = ({ mode, setMode }) => {
  const { setIsLoggedIn } = useAuth();

  const logOutHandler = () => {
    setIsLoggedIn(null);
    localStorage.clear();
    {setTimeout(() => {
      toast.success("Logout successful!");
    }, 200)}
  };
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="FEED" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Explore />
              </ListItemIcon>
              <ListItemText primary="EXPLORE" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Bookmark />
              </ListItemIcon>
              <ListItemText primary="BOOKMARK" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="PROFILE" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={logOutHandler}>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="LOGOUT" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
