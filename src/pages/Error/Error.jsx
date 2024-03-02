import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="container">
      <span className="container_titre">404</span>
      <p className="container_text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="container_link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}
export default Error;
