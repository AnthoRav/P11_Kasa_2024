import React from "react";

function Host({ owner }) {
  return (
    <div className="host">
      <h4 className="host_name">{owner.host.name}</h4>
      <div className="host_picture">
        <img
          className="host_picture-radius"
          src={owner.host.picture}
          alt="Propriétaire du logement"
        />
      </div>
    </div>
  );
}

export default Host;
