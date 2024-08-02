import React from "react";

interface LoginProps {
  login: () => void;
}

const Login: React.FC<LoginProps> = (props) => {
  const { login } = props;
  const handleLogin = () => {
    login();
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
