import React from "react";
import useStyles from "./styles";
import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Copyright } from "../../components/copyRight";
import { Link, useNavigate } from "react-router-dom";

interface LoginProps {
  login: (loginData: { email: string; password: string }) => void;
  loadData: () => void;
  isAuthenticated: boolean;
}

const Login: React.FC<LoginProps> = (props) => {
  const { login, loadData, isAuthenticated } = props;
  const navigate = useNavigate();

  React.useEffect(() => {
    loadData();
  }, []);

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const theme = useTheme();
  const classs = useStyles(theme)();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginData = {
      email: data.get("email") as string,
      password: data.get("password") as string,
    };
    login(loginData);
  };

  return (
    <div className={classs.container}>
      <div className={classs.left}>
        <Container component="main" className={classs.loginCard}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">Sign In</Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, pl: 3, pr: 3 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="name"
              autoFocus
              variant="standard"
              className={classs.textField}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="password"
              variant="standard"
              className={classs.textField}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classs.loginButton}
              sx={{ mt: 3, mb: 2, maxWidth: "150px" }}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
              <Grid item>
                <Link to="signUp">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </Box>
          <Copyright sx={{ mt: 1, mb: 1 }} />
        </Container>
      </div>
      <div className={classs.right} />
    </div>
  );
};

export default Login;
