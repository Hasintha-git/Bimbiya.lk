import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Banner1 from '@/app/image/cat1.jpg';
import Banner2 from '@/app/image/cat2.jpg';
import Banner3 from '@/app/image/cat3.jpg';
import Banner4 from '@/app/image/cat4.png';
import Banner5 from '@/app/image/cat5.jpg';

const images = [
  { src: Banner1, title: 'Category Title 1', description: 'Category Description 1' },
  { src: Banner2, title: 'Category Title 2', description: 'Category Description 2' },
  { src: Banner3, title: 'Category Title 3', description: 'Category Description 3' },
  { src: Banner5, title: 'Category Title 4', description: 'Category Description 4' },
  { src: Banner4, title: 'Category Title 4', description: 'Category Description 4' },
];

const FoodcityCategory = () => {
  const callouts = [
    // ... Your callout data remains unchanged ...
  ];

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
    slidesToShow: 3,
    slidesToScroll: 1, // Set this to 1 to scroll one item at a time
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
    <>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Slider {...settings}>
            {/* Your slide items */}
            {images.map((image, index) => (
              <div key={index}>
                <img src={image.src.src} alt={image.title} />
                <h2>{image.title}</h2>
                <p>{image.description}</p>
              </div>
            ))}
          </Slider>

          {/* Your callouts */}
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout, index) => (
              <div key={index} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img src={callout.imageSrc} alt={callout.imageAlt} className="h-full w-full object-cover object-center" />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodcityCategory;
