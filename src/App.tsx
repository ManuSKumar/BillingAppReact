import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ExampleScene from "./scenes/ExampleScene";
import SecureRoute from "./scenes/auth";
import Login from "./scenes/login";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { dark, light } from "./theme";

function App() {
  return (
    <ThemeProvider theme={light}>
      <CssBaseline />
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/example" element={<ExampleScene />} />
          <Route element={<SecureRoute />}>
            {/* Protected routes */}
            <Route path="/protected" element={<div>Protected Content</div>} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
