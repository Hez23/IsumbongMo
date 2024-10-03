import React, { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "https://via.placeholder.com/800x400?text=Slide+1",
    "https://via.placeholder.com/800x400?text=Slide+2",
    "https://via.placeholder.com/800x400?text=Slide+3",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="relative w-full max-w-lg mx-auto overflow-hidden">
        {/* Carousel Inner */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="min-w-full" key={index}>
              <img src={slide} alt={`Slide ${index + 1}`} className="w-full" />
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white px-4 py-2 rounded-full"
        >
          Prev
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white px-4 py-2 rounded-full"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
