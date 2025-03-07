import "./Header.css";
import logo from "../assets/dumble.png";
import { useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { logout } from "../services/authService";

const nav__links = [
  { path: "/", display: "Home", isRoute: true },
  { path: "#pricing-plan", display: "Pricing", isRoute: false },
  { path: "/training", display: "Training", isRoute: true },
  { path: "/admin-workout", display: "Admin Workout", isRoute: true },
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

          {/* auth section */}
          <div className="nav__right">
            {user ? (
              <button className="join__btn" onClick={() => logout(setUser)}>
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="register__btn">Login</Link>
                <Link to="/register" className="register__btn">Register</Link>
              </>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;