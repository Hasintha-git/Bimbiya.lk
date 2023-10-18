import React from 'react';
import Header from '../../../components/header';
import MainCategory from '@/app/components/mainCategory';
import AddBanner from '@/app/components/addBanner';
import TrendingBite from '@/app/components/trendingBite';
import TrendingFoodcity from '@/app/components/trendingFoodcity';
import Footer from '@/app/components/footer';
import Link from 'next/link';
import { HiShoppingCart } from 'react-icons/hi';
import { FOODCITY_ENABLE } from '../../../../../utils/EndPoint';

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Header />
      
      {/* <Link href="/foodcity" >
                      <div className="flex items-center text-sm font-semibold leading-6 text-gray-900">
              <HiShoppingCart className="w-6 h-6 text-black outline-none mr-2" /> Bimbiya Foodcity
            </div>
            </Link> */}
      <div className="bg-mn">
        
        <img className="bg-img" src="main.jpg" alt="your-image-description" />
      </div>
      <MainCategory />
      <TrendingBite />
      <AddBanner />
      {FOODCITY_ENABLE && (
      <TrendingFoodcity />
      )}
      <Footer />
      <style jsx>{`
        .bg-mn {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      
      `}</style>
    </div>
  );
}
