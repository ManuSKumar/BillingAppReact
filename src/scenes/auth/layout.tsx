import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface SecureRouteProps {
  redirectPath?: string;
}

const SecureRoute: React.FC<SecureRouteProps> = ({ redirectPath = "/" }) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return isAuthenticated ? <Outlet /> : <Navigate to={redirectPath} />;
};

export default SecureRoute;
