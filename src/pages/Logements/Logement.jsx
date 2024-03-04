import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Logements from "../../logements.json";
import Collapse from "../../components/Collapse/Collapse";
import NameAndLocation from "../../components/NameAndLocation/NameAndLocation";
import Tags from "../../components/Tags/Tags";
import Host from "../../components/Host/Host";
import Rate from "../../components/Rate/Rate";
import Slideshow from "../../components/Slideshow/Slideshow";

function Logement() {
  let { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    let logement = Logements.find((logement) => id === logement.id);
    if (!logement) {
      navigate("/*");
    }
  });
  return (
    <div>
      {Logements.filter((logement) => logement.id === id).map((logement) => (
        <div key={logement.id} className="location">
          <Slideshow key={logement.id} slides={logement.pictures} />
          <div className="infos_logement">
            <NameAndLocation
              title={logement.title}
              location={logement.location}
            />
            <Host owner={logement} />
            <Tags infosTag={logement} />
            <Rate infos={logement} />
          </div>
          <div className="collapseLogement">
            <Collapse
              key={logement.description}
              title="Description"
              content={logement.description}
            />
            <Collapse
              key={`logement.equipments`}
              title="Equipements"
              content={logement.equipments.map((equipments) => (
                <div key={equipments + logement.id}>{equipments}</div>
              ))}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Logement;
