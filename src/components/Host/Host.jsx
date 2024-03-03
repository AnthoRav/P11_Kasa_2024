import React from "react";

function Host({ logement }) {
  return (
    <div className="host">
      <h4 className="host_name">{logement.host.name}</h4>
      <div className="host_picture">
        <img
          className="host_picture-radius"
          src={logement.host.picture}
          alt="Propriétaire du logement"
        />
      </div>
    </div>
  );
}

export default Host;
