import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useNavigate } from "react-router-dom";
import { signupUser } from "../../Services/Auth/AuthServices";
import { useState } from "react";
import { useAuth } from "../../Contexts/Auth/AuthContext";
import { useData } from "../../Contexts/Data/DataContext";
import { toast } from "react-hot-toast";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link href="https://abhishekpundir.netlify.app/" target="blank">My Portfolio</Link>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {

  const {dataDispatch}=useData()

  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    profilePic: "https://www.pngmart.com/files/22/Charizard-Pokemon-Download-PNG-Image.png",
    followers:[],
    following:[],
    bookmarks:[],
  });
  const navigate = useNavigate();
  const {setIsLoggedIn}=useAuth()
    const handleChange = (e) => {
      const { name, value } = e.target;
      setSignUpDetails((prev) => ({ ...prev, [name]: value }));
    };
    const { firstName, lastName, username, password } = signUpDetails;
  const handleSignUp = () => {
    if ((firstName, lastName, username, password)) {
      signupUser(signUpDetails, navigate,setIsLoggedIn,dataDispatch);
      setTimeout(() => {
        toast.success('Signup successful!');
      }, 200);
    }
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "solid 0.1px gray",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.6)",
            borderRadius: "10px",
            padding: "1.6rem",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-firstName"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={firstName}
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-surName"
                  name="lastName"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-email"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Email"
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
            </Grid>
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
            
            <Container component="main" maxWidth="xs" sx={{ml:4.5, mt:1}}>
              <nav>
              <NavLink to="/signin">Already have an account? SignIn</NavLink>
             </nav>
             </Container>
          </Box>
        </Box>
        <Copyright sx={{ mt: 6 }} />
      </Container>
    </ThemeProvider>
  );
}