import React from 'react';
import Banner from '../image/sub_banner.jpg';

const AddBanner = () => {
  return (
    <div className="main-container p-4">
      <div className="flex justify-between -mx-2">
        <div className="w-full px-2 relative">
          <div className="h-200 bg-cover bg-center rounded-lg shadow-lg overflow-hidden">
            <img
              src={Banner.src}
              alt="Category"
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            <div className="overlay rounded-lg absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 text-white p-4 opacity-0 transition-opacity duration-300">
              <h2 className="text-lg font-bold mb-2">Category Title</h2>
              <p className="text-sm">Category Description</p>
            </div>
          </div>
          <style jsx>{`
            .overlay {
              transition: opacity 0.3s;
            }
  
            .h-200 {
              height: 200px;
            }
  
            .h-200:hover .overlay {
              opacity: 1;
            }

            @media (max-width: 768px) {
              .main-container {
                padding: 2rem;
              }

              .h-200 {
                height: 150px;
              }

              .text-lg {
                font-size: 1.5rem;
              }

              .text-sm {
                font-size: 0.8rem;
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default AddBanner;
