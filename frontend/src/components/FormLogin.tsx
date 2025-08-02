import { useState } from 'react';
import AuthForm from './authForm';
import { useRedirectToLearning } from '@/hooks/useRedirect';
interface LoginResponse {
  token?: string;
  usuario?: {
    id: number | string;
    email: string;
    nombre: string;
    rol?: string;
  };
  user?: {
    id: number | string;
    email: string;
    nombre: string;
    rol?: string;
  };
  data?: Record<string, unknown>;
  mensaje?: string;
  message?: string;
  error?: string;
}

function LoginForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const redirect = useRedirectToLearning();
  const handleLogin = async (data: { email: string; password: string }) => {
    setIsLoading(true);
    setError('');
    setSuccess(false);

    try {
      const url = 'http://localhost:5000/auth/login/';      
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Email: data.email,    
          Contraseña: data.password  
        })
      });
      const loginResult: LoginResponse = await res.json();
      console.log('Respuesta del servidor:', loginResult);
      if (!res.ok) {
        const errorMessage = loginResult.message || loginResult.mensaje || loginResult.error || 'Error al iniciar sesión';
        throw new Error(errorMessage);
      }
      if (loginResult.mensaje && loginResult.mensaje.includes('no encontrado')) {
        throw new Error('Usuario no encontrado. Verifica tu email.');
      }
      
      if (loginResult.mensaje && loginResult.mensaje.includes('contraseña')) {
        throw new Error('Contraseña incorrecta.');
      }
  
      if (!loginResult.token && !loginResult.usuario && !loginResult.user) {
        const errorMessage = loginResult.mensaje || loginResult.message || 'Credenciales incorrectas';
        throw new Error(errorMessage);
      }
      console.log('Login exitoso:', loginResult);
    
      if (loginResult.token) {
        localStorage.setItem('authToken', loginResult.token);
      }
      
      const userData = loginResult.user || loginResult.usuario || loginResult.data;
      if (userData) {
        localStorage.setItem('userData', JSON.stringify(userData));
      }
      setSuccess(true);
    } catch (e: unknown) {
      console.error('Error de login:', e);
      
      let errorMessage = 'Error de conexión. Intenta nuevamente.';
      
      if (e instanceof Error) {
        errorMessage = e.message;
      } else if (typeof e === 'string') {
        errorMessage = e;
      } else if (e && typeof e === 'object' && 'message' in e) {
        errorMessage = String((e as { message?: unknown }).message);
      }
      
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AuthForm
        title="Iniciar Sesión"
        width='100%'
        maxWidth='600px'
        height='550px'
        minHeight='100vh'
        emailLabel="Correo Electrónico"
        passwordLabel="Contraseña"
        buttonText={isLoading ? "Ingresando..." : "Ingresar"}
        linkText="¿No tienes una cuenta aún?"
        linkTo="/registro"
        buttonFunction={redirect}
        onSubmit={handleLogin}
      />
      
      {/* Mostrar feedback al usuario */}
      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      )}
      
      {success && (
        <div className="alert alert-success mt-3" role="alert">
          ¡Login exitoso! Redirigiendo...
        </div>
      )}
      
      {isLoading && (
        <div className="d-flex justify-content-center mt-3">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginForm;