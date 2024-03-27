// @ts-nocheck
import React from "react";
import { useParams } from "react-router-dom";
import Logements from "../../logements.json";
import Collapse from "../../components/Collapse/Collapse";
import NameAndLocation from "../../components/NameAndLocation/NameAndLocation";
import Tags from "../../components/Tags/Tags";
import Host from "../../components/Host/Host";
import Rate from "../../components/Rate/Rate";
import Slideshow from "../../components/Slideshow/Slideshow";
import Error from "../Error/Error";

function Logement() {
  let { id } = useParams();
  // Trouver directement le logement en utilisant l'ID des paramètres de l'URL.
  const logement = Logements.find((logement) => id === logement.id) || {};

  // Retourner le composant Error si aucun logement n'est trouvé
  if (Object.keys(logement).length === 0) {
    return <Error />;
  }

  return (
    <div>
      <div className="location">
        <Slideshow slides={logement.pictures} />
        <div className="infos_logement">
          <div className="infos_logement-left">
            <NameAndLocation
              title={logement.title}
              location={logement.location}
            />
            <Tags infosTag={logement} />
          </div>
          <div className="infos_logement-right">
            <Host owner={logement} />
            <Rate infos={logement} />
          </div>
        </div>
        <div className="collapseLogement">
          <Collapse title="Description" content={logement.description} />
          <Collapse
            title="Equipements"
            content={logement.equipments.map((equipment) => (
              <div key={equipment}>{equipment}</div>
            ))}
          />
        </div>
      </div>
    </div>
  );
}

export default Logement;
