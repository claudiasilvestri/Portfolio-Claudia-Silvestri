import "../styles/projects.css";

import corestackImg from "../screen-projects/corestack.png";
import gameverseImg from "../screen-projects/gameverse.png";
import lawfirmImg from "../screen-projects/lawfirm.png";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="projects-header">
          <p className="section-label">
            PROGETTI
          </p>

          <h2 className="section-title">
            Alcuni progetti sviluppati tra prodotti digitali,
            piattaforme web e siti professionali.
          </h2>

          <p className="section-text">
            Interfacce front-end, prodotti web e identità digitali
            progettate per essere moderne, responsive e riconoscibili.
          </p>
        </div>

        <div className="projects-wrapper">
          <article className="project-card">
            <div className="project-content">
              <p className="project-category">
                PRODUCT PLATFORM
              </p>

              <h3>
                CoreStack
              </h3>

              <p>
                Piattaforma in produzione ideata per rendere
                la valutazione tecnica dei developer
                più pratica, meritocratica e vicina
                alle esigenze reali del mercato tech.

                Il progetto unisce challenge realistiche,
                matching tra aziende e candidati basato
                sulle competenze e una struttura front-end
                progettata per essere chiara, leggibile
                e intuitiva.
              </p>

              <div className="project-tags">
                <span>Front-End</span>
                <span>UX</span>
                <span>Product Thinking</span>
              </div>

              <div className="project-buttons">
                <a
                  href="https://github.com/claudiasilvestri/CoreStack"
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="project-image-wrapper">
              <img
                src={corestackImg}
                alt="CoreStack project"
                className="project-image"
              />
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <p className="project-category">
                WEB APPLICATION
              </p>

              <h3>
                GameVerse
              </h3>

              <p>
                Applicazione web sviluppata per
                esplorare e filtrare videogiochi
                tramite API esterna, con attenzione
                all’esperienza utente, alla navigazione
                responsive e alla gestione dinamica
                dei contenuti.
              </p>

              <div className="project-tags">
                <span>API Integration</span>
                <span>Responsive UI</span>
                <span>State Management</span>
              </div>

              <div className="project-buttons">
                <a
                  href="https://gameverse-live.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  Live
                </a>

                <a
                  href="https://github.com/claudiasilvestri/Gameverse"
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn secondary-project-btn"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="project-image-wrapper">
              <img
                src={gameverseImg}
                alt="GameVerse project"
                className="project-image"
              />
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <p className="project-category">
                PROFESSIONAL WEBSITE
              </p>

              <h3>
                Sito Web Studio Legale
              </h3>

              <p>
                Sito multipagina progettato per una
                professionista del settore legale,
                con focus su presenza online,
                personal branding e chiarezza
                comunicativa. Il progetto ha incluso
                struttura dei contenuti, responsive
                design e ottimizzazione SEO.
              </p>

              <div className="project-tags">
                <span>Personal Branding</span>
                <span>SEO</span>
                <span>Responsive Design</span>
              </div>

              <div className="project-buttons">
                <a
                  href="https://www.federicadalessandroavvocato.it/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  Visita il sito
                </a>
              </div>
            </div>

            <div className="project-image-wrapper">
              <img
                src={lawfirmImg}
                alt="Studio legale project"
                className="project-image"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;