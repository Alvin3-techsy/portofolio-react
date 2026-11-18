import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-2">
        <p>© {new Date().getFullYear()} Alvin. Dibuat untuk proyek pembelajaran.</p>
        <Link to="/contact">Kontak</Link>
      </div>
    </footer>
  );
}

export default Footer;
