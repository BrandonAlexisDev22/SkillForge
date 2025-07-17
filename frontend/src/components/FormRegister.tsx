import { useState } from 'react';
import AuthForm from './authForm';

function Register() {
    const [nameUser, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [RolUser, setRol] = useState('');
    const [surnameUser, setSurname] = useState('')

    const handleRegister = (data: { email: string; password: string }) => {
        console.log('Registrar usuario con:', {
            ...data,
            name: nameUser,
            confirmPassword,
        });
    };

    return (
        <AuthForm
            title="Crear Cuenta"
            extraFields={
                <>
                    <div className="mb-3 fs-5">
                        <label htmlFor="name" className="form-label p-2">
                            Nombre
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Jhon Doe"
                            value={nameUser}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-3 fs-5">
                        <label htmlFor="surname" className="form-label p-2">
                            Apellido
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="surname"
                            placeholder="Doe"
                            value={surnameUser}
                            onChange={(e) => setSurname(e.target.value)}
                        />
                    </div>

                    <div className="mb-3 fs-5">
                        <label htmlFor="confirmPassword" className="form-label p-2">
                            Confirmar Contraseña
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <div className="mb-3 fs-5">
                        <label className="form-label p-2">Rol de usuario</label>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="rol"
                                id="radioAlumno"
                                value="alumno"
                                checked={RolUser === 'alumno'}
                                onChange={(e) => setRol(e.target.value)}
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
                                value="profesor"
                                checked={RolUser === 'profesor'}
                                onChange={(e) => setRol(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="radioProfesor">
                                Administrador
                            </label>
                        </div>
                    </div>
                </>
            }
            width='100%'
            maxWidth='750px'
            height='1050px'
            minHeight='140vh'
            emailLabel="Correo"
            passwordLabel="Crea una Contraseña"
            buttonText="Registrarse"
            linkText="¿Ya tienes una cuenta?"
            linkTo="/inicio-sesion"
            onSubmit={handleRegister}
        />
    );
}

export default Register;
