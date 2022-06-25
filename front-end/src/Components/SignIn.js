import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { userSignIn } from "../api/index";

const theme = createTheme();

export default function SignIn() {
  // HANDLING STATES
  const [email, setEmail] = useState("");
  const emailHandler = (event) => setEmail(event.target.value);

  const [password, setPassword] = useState("");
  const passwordHandler = (event) => setPassword(event.target.value);

  const [loading, setLoading] = useState(false);
  const [showSnakbar, setShowSnakebar] = useState(false);
  const [snakbarMessage, setSnakbarMessage] = useState("");
  // const nav = useNavigate();

  //HANDLING FORM DATA
  const signInData = {
    email: email,
    password: password,
  };

  const signInHandler = async (event) => {
    setLoading(true);
    event.preventDefault();
    // CALLING SIGN IN API
    const { data } = await userSignIn(signInData);
    console.log(data.status);
    if (data?.status) {
      setLoading(false);
      setSnakbarMessage("Succesfully logged in");
      setShowSnakebar(true);
    } else {
      setLoading(false);
      setSnakbarMessage("Unable to login");
      setShowSnakebar(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            // onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              autoComplete="given-name"
              name="email"
              required
              fullWidth
              id="email"
              value={email}
              onChange={emailHandler}
              label="Email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={passwordHandler}
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              onClick={signInHandler}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {loading ? "Loggin in..." : "Login"}
            </Button>
            {showSnakbar ? (
              <Snackbar
                open={true}
                message={snakbarMessage}
                autoHideDuration={6000}
              />
            ) : (
              ""
            )}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
