/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <div>
      <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <div className="container">
          <a href="#" className="navbar-brand">
            Minhas Finanças
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
              <NavBarItem href="#/home" label="Home" />
              <NavBarItem href="#/cadastro-usuarios" label="Úsuarios" />
              <NavBarItem href="#/" label="Lançamentos" />
              <NavBarItem href="#/login" label="Login" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
