import React from "react";
import { useState } from "react";
import leftArrow from "../../assets/left_arrow.png";
import rightArrow from "../../assets/right_arrow.png";

function Slideshow({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="sliderContainer">
      <div className="slider">
        <img
          key={slides.id}
          src={slides[currentIndex]}
          alt={slides.title}
          className="slider_image"
        />
      </div>
      <img
        src={slides.length === 1 ? "" : leftArrow}
        alt={slides.length === 1 ? "" : "flèche gauche"}
        className="slider_leftArrow"
        onClick={goToPrevious}
      />
      <div className="slider_number">
        {currentIndex + 1}/{slides.length}
      </div>
      <img
        src={slides.length === 1 ? null : rightArrow}
        alt={slides.length === 1 ? null : "flèche droite"}
        className="slider_rightArrow"
        onClick={goToNext}
      />
    </div>
  );
}

export default Slideshow;
