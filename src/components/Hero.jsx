import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="container hero-content">

        <div className="hero-text">

          <div className="hero-tag">
            FRONTEND DEVELOPER & CREATIVE BUILDER
          </div>

          <h1>
            Design, codice
            <br />
            <span>e presenza digitale.</span>
          </h1>

          <p className="hero-description">
            Frontend, branding e identità digitali
            per progetti moderni e riconoscibili.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-btn"
            >
              Vedi Progetti
            </a>

            <a
              href="#contact"
              className="secondary-btn"
            >
              Contattami
            </a>

          </div>

        </div>

        <div className="hero-visual">

          <div className="visual-glow"></div>

          <div className="skills-card">

            <span className="skill-pill">Frontend</span>

            <span className="skill-pill">React</span>

            <span className="skill-pill">
              Creative Development
            </span>

            <span className="skill-pill">
              Brand Identity
            </span>

            <span className="skill-pill">
              Digital Presence
            </span>

            <span className="skill-pill">
              Product Thinking
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;