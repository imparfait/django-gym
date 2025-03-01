import { Link } from "react-router-dom";
//import { useState, useEffect } from "react";
import { logout } from "../services/authService";

function Header({ user, setUser }) {
  return (
    <header className="header">
      <nav className="navbar">
      <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/training">Training</Link>
          <Link to="/subscriptions">Subscriptions</Link>
        </div>
        <div className="auth-links">
          {user ? (
            <>
              <button className="logout-btn" onClick={() => { logout(setUser) }}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;