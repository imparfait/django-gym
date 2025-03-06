// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { logout, getCurrentUser } from "../services/authService";

// function Header({ user, setUser }) {
//   return (
//     <header className="header">
//       <nav className="navbar">
//       <div className="nav-links">
//           <Link to="/">Home</Link>
//           <Link to="/training">Training</Link>
//         </div>
//         <div className="auth-links">
//           {user ? (
//             <>
//               <button className="logout-btn" onClick={() => { logout(setUser) }}>
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link to="/login">Login</Link>
//               <Link to="/register">Register</Link>
//             </>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;

import "./Header.css";
import logo from "../assets/dumble.png";
import { useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

const nav__links = [
  { path: "/", display: "Home", isRoute: true },
  { path: "#pricing-plan", display: "Pricing", isRoute: true },
  { path: "/training", display: "Training", isRoute: true },
];

function Header({ user, setUser }) {
  const headerRef = useRef(null);

  const headerFunc = useCallback(() => {  
    if (document.documentElement.scrollTop > 80) {
      headerRef.current?.classList.add("sticky__header");
    } else {
      headerRef.current?.classList.remove("sticky__header");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    return () => {
      window.removeEventListener("scroll", headerFunc);
    };
  }, [headerFunc]);

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">

          <div className="logo">
            <div className="logo__img"><img src={logo} alt="logo" /></div>
            <h2>FitBody</h2>
          </div>

          {/* navigation menu */}
          <nav className="navigation">
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li key={index} className="nav__item">
                  {item.isRoute ? (
                    <Link to={item.path}>{item.display}</Link> 
                  ) : (
                    <a href={item.path}>{item.display}</a> 
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* nav right */}
          <div className="nav__right">
            <button className="register__btn">Log In</button>
            <button className="register__btn">Register</button>
            <span className="mobile__menu">
              <i className="ri-menu-line"></i> 
            </span>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;