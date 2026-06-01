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
                Siti Multipagina
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

            <p className="custom-price">
              Preventivo personalizzato
            </p>

          </div>

          <div className="price-card">

            <h3>
              SEO, Contenuti & Comunicazione Web
            </h3>

            <p className="custom-price">
              Preventivo personalizzato
            </p>

          </div>

        </div>

        <div className="prices-note">

          <p>
            Per collaborazioni continuative,
            redesign front-end o supporto su
            prodotti digitali esistenti,
            sono disponibili anche formule
            orarie, giornaliere o a progetto.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Prices;