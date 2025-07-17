const Hero = () => {
  return (
    <section className="position-relative">
      {/* Imagen de fondo */}
      <div className="w-100">
        <img
          src="https://static.vecteezy.com/system/resources/previews/049/963/178/non_2x/educational-illustration-set-in-flat-cartoon-style-students-learning-in-class-or-at-home-books-laptops-and-study-elements-icons-school-supplies-collection-learning-and-academic-themes-vector.jpg"
          alt="Hero"
          className="img-fluid w-100"
          style={{
            maxHeight: '500px',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Contenido */}
      <div className="container-fluid bg-white p-5 rounded shadow mt-n5 position-relative z-1">
        <div className="row align-items-center mb-4">
          <div className="col-md-4 text-center border-end border-2">
            <p className="display-6 text-secondary m-0">Hola!</p>
          </div>
          <div className="col-md-8">
            <p className="display-6 m-0">
              Aprende con rumbo, crece con propósito.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 offset-md-1">
            <p className="lead text-secondary">
              SkillForge es una plataforma de aprendizaje que te permite diseñar y seguir rutas personalizadas según tus metas y ritmo. Aquí, tú eliges qué aprender, cómo y cuándo.
            </p>
            <p className="lead text-secondary">
               SkillForge busca demostrar cómo estructurar una experiencia de aprendizaje clara y útil mediante rutas personalizadas, diseño accesible y buenas prácticas de desarrollo.
            </p>
          </div>
        </div>
      </div>
       <div className="container-fluid bg-white p-5 rounded shadow mt-n5 position-relative z-1">
        <div className="row align-items-center mb-4">
          <div className="col-md-4 text-center border-end border-2">
            <p className="display-6 text-secondary m-0">Intencion</p>
          </div>
          <div className="col-md-8">
            <p className="display-6 m-0">
              Este proyecto esta pensado para aprender y practicar el stack tecnologico MERN
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 offset-md-1">
            <p className="lead text-secondary">
              Esta plataforma es solamente una prueba y hecho con el fin de practicar conceptos de programacion con el stack anteriormente mencionado.
            </p>
            <p className="lead text-secondary">
              Con un enfoque práctico y flexible, SkillForge te ayuda a adquirir habilidades reales, avanzar profesionalmente y mantenerte en constante evolución. Aprende con intención, progresa con dirección.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
