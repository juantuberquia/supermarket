import React from "react";
import { Link } from "react-router-dom";

const CardWidget = () => {
  return (
    <div className="icon-logo-header">
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
