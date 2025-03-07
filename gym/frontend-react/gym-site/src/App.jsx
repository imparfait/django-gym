import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Training from "./pages/Training";
import Register from './pages/Register';
import Login from './pages/Login';
import AdminWorkout from './pages/AdminWorkout';
import CreateWorkout from './pages/CreateWorkout';
import EditWorkout from './pages/EditWorkout';


import { getCurrentUser, logout } from "./services/authService";
import React, { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  return (
    <>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/training" element={<Training />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setUser={setUser}/>} />
        <Route path="/admin-workout" element={<AdminWorkout />} />
        <Route path="/admin-workout/add" element={<CreateWorkout />} />
        <Route path="/admin-workout/edit/:id" element={<EditWorkout />} />
        </Routes>
    </>
  );
}

export default App;