import { useState } from 'react';
import AuthForm from './authForm';
import { useRedirectToLearning } from '@/hooks/useRedirect';
interface ValidationErrors {
  nameUser?: string;
  surnameUser?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  RolUser?: string;
}

function Register() {
  const [nameUser, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [RolUser, setRol] = useState('');
  const [surnameUser, setSurname] = useState('');
  const [UsuarioRegistrado, setUsuarioRegistrado] = useState(false);
  const [registroIntentado, setRegistroIntentado] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const redirect = useRedirectToLearning();
  // Función para validar email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Función para validar contraseña
  const validatePassword = (password: string): boolean => {
    // Al menos 8 caracteres, una mayúscula, una minúscula, un número
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  // Función para validar nombre/apellido
  const validateName = (name: string): boolean => {
    // Solo letras y espacios, mínimo 2 caracteres
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/;
    return nameRegex.test(name.trim());
  };

  // Función principal de validación
  const validateForm = (data: { email: string; password: string }): ValidationErrors => {
    const newErrors: ValidationErrors = {};

    // Validar nombre
    if (!nameUser.trim()) {
      newErrors.nameUser = 'El nombre es obligatorio';
    } else if (!validateName(nameUser)) {
      newErrors.nameUser = 'El nombre debe tener entre 2-50 caracteres y solo contener letras';
    }

    // Validar apellido
    if (!surnameUser.trim()) {
      newErrors.surnameUser = 'El apellido es obligatorio';
    } else if (!validateName(surnameUser)) {
      newErrors.surnameUser = 'El apellido debe tener entre 2-50 caracteres y solo contener letras';
    }

    // Validar email
    if (!data.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!validateEmail(data.email)) {
      newErrors.email = 'Por favor ingresa un correo electrónico válido';
    }

    // Validar contraseña
    if (!data.password) {
      newErrors.password = 'La contraseña es obligatoria';
    } else if (!validatePassword(data.password)) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número';
    }

    // Validar confirmación de contraseña
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Debes confirmar tu contraseña';
    } else if (data.password !== confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    // Validar rol
    if (!RolUser) {
      newErrors.RolUser = 'Debes seleccionar un rol de usuario';
    }

    return newErrors;
  };

  // Función para limpiar errores individuales
  const clearFieldError = (fieldName: keyof ValidationErrors) => {
    if (errors[fieldName]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  };

  const handleRegister = async (data: { email: string; password: string }) => {
    setRegistroIntentado(true);
    setIsSubmitting(true);
    
    // Validar formulario
    const validationErrors = validateForm(data);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setUsuarioRegistrado(false);
      setIsSubmitting(false);
      return;
    }

    // Limpiar errores si la validación pasa
    setErrors({});

    const userData = {
      Nombre: nameUser.trim(),
      Apellido: surnameUser.trim(),
      Email: data.email.trim().toLowerCase(),
      Contraseña: data.password,
      Rol: RolUser,
    };

    try {
      const res = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const result = await res.json();

      if (!res.ok) {
        setUsuarioRegistrado(false);
        
        // Manejar errores específicos del servidor
        if (result.error && result.error.includes('email')) {
          setErrors({ email: 'Este correo electrónico ya está registrado' });
        } else {
          alert(result.error || 'Error al registrar usuario');
        }
        return;
      }
      
      setUsuarioRegistrado(true);
      // Limpiar formulario después del registro exitoso
      setName('');
      setSurname('');
      setConfirmPassword('');
      setRol('');
      
    } catch (error) {
      console.error('Error al registrar:', error);
      setUsuarioRegistrado(false);
      alert('Error de conexión. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthForm
      title="Crear Cuenta"
      extraFields={
        <>
          <div className="mb-3 fs-5">
            <label htmlFor="name" className="form-label p-2">
              Nombre *
            </label>
            <input
              type="text"
              className={`form-control ${errors.nameUser ? 'is-invalid' : ''}`}
              id="name"
              placeholder="Juan"
              value={nameUser}
              onChange={(e) => {
                setName(e.target.value);
                clearFieldError('nameUser');
              }}
              disabled={isSubmitting}
            />
            {errors.nameUser && (
              <div className="invalid-feedback">
                {errors.nameUser}
              </div>
            )}
          </div>

          <div className="mb-3 fs-5">
            <label htmlFor="surname" className="form-label p-2">
              Apellido *
            </label>
            <input
              type="text"
              className={`form-control ${errors.surnameUser ? 'is-invalid' : ''}`}
              id="surname"
              placeholder="Pérez"
              value={surnameUser}
              onChange={(e) => {
                setSurname(e.target.value);
                clearFieldError('surnameUser');
              }}
              disabled={isSubmitting}
            />
            {errors.surnameUser && (
              <div className="invalid-feedback">
                {errors.surnameUser}
              </div>
            )}
          </div>

          <div className="mb-3 fs-5">
            <label htmlFor="confirmPassword" className="form-label p-2">
              Confirmar Contraseña *
            </label>
            <input
              type="password"
              className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                clearFieldError('confirmPassword');
              }}
              disabled={isSubmitting}
            />
            {errors.confirmPassword && (
              <div className="invalid-feedback">
                {errors.confirmPassword}
              </div>
            )}
          </div>

          <div className="mb-3 fs-5">
            <label className="form-label p-2">Rol de usuario *</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="rol"
                id="radioAlumno"
                value="Usuario"
                checked={RolUser === 'Usuario'}
                onChange={(e) => {
                  setRol(e.target.value);
                  clearFieldError('RolUser');
                }}
                disabled={isSubmitting}
              />
              <label className="form-check-label" htmlFor="radioAlumno">
                Usuario
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="rol"
                id="radioProfesor"
                value="Administrador"
                checked={RolUser === 'Administrador'}
                onChange={(e) => {
                  setRol(e.target.value);
                  clearFieldError('RolUser');
                }}
                disabled={isSubmitting}
              />
              <label className="form-check-label" htmlFor="radioProfesor">
                Administrador
              </label>
            </div>
            {errors.RolUser && (
              <div className="text-danger mt-2">
                {errors.RolUser}
              </div>
            )}
          </div>

          {/* Mostrar errores de email y password si existen */}
          {errors.email && (
            <div className="alert alert-danger" role="alert">
              {errors.email}
            </div>
          )}
          
          {errors.password && (
            <div className="alert alert-danger" role="alert">
              {errors.password}
            </div>
          )}

          <div className="info-alert my-4">
            {registroIntentado && !Object.keys(errors).length && (
              <div
                className={`alert ${
                  UsuarioRegistrado ? 'alert-success' : 'alert-danger'
                }`}
                role="alert"
              >
                {UsuarioRegistrado
                  ? 'Te has registrado correctamente'
                  : 'Ha ocurrido un error en el registro del usuario'}
              </div>
            )}
          </div>

          {/* Indicador de carga */}
          {isSubmitting && (
            <div className="d-flex justify-content-center mb-3">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Registrando...</span>
              </div>
            </div>
          )}
        </>
      }
      width="100%"
      maxWidth="750px"
      height="300%"
      minHeight="140vh"
      emailLabel="Correo *"
      passwordLabel="Crea una Contraseña *"
      buttonText={isSubmitting ? "Registrando..." : "Registrarse"}
      linkText="¿Ya tienes una cuenta?"
      linkTo="/inicio-sesion"
      buttonFunction={redirect}
      onSubmit={handleRegister}
    />
  );
}

export default Register;