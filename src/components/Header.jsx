import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import "../styles/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  // Load user on first mount and when localStorage changes
  const loadUser = () => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    loadUser();

    // Listen for storage change (e.g., in other tabs)
    window.addEventListener("storage", loadUser);
    return () => window.removeEventListener("storage", loadUser);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleUserMenu = () => setShowUserMenu((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" onClick={toggleMenu}>📚 BookVerse</Link>
      </div>

      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-button">Search</button>
      </div>

      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/about" onClick={toggleMenu}>About</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        <Link to="/wishlist">Wishlist</Link>

      </nav>

      <div className="header-actions">
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart />
          <span className="cart-badge">2</span>
        </Link>

        {/* 👤 User Menu Toggle on Click */}
        <div className="user-menu">
          <FaUser className="user-icon" onClick={toggleUserMenu} />
          {showUserMenu && (
            <div className="user-dropdown">
              {user ? (
                <>
                  <Link to="/profile" onClick={() => setShowUserMenu(false)}>Profile</Link>
                  <Link to="/orders" onClick={() => setShowUserMenu(false)}>Orders</Link>
                  <button onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setShowUserMenu(false)}>Login</Link>
                  <Link to="/register" onClick={() => setShowUserMenu(false)}>Register</Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>
    </header>
  );
};

export default Header;
