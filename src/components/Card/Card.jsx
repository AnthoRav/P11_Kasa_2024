import React from "react";
import { Link } from "react-router-dom";

function Card({ id, cover, title }) {
  return (
    <Link to={`/logements/${id}`}>
      <div className="gallery_card">
        <img src={cover} alt={title} className="gallery_card--image" />
        <h3 className="gallery_card--titre">{title}</h3>
      </div>
    </Link>
  );
}
export default Card;
