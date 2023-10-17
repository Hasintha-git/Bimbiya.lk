import React, { useState } from 'react';
// import { useRouter } from 'next/router';

import Banner1 from '@/app/image/1.jpg';
import Banner2 from '@/app/image/2.jpg';
import Banner3 from '@/app/image/3.jpg';
import Banner4 from '@/app/image/4.jpg';
import {
  ShoppingCartIcon, EyeIcon
} from '@heroicons/react/24/outline'

const images = [
  { src: Banner1, title: 'Category Title 1', price: 'RS: 300.00', description: 'test' },
  { src: Banner2, title: 'Category Title 2', price: 'RS: 300.00', description: 'test' },
  { src: Banner3, title: 'Category Title 3', price: 'RS: 700.00', description: 'test' },
  { src: Banner4, title: 'Category Title 4', price: 'RS: 300.00' , description: 'test'},
  { src: Banner2, title: 'Category Title 2', price: 'RS: 500.00', description: 'test' },
  { src: Banner3, title: 'Category Title 3', price: 'RS: 300.00', description: 'test' },
  { src: Banner4, title: 'Category Title 4', price: 'RS: 400.00', description: 'test dwdc edes s' },
];

const BiteCard = () => {
  // const router = useRouter(); // AK

  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(-1); // Initial value is -1, which means no index is hovered
  const imagesPerPage = 4;

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(images.length / imagesPerPage);

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  // AK Starts
  // const handleCardClick = (index) => {
    // router.push({
    //   pathname:'/cardDetails',
    //   query: {
    //     index: index,
    //     details: JSON.stringify(currentImages[index]),
    //   },
    // })
  // }
  // AK Ends

  return (
    <div>
       <div className="grid grid-cols-2 gap-4 cursor-pointer sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {currentImages.map((image, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(-1)}
            // onClick={() => handleCardClick(index)} // AK
          >
            <div className="h-64 bg-cover bg-center rounded-lg shadow-lg overflow-hidden">
              <img
                src={image.src.src}
                alt="Category"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div
                className="overlay rounded-lg absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 text-white p-4 "
              >
                <h2 className="text-lg font-bold mb-2">{image.price}</h2>
                <p className="text-sm">{image.title}</p>
                {hoveredIndex === index && <p className="text-sm">{image.description}</p>}
                <div className="absolute bottom-4 right-4">
                  <button className="rounded-full bg-black p-3 text-white">
                    <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button className="rounded-full bg-black p-3 text-white ml-2">
                    <EyeIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePaginationClick(index + 1)}
            className={`px-2 py-1 mx-1 rounded-md ${currentPage === index + 1
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-800'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <style jsx>{`
  @media (max-width: 640px) {
    .sm\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }`}
</style>

    </div>
    
  );
  
};

export default BiteCard;
