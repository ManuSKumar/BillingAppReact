import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ExampleScene from "./scenes/ExampleScene";
import SecureRoute from "./scenes/auth/layout";
import Login from "./scenes/login";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { dark, light } from "./theme";
import SignUp from "./scenes/signUp";
import "./firebase";
import { Toaster } from "react-hot-toast";
import Layout from "./scenes/Layout";

function App() {
  return (
    <ThemeProvider theme={light}>
      <Toaster />
      <CssBaseline />
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />

          <Route element={<SecureRoute />}>
            {/* Protected routes */}
            <Route path="/home" element={<Layout />} />
            <Route path="/example" element={<ExampleScene />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
