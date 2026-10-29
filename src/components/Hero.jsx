
import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-tag">
            FRONT-END DEVELOPER · UX/UI & DIGITAL CONTENT
          </div>

          <h1>
            Design, codice
            <br />
            <span>e presenza digitale.</span>
          </h1>

          <p className="hero-description">
            Ogni progetto ha qualcosa da raccontare. Io mi occupo
            di trasformare idee, esigenze e contenuti in siti web
            e prodotti digitali capaci di dare loro forma e spazio
            online.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Vedi Progetti
            </a>

            <a href="#contact" className="secondary-btn">
              Contattami
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow"></div>

          <div className="skills-card">
            <span className="skill-pill">
              Front-End Development
            </span>

            <span className="skill-pill">
              UX/UI Design
            </span>

            <span className="skill-pill">
              Progettazione digitale
            </span>

            <span className="skill-pill">
              Contenuti e comunicazione
            </span>

            <span className="skill-pill">
              SEO e visibilità online
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