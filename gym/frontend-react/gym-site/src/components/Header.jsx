import { Link } from "react-router-dom";

function Header() {

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/training">Training</Link>
      </nav>
    </header>
  );
}

export default Header;