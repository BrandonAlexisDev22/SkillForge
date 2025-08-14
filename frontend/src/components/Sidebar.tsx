import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export const Sidebar: React.FC = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="bg-primary col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column">
            <div>
              <ul className="nav nav-pills flex-column">
                <a
                  href="#"
                  className="text-decoration-none text-white d-flex align-items-center ms-3 mt-2"
                >
                  <span className="ms-1 fs-4">SkillForge</span>
                </a>
                <hr />
                <li className="nav-item my-1">
                  <a href="#" className="nav-link text-white fs-4">
                    <i className="fs-4 bi bi-person-fill"></i>
                    <span className="ms-1 fs-4">Mi perfil</span>
                  </a>
                </li>
                <li className="nav-item my-1">
                  <a
                    href="#"
                    className="nav-link text-white fs-4"
                    aria-current="page"
                  >
                    <i className="fs-4 bi bi-sign-turn-right-fill"></i>
                    <span className="ms-1 fs-4">Mis Rutas</span>
                  </a>
                </li>
                <li className="nav-item my-1">
                  <a href="#" className="nav-link text-white fs-4">
                    <i className="fs-4 bi bi-hourglass-bottom"></i>
                    Pendiente
                    {/* Pendiente... SECCION PENDIENTE */}
                  </a>
                </li>
                <li className="nav-item my-1">
                  <a href="#" className="nav-link text-white fs-4">
                    <i className="fs-4 bi bi-hourglass-bottom"></i>
                    Pendiente
                    {/* Pendiente... SECCION PENDIENTE */}
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown open mb-4">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="triggerId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bi bi-person-circle"></i> <span className="ms-2">Usuario</span>
              </button>
              <div className="dropdown-menu" aria-labelledby="triggerId">
                <button className="dropdown-item">Perfil</button>
                <button className="dropdown-item disabled">
                  Ajustes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
