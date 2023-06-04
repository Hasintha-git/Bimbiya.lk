import React from 'react';
import Header from '../../components/header';
import MainCategory from '@/app/components/mainCategory';
import AddBanner from '@/app/components/addBanner';
import TrendingBite from '@/app/components/trendingBite';
import TrendingFoodcity from '@/app/components/trendingFoodcity';
import Footer from '@/app/components/footer';

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="bg-mn">
        <img className="bg-img" src="main.jpg" alt="your-image-description" />
      </div>
      <MainCategory />
      <AddBanner />
      <TrendingBite />
      <TrendingFoodcity />
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
