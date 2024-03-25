import React, { useState } from "react";
import Arrow from "../../assets/arrow-up.png";
import { useLocation } from "react-router-dom";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const collapseLocation = () => {
    if (location.pathname === "/about") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <div
        className={collapseLocation() ? "collapse_about" : "collapse_logement"}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <img
          src={Arrow}
          alt="flèche du haut"
          className={`chevron-up ${isOpen ? "open" : ""}`}
        />
      </div>
      <div className={`collapse_content ${isOpen ? "open" : ""}`}>
        {content}
      </div>
    </div>
  );
}

export default Collapse;
