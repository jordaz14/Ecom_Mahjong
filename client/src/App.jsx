import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

import Login from "./pages/LogIn";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Merch from "./pages/Merch";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import MyAccount from "./pages/MyAccount";

import ProtectedRoute from "./pages/ProtectedRoute";

import Navbar from "./section/Navbar";

function App() {
  const Token = cookies.get("TOKEN");

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landing" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/myaccount"
            element={
              <ProtectedRoute user={Token}>
                <MyAccount />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute user={Token}>
                <Checkout />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
