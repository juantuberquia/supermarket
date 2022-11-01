import React from "react";
import { Link } from "react-router-dom";

const CardWidget = () => {
  return (
    <div>
      <Link to="/#">
        <img
          src="/assets/icon-supermarket.svg"
          alt="icon-market"
          className="icon-brand"
        />
      </Link>
    </div>
  );
};

export default CardWidget;
