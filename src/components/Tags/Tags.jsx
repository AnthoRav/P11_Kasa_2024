import React from "react";

function Tags({ infosTag }) {
  return (
    <div className="tags_section">
      {infosTag.tags.map((tag) => (
        <div className="tags_section-tag" key={tag + infosTag.id}>
          {tag}
        </div>
      ))}
    </div>
  );
}

export default Tags;
