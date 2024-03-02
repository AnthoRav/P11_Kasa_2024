import React from "react";
import Logements from "../../logements.json";
import Card from "../Card/Card";

function Gallery() {
  return (
    <div className="gallery">
      {Logements.map((logement) => (
        <Card id={logement.id} cover={logement.cover} title={logement.title} />
      ))}
    </div>
  );
}
export default Gallery;
