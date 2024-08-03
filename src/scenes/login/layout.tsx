import React from "react";
import useStyles from "./styles";
import { useTheme } from "@mui/material/styles";

interface LoginProps {
  login: () => void;
}

const Login: React.FC<LoginProps> = (props) => {
  const { login } = props;

  const theme = useTheme();
  const classs = useStyles(theme)();

  const handleLogin = () => {
    login();
  };

  return (
    <div className={classs.container}>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
