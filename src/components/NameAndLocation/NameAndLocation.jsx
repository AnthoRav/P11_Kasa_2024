import React from "react";

function NameAndLocation({ title, location }) {
  return (
    <div className="infos">
      <h3 className="infos_title">{title}</h3>
      <span className="infos_location">{location}</span>
    </div>
  );
}

export default NameAndLocation;
