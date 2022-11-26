import React from "react";
import "./NavBar.css";
import CategorysMenu from "./CategorysMenu/CategorysMenu";
import SearchBar from "./SearchBar/SearchBar";
import CardWidget from "../CardWidget/CardWidget";
import Cart from "./Cart/Cart";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div className="content-icon-button">
          <CardWidget />
          <SearchBar />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* envio props(nombres de categorias) para mapearlos dentro de ul */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <CategorysMenu
              carnes="Carnes"
              licores="Licores"
              verduras="verduras"
            />
          </ul>
        </div>
      </div>
      <Cart />
    </nav>
  );
};

export default NavBar;
