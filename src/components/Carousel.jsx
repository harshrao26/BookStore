import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: 'The Haunting of Hill House',
    description: 'A psychological horror about a group of people investigating a haunted mansion, where the line between reality and the supernatural becomes blurred.',
    img: 'https://cdn.prod.website-files.com/63c5e29f1b5bc83fe0af2489/667d74b5e073485b32692b96_Rich%20Dad%20Poor%20Dad.webp',
  },
  {
    id: 2,
    title: 'The Exorcist',
    description: 'A chilling story about a girl possessed by a demon, and the priest who tries to save her.',
    img: 'https://images.unsplash.com/photo-1725663656850-7bc515816fcd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'Frankenstein',
    description: 'A tale of a scientist who creates life in the form of a monster, leading to horrifying consequences.',
    img: 'https://images.unsplash.com/photo-1725914774525-0e81a46583b6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-center">
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
