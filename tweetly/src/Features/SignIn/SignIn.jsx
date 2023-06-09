import React, {useState} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoginIcon from "@mui/icons-material/Login";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ButtonGroup } from "@mui/material";
import { toast } from "react-toastify";
import { NavLink, useLocation, useNavigate  } from "react-router-dom";
import { useAuth} from "../../Contexts/Auth/AuthContext";
import { loginUser } from "../../Services/Auth/AuthServices";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link href="https://abhishekpundir.netlify.app/" target="blank">My Portfolio</Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn() {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { username, password } = loginDetails;
  const handleLogin = () => {
    if (username && password) {
      loginUser({ username, password }, navigate, setIsLoggedIn);
      // setTimeout(() => {
      //   toast.success('Login successful!');
      // }, 200);
    }
  };

  const handleGuestLogin = () => {
    const creds = { username: "abhishekpundir@gmail.com", password: "pundir" };
    setLoginDetails(creds);
    loginUser(creds, navigate, setIsLoggedIn);
  };
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LoginIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={(e) => e.preventDefault()}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              type="text"
              value={username}
              onChange={(e)=>  setLoginDetails({ ...loginDetails, username: e.target.value })}
              autoComplete=""
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              // name="password"
              value={password}
              type="password"
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, password: e.target.value })
              }
              autoComplete=""
              
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="I accept all terms and conditions"
            />
            <br />
            <Container component="main" maxWidth="xs" sx={{mt:2}}>
              <Button variant="contained" fullWidth sx={{mb:2}}
               onClick={handleLogin}
              >
                Sign In
              </Button>
              <Button variant="contained" fullWidth sx={{mb:1}}
              onClick={handleGuestLogin}
              >
                Sign In As Guest
              </Button>
            </Container>

            <Container component="main" maxWidth="xs" sx={{ml:5.2, mt:1}}>
             <nav>
              <NavLink to="/signup">Don't have account? SignUp</NavLink>
             </nav>
            </Container>
          </Box>
        </Box>
        <Copyright sx={{ mt: 4, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
