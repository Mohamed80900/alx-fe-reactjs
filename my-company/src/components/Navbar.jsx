import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navItems = [
    { path: "/home", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div
      className="sidebar"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100px",
        height: "100vh",
        padding: "0 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        backgroundColor: "#f3f4f6",
        color: "#1f2937",
      }}
    >
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={location.pathname === item.path ? "active" : ""}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
