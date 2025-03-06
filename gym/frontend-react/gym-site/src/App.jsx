import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Training from "./pages/Training";
import Register from './pages/Register';
import Login from './pages/Login';
import { getCurrentUser, logout } from "./services/authService";
import React, { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(getCurrentUser());
  }, []);
  return (
    <>
      {/* <Header user={user} setUser={setUser} /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/training" element={<Training />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setUser={setUser}/>} />
      </Routes>
    </>
  );
}

export default App;