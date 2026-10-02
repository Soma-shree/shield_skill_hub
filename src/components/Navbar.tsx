import React, { useState, useEffect } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import logo from "../assets/shield-logo.png"
import { Icon } from "./Icons"
import { useAuth } from "../context/AuthContext"

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { user } = useAuth()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile drawer on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Courses", path: "/courses" },
    { label: "Programs", path: "/programs" },
    { label: "Internships", path: "/internships" },
    { label: "Projects", path: "/projects" },
    { label: "Resources", path: "/resources" },
    { label: "Contact", path: "/contact" },
  ]

  return (
    <header className="nav-wrap">
      <nav
        className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
        aria-label="Primary navigation"
      >
        <Link className="brand" to="/" aria-label="Shield Skill Academy home">
          <span className="brand-mark">
            <img src={logo} alt="Shield Skill Academy Logo" />
          </span>
          <span className="brand-name">
            Shield <b>Skill Hub</b>
          </span>
        </Link>

        <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.label}
            </NavLink>
          ))}

          {/* Mobile Auth Button */}
          <div className="mobile-cta">
            {user ? (
              <Link to="/profile" className="button button-primary">
                <span>Profile ({user.name.split(" ")[0]})</span>
                <Icon name="arrow" size={16} />
              </Link>
            ) : (
              <Link to="/login" className="button button-primary">
                <span>Login</span>
                <Icon name="arrow" size={16} />
              </Link>
            )}
          </div>
        </div>

        {/* Desktop CTA / Auth State */}
        <div className="nav-cta">
          {user ? (
            <Link
              to="/profile"
              className="button button-primary"
              style={{ padding: "0 16px", gap: "8px" }}
              aria-label="User profile and enrolled courses"
            >
              <span
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  background: "var(--navy)",
                  color: "var(--white)",
                  display: "grid",
                  placeItems: "center",
                  fontSize: "11px",
                  fontWeight: 800,
                }}
              >
                {user.avatar || user.name.slice(0, 2).toUpperCase()}
              </span>
              <span>{user.name.split(" ")[0]}</span>
            </Link>
          ) : (
            <Link to="/login" className="button button-primary">
              <span>Login</span>
              <Icon name="arrow" size={16} />
            </Link>
          )}
        </div>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "x" : "menu"} size={23} />
        </button>
      </nav>
    </header>
  )
}
export default Navbar
