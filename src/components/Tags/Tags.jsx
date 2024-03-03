import React from "react";

function Tags({ logement }) {
  return (
    <div className="tags_section">
      {logement.tags.map((tag) => (
        <div className="tags_section-tag" key={tag + logement.id}>
          {tag}
        </div>
      ))}
    </div>
  );
}

export default Tags;
