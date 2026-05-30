import "../styles/about.css";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="container">

        <div className="about-header">

          <p className="section-label">
            CHI SONO
          </p>

          <h2 className="section-title">
            Un percorso costruito tra parole,
            tecnologia e comunicazione.
          </h2>

          <p className="section-text">
            Il modo in cui lavoro oggi nasce da esperienze
            diverse che continuano a dialogare tra loro.
          </p>

        </div>

        <div className="about-content">

          <div className="about-block">

            <h3>
              Il mio percorso
            </h3>

            <p>
              Ho iniziato lavorando con le parole.
            </p>

            <p>
              Gli studi umanistici, il <strong>giornalismo</strong> e
              l'esperienza come <strong>web editor</strong> mi hanno
              insegnato quanto il <strong>linguaggio</strong> influenzi
              il modo in cui comprendiamo ciò che abbiamo davanti,
              prendiamo decisioni e costruiamo relazioni.
            </p>

            <p>
              Nel tempo ho scoperto che la stessa attenzione può
              essere applicata anche ai <strong>prodotti digitali</strong>.
            </p>

            <p>
              Oggi sviluppo <strong>siti web</strong>,
              <strong> landing page</strong> e
              <strong> interfacce front-end</strong>, ma continuo
              a portare con me ciò che ho imparato dalla scrittura:
              la ricerca della <strong>chiarezza</strong>, della
              <strong> struttura</strong> e della
              <strong> leggibilità</strong>.
            </p>

            <p>
              Per questo non considero il mio passaggio al front-end
              una rottura con ciò che ero prima, ma un'evoluzione
              naturale del mio percorso.
            </p>

            <p>
              Le parole non sono scomparse.
              Si sono semplicemente unite a nuovi strumenti.
            </p>

          </div>

          <div className="about-block">

            <h3>
              Come lavoro
            </h3>

            <p>
              Credo che un progetto digitale debba essere prima di
              tutto <strong>comprensibile</strong>.
            </p>

            <p>
              Per questo cerco di unire
              <strong> competenze tecniche</strong> e
              <strong> attenzione alla comunicazione</strong>,
              lavorando non solo sullo sviluppo delle interfacce ma
              anche sull'organizzazione delle informazioni e
              sull'esperienza di chi utilizzerà il prodotto.
            </p>

            <p>
              Mi interessa costruire prodotti digitali in cui
              <strong> struttura</strong>,
              <strong> contenuti</strong> e
              <strong> interfaccia</strong> lavorino nella stessa
              direzione: rendere chiaro ciò che si vuole comunicare
              e facilitare la relazione tra chi crea un progetto e
              chi lo utilizza.
            </p>

            <p>
              La stessa cura che applico al <strong>codice</strong>
              la applico anche alle <strong>parole</strong>,
              alla <strong>struttura</strong> e alle
              <strong> scelte progettuali</strong>.
            </p>

          </div>

          <div className="about-block">

            <h3>
              La mia visione
            </h3>

            <p>
              Non credo che una presenza online debba limitarsi a
              mostrare servizi, competenze o prodotti.
            </p>

            <p>
              Credo debba aiutare a raccontare
              <strong> chi c'è dietro</strong>.
            </p>

            <p>
              Per questo mi interessa costruire siti web e prodotti
              digitali che siano <strong>chiari</strong>,
              <strong> leggibili</strong> e
              <strong> trasparenti</strong>.
            </p>

            <p>
              <strong>Tecnologia</strong>,
              <strong> contenuti</strong> e
              <strong> comunicazione</strong> non sono aspetti
              separati del lavoro: contribuiscono tutti allo stesso
              obiettivo.
            </p>

            <p>
              Aiutare persone, professionisti e progetti a farsi
              vedere per quello che sono, non soltanto per quello
              che offrono.
            </p>

          </div>

        </div>

        <div className="about-background">

          <h3>
            Formazione & Background
          </h3>

          <ul>

            <li>
              <strong>Laurea Triennale</strong> in Lettere Moderne
            </li>

            <li>
              <strong>Laurea Magistrale</strong> in Scienze dello
              Spettacolo
            </li>

            <li>
              <strong>Web & Content Editor</strong> presso
              Comingsoon.it e Cinematographe.it
            </li>

            <li>
              <strong>Corso Full Stack Web Developer (React)</strong>
              {" "}- Aulab
            </li>

            <li>
              <strong>Corso AI Base</strong>
              {" "}- Aulab
            </li>

            <li>
              <strong>Mentor</strong>
              {" "}- Women Lead AI Bootcamp 2025
            </li>

          </ul>

          <a
            href="/Claudia_Silvestri_CV_Frontend.pdf"
            target="_blank"
            rel="noreferrer"
            className="cv-button"
          >
            Visualizza CV
          </a>

        </div>

      </div>

    </section>
  );
}

export default About;