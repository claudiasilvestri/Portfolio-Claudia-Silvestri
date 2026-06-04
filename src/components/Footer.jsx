import "../styles/footer.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h3 className="footer-name">
          Claudia Silvestri
        </h3>

        <div className="footer-center">

          <p className="footer-role">
            Front-End Developer Freelance
          </p>

          <p className="footer-vat">
            P. IVA 09187270724
          </p>

          <div className="footer-links">

            <a
              href="https://www.linkedin.com/in/claudia-silvestri/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/claudiasilvestri"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

          </div>

          <div className="footer-policies">

            <a
              href="https://www.iubenda.com/privacy-policy/45689609"
              className="iubenda-white iubenda-noiframe iubenda-embed"
              title="Privacy Policy"
            >
              Privacy Policy
            </a>

            <a
              href="https://www.iubenda.com/privacy-policy/45689609/cookie-policy"
              className="iubenda-white iubenda-noiframe iubenda-embed"
              title="Cookie Policy"
            >
              Cookie Policy
            </a>

          </div>

        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Claudia Silvestri
        </p>

      </div>

    </footer>
  );
}

export default Footer;