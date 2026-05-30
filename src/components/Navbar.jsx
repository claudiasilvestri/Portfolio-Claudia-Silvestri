import { useState, useEffect, useRef } from "react";
import "../styles/navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }

    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);

  return (
    <nav className="navbar">

      <div
        className="container nav-content"
        ref={menuRef}
      >

        <a
          href="#"
          className="logo"
          onClick={closeMenu}
        >
          Claudia Silvestri
        </a>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div
          className={`nav-links ${
            menuOpen ? "active" : ""
          }`}
        >

          <a
            href="#projects"
            onClick={closeMenu}
          >
            Progetti
          </a>

          <a
            href="#about"
            onClick={closeMenu}
          >
            Chi sono
          </a>

          <a
            href="#services"
            onClick={closeMenu}
          >
            Servizi
          </a>

          <a
            href="#prices"
            onClick={closeMenu}
          >
            Prezzi
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
          >
            Contatti
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;