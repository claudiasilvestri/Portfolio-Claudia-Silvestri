import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="container nav-content">

        <a href="#" className="logo">
          Claudia Silvestri
        </a>

        <div className="nav-links">

          <a href="#projects">
            Progetti
          </a>

          <a href="#services">
            Servizi
          </a>

          <a href="#contact">
            Contatti
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;