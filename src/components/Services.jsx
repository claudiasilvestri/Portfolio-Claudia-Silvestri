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
            Front-End, presenza digitale
            e prodotti digitali.
          </h2>

          <p className="section-text">
            Supporto front-end e digitale per
            professionisti, attività e prodotti online.
          </p>

        </div>

        <div className="services-grid">

          <article className="service-card">

            <h3>
              Siti Web &
              Presenza Online
            </h3>

            <p>
              Siti professionali e landing page
              responsive progettati per comunicare
              in modo chiaro e valorizzare attività,
              professionisti e progetti online.
              Supporto anche nella struttura
              dei contenuti e nell'organizzazione
              della comunicazione web.
            </p>

          </article>

          <article className="service-card featured-card">

            <h3>
              Front-End &
              Prodotti Digitali
            </h3>

            <p>
              Sviluppo e miglioramento di
              interfacce front-end responsive
              per dashboard, piattaforme web
              e prodotti digitali. Supporto
              sia nella creazione da zero che
              nell'ottimizzazione di prodotti
              esistenti.
            </p>

          </article>

          <article className="service-card">

            <h3>
              SEO, Contenuti &
              Comunicazione Web
            </h3>

            <p className="price-description">
              Supporto nella scrittura dei contenuti,
              nell'ottimizzazione SEO on-page e
              nell'organizzazione delle informazioni,
              per rendere siti e prodotti digitali
              più chiari, intuitivi ed efficaci.
            </p>

          </article>

        </div>

      </div>

    </section>
  );
}

export default Services;