import React from "react";
import Header from "./header";
import TrendingFoodcity from "./trendingFoodcity";
import Footer from "./footer";

import Banner1 from "@/app/image/1.jpg";
import CardButtons from "./cardButtons";

// Temp Object
const cardDetail ={
  mealName:"Meal 1",
  description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque,doloremque labore corrupti minus beatae temporibus deserunt nesciunt harum, repudiandae dicta quae, neque pariatur blanditiis totam exercitationem expedita? Quis, aliquam similique.",
  image:Banner1,
  price:"Rs. 500.00",
  ingredients:['meet','egg','soya']
}

const CardDetails = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="main h-[130vh] md:h-[90vh] pt-24 flex flex-col md:flex-row">
        <div className="pt-9 h-50 sm:h-80 md:h-[65vh] w-full md:w-3/5 flex justify-center items-center">
          <img
            src={cardDetail.image.src}
            alt=""
            className="w-10/12 h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full h-full md:w-2/5 flex justify-center">
          <div className="h-full md:h-[70vh] w-4/5 md:w-11/12 flex flex-col justify-evenly">
            <h1 className="text-3xl lg:text-4xl font-bold">{cardDetail.mealName}</h1>
            <h3 className=" text-gray-500">{cardDetail.description}</h3>

            <div className="flex text-gray-400">
              <h3 className="pr-2">Ingredients: </h3>
              {cardDetail.ingredients.map((ingre)=> (
                <h3 className="pr-2">{ingre},</h3>
              ))}
            </div>

            <h3 className="text-gray-900 font-semibold text-sm md:text-xl bg-gray-200 max-w-max p-2 rounded-md">{cardDetail.price}</h3>

            <CardButtons/> 
            
          </div>
        </div>
      </div>
      <TrendingFoodcity />
      <Footer />
    </div>
  );
};

export default CardDetails;
