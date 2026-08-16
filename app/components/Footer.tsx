import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <h2>Let&apos;s Connect</h2>

        <p>Find me across the web</p>

        <div className="footerSocials">
          <a
            target="_blank"
            href="https://wa.me/6281387603591"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          
          <a
            target="_blank"
            href="mailto:afwanmaulanas02@gmail.com"
            rel="noopener noreferrer"
            aria-label="Gmail"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://instagram.com/afwnmaul"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://linkedin.com/in/afwan-maulana-sidqi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/Afwanms"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}