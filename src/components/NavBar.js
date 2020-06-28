import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
            alt="logo"
          />
        </a>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start"></div>

        <div className="navbar-end">
          <a className="navbar-item">Incio de Sesion/Registrarse</a>

          <a className="navbar-item">Comprar</a>
          <a className="navbar-item">Pedidos</a>

          {/* <div className="navbar-item has-dropdown is-hoverable">
            <a classNameName="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Jobs</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div> */}
          <a className="navbar-item">Carrito de Compras</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
