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

        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Claudia Silvestri
        </p>

      </div>

    </footer>
  );
}

export default Footer;