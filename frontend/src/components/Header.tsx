function Header() {
  const navLinks = [
    { label: "Inicio", href: "#", active: true },
    { label: "Regístrate", href: "#" },
    { label: "Inicia Sesión", href: "#" },
    { label: "Sobre Nosotros", href: "#" },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary text-light p-3" aria-label="Barra de navegación principal">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-3 text-white" href="#">
            SKILLFORGE
          </a>
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
              {navLinks.map(({ label, href, active }) => (
                <a
                  key={label}
                  className={`nav-link ${active ? "active text-white" : "text-white-50"}`}
                  aria-current={active ? "page" : undefined}
                  href={href}
                >
                  {label}
                </a>
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

