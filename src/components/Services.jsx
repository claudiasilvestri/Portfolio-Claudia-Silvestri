import "../styles/services.css";

function Services() {
  return (

    <section
      className="services-section"
      id="services"
    >

      <div className="container">

        <div className="services-header">

          <p className="section-label">
            SERVIZI
          </p>

          <h2 className="section-title">
            Frontend, presenza digitale
            e prodotti web.
          </h2>

          <p className="section-text">
            Supporto frontend e digitale per
            professionisti, attività e prodotti online.
          </p>

        </div>

        <div className="services-grid">

          <article className="service-card">

            <h3>
              Landing Page &
              Presenza Online
            </h3>

            <p>
              Siti professionali e landing page
              responsive progettati per costruire
              una presenza digitale chiara,
              credibile e orientata alla visibilità.
              Supporto anche nella struttura
              dei contenuti e nell’organizzazione
              della comunicazione web.
            </p>

          </article>

          <article className="service-card featured-card">

            <h3>
              Frontend &
              Prodotti Digitali
            </h3>

            <p>
              Sviluppo e ridefinizione di
              interfacce frontend responsive
              per dashboard, piattaforme web
              e prodotti digitali. Supporto
              sia nella creazione da zero che
              nel miglioramento grafico e
              strutturale di prodotti esistenti.
            </p>

          </article>

          <article className="service-card">

            <h3>
              SEO, Contenuti &
              Personal Branding
            </h3>

            <p>
              Supporto nella scrittura contenuti,
              SEO on-page e costruzione di
              un’identità digitale coerente e
              professionale per attività,
              professionisti e progetti online.
            </p>

          </article>

        </div>

      </div>

    </section>
  );
}

export default Services;