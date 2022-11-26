import React from "react";
import "./notFound.css";

const NotFound = ({ name }) => {
  return (
    <div>
      <h1 className="alert alert-primary">{name} no existe</h1>
      <p> Dirigete al menu </p>
      <div className="containerImageNot">
        <img src="/assets/error-404.jpg" alt="not-found" />
      </div>
    </div>
  );
};

export default NotFound;
