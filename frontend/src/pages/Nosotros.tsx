import Header from '@/components/Header';
import Footer from '@/components/Footer';
const Nosotros = () => {
  return (
    <>
      <Header />
      <main className="container-fluid">
        {/* Hero Section */}
        <section className="bg-primary text-white py-5 my-4 rounded">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="display-4 fw-bold mb-3">Sobre SkillForfge</h1>
                <p className="lead">
                  Transformando la educación a través de rutas de aprendizaje personalizadas
                </p>
              </div>
              <div className="col-md-6 text-center">
                <img
                  src="https://img.freepik.com/vector-gratis/ilustracion-concepto-abstracto-segmentacion-audiencia_335657-1854.jpg?semt=ais_hybrid&w=740"
                  alt="Sobre nosotros"
                  className="img-fluid rounded"
                  style={{ maxHeight: '300px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 className="text-center mb-4">Nuestra Misión</h2>
                <p className="lead text-center text-muted mb-4">
                  Democratizar el acceso a la educación de calidad mediante tecnología innovadora
                </p>
                <p className="text-center">
                  En SkillForge creemos que cada persona tiene el potencial de aprender y crecer. 
                  Nuestra plataforma está diseñada para adaptarse a tu ritmo, tus objetivos y tu estilo 
                  de aprendizaje único. No hay dos estudiantes iguales, por eso no hay dos rutas iguales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5">¿Qué nos hace diferentes?</h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <div className="mb-3">
                      <i className="fas fa-route fa-3x text-primary"></i>
                    </div>
                    <h5 className="card-title">Rutas Personalizadas</h5>
                    <p className="card-text">
                      Cada estudiante recibe una ruta de aprendizaje única, adaptada a sus 
                      objetivos, nivel actual y preferencias de estudio.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <div className="mb-3">
                      <i className="fas fa-clock fa-3x text-primary"></i>
                    </div>
                    <h5 className="card-title">Flexibilidad Total</h5>
                    <p className="card-text">
                      Aprende a tu propio ritmo, en el momento que mejor te convenga. 
                      La plataforma se adapta a tu horario, no al revés.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <div className="mb-3">
                      <i className="fas fa-chart-line fa-3x text-primary"></i>
                    </div>
                    <h5 className="card-title">Progreso Medible</h5>
                    <p className="card-text">
                      Seguimiento detallado de tu progreso con métricas claras y 
                      retroalimentación constante para mantener tu motivación.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="mb-4">Tecnología Moderna</h2>
                <p className="mb-3">
                  SkillForge está construido con las últimas tecnologías web para garantizar 
                  una experiencia rápida, segura y confiable.
                </p>
                <div className="row">
                  <div className="col-6 mb-3">
                    <div className="d-flex align-items-center">
                      <i className="fab fa-react fa-2x text-info me-3"></i>
                      <span>React</span>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="d-flex align-items-center">
                      <i className="fab fa-node-js fa-2x text-success me-3"></i>
                      <span>Node.js</span>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="d-flex align-items-center">
                      <i className="fas fa-database fa-2x text-warning me-3"></i>
                      <span>MongoDB</span>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="d-flex align-items-center">
                      <i className="fas fa-server fa-2x text-danger me-3"></i>
                      <span>Express.js</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/022/841/114/non_2x/chatgpt-openai-logo-icon-free-png.png"
                  alt="Tecnología"
                  className="img-fluid rounded"
                  style={{ maxHeight: '400px', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5">Nuestro Equipo</h2>
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card text-center shadow-sm">
                  <div className="card-body">
                    <div className="mb-3">
                      <i className="fas fa-user-circle fa-5x text-primary"></i>
                    </div>
                    <h5 className="card-title">Desarrollador Principal</h5>
                    <p className="card-text text-muted">Full Stack Developer</p>
                    <p className="card-text">
                      Apasionado por crear soluciones educativas innovadoras que 
                      transformen la manera en que las personas aprenden.
                    </p>
                    <div className="d-flex justify-content-center gap-2">
                      <a href="#" className="btn btn-outline-primary btn-sm">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href="#" className="btn btn-outline-primary btn-sm">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Nosotros;
