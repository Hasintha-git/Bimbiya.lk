import AddBanner from '@/app/components/addBanner'
import FoodcityCategory from '@/app/components/foodcityCategory'
import Footer from '@/app/components/footer'
import Header from '@/app/components/header'
import TrendingFoodcity from '@/app/components/trendingFoodcity'
import React from 'react'

export default function foodcity() {
  return (
    <div  className="bg-gray-100">
    <Header />
    <div className='header-space'></div>
    <AddBanner />
    <FoodcityCategory/>
    <TrendingFoodcity />
    <Footer />
    <style jsx>{`
    .header-space {
      height:12vh;
      width:100%;
    }
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
      .bg-header {
        height: 15vh;
      }
    `}</style>
  </div>
  )
}
