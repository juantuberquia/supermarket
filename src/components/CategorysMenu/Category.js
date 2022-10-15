import React from "react";

const Category = ({ nameCategory }) => {
  console.log(nameCategory);
  return (
    <li className="nav-item">
      <a className="nav-link " aria-current="page" href="/#">
        {nameCategory}
      </a>
    </li>
  );
};

export default Category;
