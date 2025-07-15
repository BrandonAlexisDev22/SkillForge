function LoginForm() {
  return (
    <div
      className="container-fluid d-flex justify-content-center gap-3 align-items-center flex-column"
      style={{ minHeight: '100vh'}}
    >
      <div
        className="bg-light p-4 rounded shadow d-flex flex-column gap-4"
        style={{ width: '100%', maxWidth: '600px', height:'440px' }}
      >
        <h2 className="text-center mb-4">Iniciar Sesión</h2>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo Electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="nombre@ejemplo.com"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input type="password" className="form-control" id="password" />
        </div>

        <button className="btn btn-primary w-100">Ingresar</button>
      <p className="register text-end">
        <a href="#">No tienes una cuenta aun?</a>
      </p>
      </div>
    </div>
  );
}

export default LoginForm;
