import { BrowserRouter, Routes, Route, NavLink, useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

const navStyles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    background: "rgba(10, 10, 10, 0.92)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid #1a1a1a",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 2.5rem",
    height: "58px",
    fontFamily: "'Georgia', serif",
  },
  logo: {
    fontSize: "1rem",
    fontWeight: "700",
    color: "#c9a84c",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    textDecoration: "none",
  },
  links: {
    display: "flex",
    gap: "2rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  link: (isActive) => ({
    fontSize: "0.75rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: isActive ? "#c9a84c" : "#666",
    textDecoration: "none",
    transition: "color 0.2s",
    fontFamily: "'Georgia', serif",
    borderBottom: isActive ? "1px solid #c9a84c" : "1px solid transparent",
    paddingBottom: "2px",
  }),
  content: {
    paddingTop: "58px",
  },
};

function Nav() {
  return (
    <nav style={navStyles.nav}>
      <NavLink to="/" style={navStyles.logo}>Studio</NavLink>
      <ul style={navStyles.links}>
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/services", label: "Services" },
          { to: "/contact", label: "Contact" },
        ].map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === "/"}
              style={({ isActive }) => navStyles.link(isActive)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div style={navStyles.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
