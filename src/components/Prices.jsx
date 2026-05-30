import "../styles/prices.css";

function Prices() {
  return (
    <section
      className="prices-section"
      id="prices"
    >

      <div className="container">

        <div className="prices-header">

          <p className="section-label">
            PREZZI
          </p>

          <h2 className="section-title">
            Soluzioni flessibili per siti web,
            prodotti digitali e presenza online.
          </h2>

          <p className="section-text">
            Prezzi indicativi pensati per professionisti,
            attività e progetti digitali. Ogni collaborazione
            viene definita in base alle esigenze specifiche.
          </p>

        </div>

        <div className="prices-grid">

          <div className="price-card">

            <h3>
              Siti Web & Presenza Online
            </h3>

            <div className="price-item">

              <h4>
                Landing Page & One Page
              </h4>

              <span>
                Da 400€
              </span>

            </div>

            <div className="price-item">

              <h4>
                Siti Web Professionali
              </h4>

              <span>
                Da 650€
              </span>

            </div>

          </div>

          <div className="price-card">

            <h3>
              Front-End & Prodotti Digitali
            </h3>

            <p>
              Preventivo personalizzato
            </p>

            <p className="price-description">
              Sviluppo e redesign di interfacce front-end,
              dashboard, piattaforme web e prodotti digitali.
              Disponibili anche collaborazioni continuative
              e supporto su progetti esistenti.
            </p>

          </div>

          <div className="price-card">

            <h3>
              SEO, Contenuti & Personal Branding
            </h3>

            <p>
              Preventivo personalizzato
            </p>

            <p className="price-description">
              Supporto nella scrittura contenuti,
              SEO on-page e costruzione di un’identità
              digitale coerente e professionale.
            </p>

            <p className="price-description">
              Disponibile come servizio autonomo
              oppure a supporto di siti web e
              prodotti digitali.
            </p>

          </div>

        </div>

        <div className="prices-note">

          <p>
            Per collaborazioni continuative,
            redesign front-end o supporto su
            prodotti digitali esistenti,
            sono disponibili anche formule
            orarie o giornaliere.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Prices;