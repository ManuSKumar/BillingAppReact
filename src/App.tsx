import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ExampleScene from "./scenes/ExampleScene";
import SecureRoute from "./scenes/auth";
import Login from "./scenes/login";

function App() {
  return (
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
  );
}

export default App;
