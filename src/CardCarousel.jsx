import React, { useState } from "react";

function CardCarousel({ cards }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? cards.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === cards.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel">
      <button className="carousel-arrow left" onClick={prevSlide}>
        ‹
      </button>

      <div className="carousel-track">
        {cards.map((card, index) => {
          let className = "carousel-card";

          if (index === activeIndex) {
            className += " active";
          } else if (
            index === (activeIndex - 1 + cards.length) % cards.length
          ) {
            className += " prev";
          } else if (index === (activeIndex + 1) % cards.length) {
            className += " next";
          } else {
            className += " hidden";
          }

          return (
            <article key={card.id} className={className}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          );
        })}
      </div>

      <button className="carousel-arrow right" onClick={nextSlide}>
        ›
      </button>

      <div className="carousel-dots">
        {cards.map((_, index) => (
          <button
            key={index}
            className={
              index === activeIndex
                ? "carousel-dot active"
                : "carousel-dot"
            }
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default CardCarousel;