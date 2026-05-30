import { useState } from "react";
import "../styles/contact.css";
import profileImg from "../assets/profile.png";

function Contacts() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailValid =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const nameValid =
    name.trim().length >= 2;

  const wordCount = message
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const messageValid =
    message.trim().length >= 50 &&
    wordCount >= 5;

  const formValid =
    nameValid &&
    emailValid &&
    messageValid;

  return (
    <section className="contact-section" id="contact">

      <div className="container">

        <div className="contact-header">

          <p className="section-label">
            CONTATTI
          </p>

          <h2 className="section-title">
            Parliamo del tuo progetto.
          </h2>

          <div className="contact-description">

            <p>
              Hai un'idea che non sai come concretizzare?
            </p>

            <p>
              Oppure vuoi migliorare il sito della tua attività
              o costruire una presenza online più chiara e coerente?
            </p>

            <p>
              Scrivimi e raccontami il tuo progetto:
              sarò felice di aiutarti.
            </p>

          </div>

        </div>

        <div className="contact-grid">

          <div className="contact-card">

            <img
              src={profileImg}
              alt="Claudia Silvestri"
              className="contact-photo"
            />

            <h3>
              Claudia Silvestri
            </h3>

            <p className="contact-role">
              Front-End Developer
            </p>

            <p className="contact-location">
              📍 Bari, Italia
            </p>

            <div className="contact-links">

              <a href="mailto:claudiasilvestri.dev@gmail.com">
                📧 claudiasilvestri.dev@gmail.com
              </a>

              <a
                href="https://wa.me/393880986813?text=Ciao%20Claudia,%20ho%20visto%20il%20tuo%20portfolio%20e%20vorrei%20parlarti%20di%20un%20progetto."
                target="_blank"
                rel="noreferrer"
              >
                💬 WhatsApp
              </a>

              <a
                href="https://www.linkedin.com/in/claudia-silvestri/"
                target="_blank"
                rel="noreferrer"
              >
                💼 LinkedIn
              </a>

            </div>

          </div>

          <form
            className="contact-form"
            action="https://formspree.io/f/mvzyyzqo"
            method="POST"
            noValidate
          >

            <input
              type="hidden"
              name="_subject"
              value="Nuovo contatto dal portfolio di Claudia Silvestri"
            />

            <input
              type="text"
              name="_gotcha"
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />

            <input
              type="text"
              name="name"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {name.length > 0 && !nameValid && (
              <p className="field-error">
                Inserisci almeno 2 caratteri.
              </p>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {email.length > 0 && !emailValid && (
              <p className="field-error">
                Inserisci un indirizzo email valido.
              </p>
            )}

            <textarea
              name="message"
              rows="7"
              placeholder="Descrivi il tuo progetto, obiettivi e necessità..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <p
              className={`form-note ${
                messageValid
                  ? "success"
                  : "warning"
              }`}
            >
              {messageValid
                ? "✓ Messaggio pronto per l'invio"
                : `${message.length}/50 caratteri • ${wordCount}/5 parole`}
            </p>

            <button
              type="submit"
              disabled={!formValid}
            >
              Invia messaggio
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contacts;