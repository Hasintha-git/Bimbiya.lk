import Footer from '@/app/components/footer'
import Header from '@/app/components/header'
import BiteFilter from '@/app/components/biteFilter'
import React from 'react';
import BiteCard from '@/app/components/biteCard';

const Bite = () => {
  return (
    <div  className="bg-gray-100">
      <Header />
      {/* <div className='bg-header'></div> */}
      <BiteFilter />
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
        .bg-header {
          height: 15vh;
        }
      `}</style>
    </div>
  )
};

export default Bite;