import React from "react";
import "./Categorys.css";
import { Link } from "react-router-dom";

const Category = ({ nameCategory }) => {
  let categoryWithOutEmpty = nameCategory.replace(" ", "-").toLowerCase();
  return (
    <li className="nav-item">
      <Link
        className="nav-link "
        aria-current="page"
        to={`/category/${categoryWithOutEmpty}`}
      >
        {nameCategory}
      </Link>
    </li>
  );
};

export default Category;
