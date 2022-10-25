import React from "react";
import "./Categorys.css";

const Category = ({ nameCategory }) => {
  return (
    <li className="nav-item">
      <a className="nav-link " aria-current="page" href="/#">
        {nameCategory}
      </a>
    </li>
  );
};

export default Category;
