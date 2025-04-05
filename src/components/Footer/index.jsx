import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__social-links">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/fb.png" alt="Logo do Facebook" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/tw.png" alt="Logo do Twitter" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/ig.png" alt="Logo do Instagram" />
        </a>
      </nav>
      <a href="/">
        <img
          src="/images/logo.png"
          alt="Logo do Organo"
          className="footer__logo"
        />
      </a>
      <p className="footer__dev">Desenvolvido por Alura.</p>
    </footer>
  );
};

export default Footer;
