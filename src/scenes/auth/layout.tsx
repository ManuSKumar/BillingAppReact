import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface SecureRouteProps {
  redirectPath?: string;
  isAuthenticated: boolean;
}

const SecureRoute: React.FC<SecureRouteProps> = ({
  redirectPath = "/",
  isAuthenticated,
}) => {
  debugger;
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectPath} />;
};

export default SecureRoute;
