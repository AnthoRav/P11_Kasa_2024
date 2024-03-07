import React from "react";
import FullStar from "../../assets/full_star.png";
import EmptyStar from "../../assets/empty_star.png";

function Rate({ infos }) {
  const scaleRating = infos.rating;
  const stars = [];

  for (let i = 0; i <= 5; i++) {
    let starSrc, starAlt;

    if (i <= scaleRating) {
      starSrc = FullStar;
      starAlt = "étoile pleine";
    } else {
      starSrc = EmptyStar;
      starAlt = "étoile vide";
    }

    stars.push(
      <img
        className="rating_star"
        key={infos.id + i}
        src={starSrc}
        alt={starAlt}
      />
    );
  }

  return <div className="rating">{stars}</div>;
}

export default Rate;
