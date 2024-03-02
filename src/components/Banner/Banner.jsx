import React from "react";

function Banner({ src, alt, title }) {
  return (
    <div className="hero">
      <img className="hero_image" src={src} alt={alt} />
      <h1 className="hero_title">{title}</h1>
    </div>
  );
}
export default Banner;
