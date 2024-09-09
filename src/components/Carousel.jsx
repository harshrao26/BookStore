import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: 'Slide 1',
    description: 'This is the first slide',
    img: 'https://via.placeholder.com/800x400?text=Slide+1',
  },
  {
    id: 2,
    title: 'Slide 2',
    description: 'This is the second slide',
    img: 'https://via.placeholder.com/800x400?text=Slide+2',
  },
  {
    id: 3,
    title: 'Slide 3',
    description: 'This is the third slide',
    img: 'https://via.placeholder.com/800x400?text=Slide+3',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
          /> */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold">
              {slide.title}
            </h2>
            <p className="text-white mt-2">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Previous & Next buttons */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2"
        onClick={() =>
          setCurrentIndex(
            currentIndex === 0 ? slides.length - 1 : currentIndex - 1
          )
        }
      >
        &#10094;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2"
        onClick={() =>
          setCurrentIndex(
            currentIndex === slides.length - 1 ? 0 : currentIndex + 1
          )
        }
      >
        &#10095;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
