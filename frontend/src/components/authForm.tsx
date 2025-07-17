import { Link } from 'react-router-dom';
import React, { useState } from 'react';

type AuthFormProps = {
  title: string;
  extraFields?: React.ReactNode;
  width: string;
  maxWidth: string;
  height: string;
  minHeight: string;
  emailLabel: string;
  passwordLabel: string;
  buttonText: string;
  linkText: string;
  linkTo: string;
  onSubmit: (data: { email: string; password: string }) => void;
};

function AuthForm({
  title,
  extraFields,
  width,
  maxWidth,
  height,
  minHeight,
  emailLabel,
  passwordLabel,
  buttonText,
  linkText,
  linkTo,
  onSubmit,
}: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center gap-3 align-items-center flex-column"
      style={{ minHeight}}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-light p-4 rounded shadow d-flex flex-column gap-4"
        style={{width,maxWidth,height }}
      >
        <h2 className="text-center mb-4">{title}</h2>

        <div className="mb-3 fs-5">
          <label htmlFor="email" className="form-label p-2">
            {emailLabel}
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="nombre@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3 fs-5">
          <label htmlFor="password" className="form-label p-2">
            {passwordLabel}
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {extraFields}
        <button type="submit" className="btn btn-primary w-100 fs-5">
          {buttonText}
        </button>

        <p className="register text-end fs-5">
          {linkText} <Link to={linkTo}>Haz click aquí</Link>
        </p>
      </form>
    </div>
  );
}

export default AuthForm;
