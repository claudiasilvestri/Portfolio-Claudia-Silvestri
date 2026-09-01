import "../styles/projects.css";

import naxosImg from "../screen-projects/naxos.png";
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
            Progetti in cui codice e contenuti
            lavorano nella stessa direzione.
          </h2>

          <p className="section-text">
            Prodotti digitali, piattaforme web e siti professionali
            progettati per comunicare in modo chiaro e offrire
            un'esperienza semplice e intuitiva.
          </p>

        </div>

        <div className="projects-wrapper">

          <article className="project-card">

            <div className="project-content">

              <p className="project-category">
                PRODUCT PLATFORM
              </p>

              <h3>
                Naxos
              </h3>

              <p>
                Piattaforma digitale che mette in contatto
                developer e startup attraverso profili
                professionali e challenge tecniche. La
                selezione parte dalle competenze e mantiene
                anonima l’identità del developer nella fase
                iniziale, per concentrarsi sull’esperienza
                e sulle capacità dimostrate. Il progetto
                combina sviluppo front-end, UX e product thinking.
              </p>

              <div className="project-tags">

                <span>Front-End</span>

                <span>Product Design</span>

                <span>Product Thinking</span>

              </div>

              <div className="project-buttons">

                <a
                  href="https://www.naxosapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  Visita il sito
                </a>

                <a
                  href="https://github.com/claudiasilvestri/Naxos"
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
                src={naxosImg}
                alt="Anteprima della piattaforma Naxos"
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

                <span>API REST</span>

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
                  Visita il sito
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
                alt="Anteprima dell'applicazione web GameVerse"
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
                comunicativa. Il progetto include
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
                alt="Anteprima del sito web dello Studio Legale Federica D'Alessandro"
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