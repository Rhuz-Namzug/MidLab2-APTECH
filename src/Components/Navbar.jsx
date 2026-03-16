import { Link } from "react-router-dom";
import "../Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">Student Registration</h2>

      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/register">Register</Link>
      </div>

    </nav>
  );
}

export default Navbar;