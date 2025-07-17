import AuthForm from './authForm';
function LoginForm() {
  const handleLogin = (data: { email: string; password: string }) => {
    console.log('Iniciar sesión con:', data);
    // Aquí puedes llamar a tu API de login
  };

  return (
    <AuthForm
      title="Iniciar Sesión"
      width='100%'
      maxWidth='600px'
      height='550px'
      minHeight='100vh'
      emailLabel="Correo Electrónico"
      passwordLabel="Contraseña"
      buttonText="Ingresar"
      linkText="¿No tienes una cuenta aún?"
      linkTo="/registro"
      onSubmit={handleLogin}
    />
  );
}

export default LoginForm;
