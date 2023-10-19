import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Banner1 from '../image/1.jpeg';
import Banner2 from '../image/2.jpg';
import Banner3 from '../image/3.jpg';
import Banner4 from '../image/4.jpg';

const images = [
  { src: Banner1, title: 'Category Title 1', description: 'Category Description 1' },
  { src: Banner2, title: 'Category Title 2', description: 'Category Description 2' },
  { src: Banner3, title: 'Category Title 3', description: 'Category Description 3' },
  { src: Banner4, title: 'Category Title 4', description: 'Category Description 4' },
];

const TrendingBite = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };
  const [isAnimated, setIsAnimated] = useState(false);

  const handleAnimation = () => {
    setIsAnimated(true);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="main-container p-4">
     <div
  className={`title-wrapper mb-6 rounded-lg p-2 relative overflow-hidden ${
    isAnimated ? 'animated' : ''
  }`}
  onClick={handleAnimation}
>
  <div className="animated-bg absolute top-0 left-0 h-full w-2 bg-white"></div>
  <h2 className="text-2xl font-bold text-black sm:text-2xl text-left">
    Trending Bite
  </h2>
</div>
      <div style={{ overflow: 'hidden' }}>
        <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full md:w-1/2 px-2 relative ${
              index === hoveredIndex ? 'hovered-slide' : ''
            }`}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(-1)}
          >
            <div className="h-64 bg-cover bg-center rounded-lg shadow-lg overflow-hidden">
              <img
                src={image.src.src}
                alt="Category"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
          <div
                className={`overlay rounded-lg absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 text-white p-4 ${
                  index === hoveredIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <h2 className="text-lg font-bold mb-2">{image.title}</h2>
                <p className="text-sm">{image.description}</p>
              </div>

              </div>
            </div>
          ))}
        </Slider>
        <style jsx>{`
        .overlay {
          transition: opacity 0.3s;
        }

        .hovered-slide .overlay {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .w-full {
            width: 100%;
          }
        }
      `}</style>
      </div>
    </div>
  );
};

export default TrendingBite;
