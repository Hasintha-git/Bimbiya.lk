import React, { useState } from 'react';
import { FOODCITY_ENABLE } from '../../utils/EndPoint';

const MainCategory = () => {

  const [isAnimated, setIsAnimated] = useState(false);

  const handleAnimation = () => {
    setIsAnimated(true);
  };

  return (
    <div className="main-container p-4">

      <div
        className={`title-wrapper mb-6 rounded-lg p-4 relative overflow-hidden ${isAnimated ? 'animated' : ''
          }`}
        onClick={handleAnimation}
      >
        <div className="animated-bg absolute top-0 left-0 h-full w-2 "></div>
        <h2 className="text-2xl font-bold text-black sm:text-2xl text-left">
          Shop with bimbiya
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-between -mx-2 ">
        <div className="w-full md:w-full px-2 relative">
          <div className="h-64 bg-cover bg-center rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://u-static.fotor.com/images/text-to-image/result/PRO-691905ca1e474e08b7744c8e515a5afe.jpg"
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

            .h-64:hover .overlay {
              opacity: 1;
            }

            @media (max-width: 768px) {
              .w-full {
                width: 100%;
              }
            }
          `}</style>
        </div>

        {FOODCITY_ENABLE && (
          <div className="w-full md:w-full px-2 relative mt-4 md:mt-0">
            <div className="h-64 bg-cover bg-center rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://u-static.fotor.com/images/text-to-image/result/PRO-36f8ebf79cb744128bf6aa1fa114cd47.jpg"
                alt="Category"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="overlay absolute rounded-lg inset-0 flex flex-col justify-end bg-black bg-opacity-50 text-white p-4 opacity-0 transition-opacity duration-300">
                <h2 className="text-lg font-bold mb-2">Category Title</h2>
                <p className="text-sm">Category Description</p>
              </div>
            </div>
            <style jsx>{`
      .overlay {
        transition: opacity 0.3s;
      }

      .h-64:hover .overlay {
        opacity: 1;
      }

      @media (max-width: 768px) {
        .w-full {
          width: 100%;
        }
        .mt-4 {
          margin-top: 1rem;
        }
      }
    `}</style>
          </div>
        )}

      </div>
    </div>
  );
};

export default MainCategory;
