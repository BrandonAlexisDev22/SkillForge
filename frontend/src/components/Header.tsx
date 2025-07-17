import { useLocation, Link } from "react-router-dom";

function Header() {
  const location = useLocation();

  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Regístrate", href: "/registro" },
    { label: "Inicia Sesión", href: "/inicio-sesion" },
    { label: "Sobre Nosotros", href: "/nosotros" },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary text-light p-3" aria-label="Barra de navegación principal">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-3 text-white" to="/">
            SKILLFORGE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end gap-3" id="navbarNav">
            <div className="navbar-nav fs-5">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  className={`nav-link ${
                    location.pathname === href ? "active text-white" : "text-white-50"
                  }`}
                  aria-current={location.pathname === href ? "page" : undefined}
                  to={href}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <hr className="m-0" />
    </>
  );
}

export default Header;
