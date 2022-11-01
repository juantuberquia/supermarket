import React from "react";
import "./SearchBar.css";
import { useState } from "react";

const SearchBar = () => {
  const [dataSearch, setDataSearch] = useState("");

  // validar texto ingresado
  const validate = (e) => {
    let searchText = e.target.value;

    if (searchText.trim() === "") {
      alert("ingresar busqueda deseada");
    }
  };

  return (
    <div className="container-search">
      <input
        type="search"
        placeholder="¿Qué deseas buscar?"
        className="search-bar"
        onChange={validate}
      />
    </div>
  );
};

export default SearchBar;
