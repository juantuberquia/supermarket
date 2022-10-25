import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="container-search">
      <input
        type="text"
        placeholder="¿Qué deseas buscar?"
        className="search-bar"
      />
    </div>
  );
};

export default SearchBar;
