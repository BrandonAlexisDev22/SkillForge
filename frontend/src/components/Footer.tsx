function Footer() {
  return (
    <>
      <div>
        {/* Footer */}
        <footer
          className="text-center text-white bg-primary">
          {/* Grid container */}
          <div className="container">
            {/* Section: Links */}
            <section className="mt-4">
              {/* Grid row */}
              <div className="row text-center d-flex justify-content-center pt-5">
                {/* Grid columns */}
                {['Registrarse', 'Iniciar Sesion', 'Sobre Nosotros'].map(
                  (label, idx) => (
                    <div className="col-md-2" key={idx}>
                      <h6 className="text-uppercase font-weight-bold">
                        <a href="#!" className="text-white">
                          {label}
                        </a>
                      </h6>
                    </div>
                  )
                )}
              </div>
            </section>
            <hr className="my-5" />
            <section className="mb-5">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt distinctio earum repellat quaerat voluptatibus placeat
                    nam, commodi optio pariatur est quia magnam eum harum
                    corrupti dicta, aliquam sequi voluptate quas.
                  </p>
                </div>
              </div>
            </section>

            <section className="text-center mb-5">
              {[
                'facebook-f',
                'twitter',
                'google',
                'instagram',
                'linkedin',
                'github',
              ].map((icon, idx) => (
                <a href="#" className="text-white me-4" key={idx}>
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
          >
            © 2020 Copyright:{' '}
            <a className="text-white" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
