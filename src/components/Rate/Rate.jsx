import React from "react";
import FullStar from "../../assets/full_star.png";
import EmptyStar from "../../assets/empty_star.png";

function Rate({ infos }) {
  const scaleRating = infos.rating;
  const rating = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= scaleRating) {
      rating[i] = true;
    } else {
      rating[i] = false;
    }
  }
  return (
    <div className="rating">
      {rating.map((stars, index) => (
        <img
          className="rating_star"
          key={stars + infos.id + index}
          src={stars ? FullStar : EmptyStar}
          alt={stars ? "étoile pleine" : "étoile vide"}
        />
      ))}
    </div>
  );
}

export default Rate;
