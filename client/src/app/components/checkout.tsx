import React from "react";
import Header from "./header";
import Banner1 from "@/app/image/1.jpg";
import Banner2 from "@/app/image/2.jpg";
import Banner3 from "@/app/image/3.jpg";
import Banner4 from "@/app/image/4.jpg";

const cartItems = [
  { mealName: "Meal 1", image: Banner1, price: 500, qyy: 1 },
  { mealName: "Meal 2", image: Banner2, price: 1000, qty: 2 },
  { mealName: "Meal 3", image: Banner3, price: 700, qty: 5 },
  { mealName: "Meal 4", image: Banner4, price: 350, qty: 10 },
];

const Checkout = () => {
  return (
    <div className='"bg-gray-100"'>
      <Header />
      <div className="h-screen bg-gray-50 flex justify-center">
        <main className=" pt-20 flex gap-4 lg:gap-8">
          <div className="flex flex-col gap-6">
            <div className="divs rounded h-[26vh] w-[47vw]">
              <div className="p-3">
                <h1 className="font-bold tracking-wider text-xl text-gray-500">
                  DELIVERY ADDRESS
                </h1>
                <div className="pt-4 flex justify-between w-3/4">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-gray-800 font-semibold">78/2,</h2>
                    <h2 className="text-gray-600 font-semibold">Udumulla,</h2>
                    <h2 className="text-gray-600 font-semibold">
                      Makalandawa,
                    </h2>
                    <h2 className="text-gray-600 font-semibold">
                      Walallawita.
                    </h2>
                  </div>
                  <button
                    type="button"
                    className="h-10 flex-none rounded-md bg-cyan-600 px-7 py-0 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
            <div className="divs rounded h-[57vh] w-[47vw] overflow-auto">
              <div className="p-3 ">
                <div className="flex flex-col gap-5">
                  {cartItems.map((item) => (
                    <div className="border h-40 rounded-md drop-shadow-md p-3">
                      <div className="flex justify-between">
                        <div className="w-48">
                          <img
                            src={item.image.src}
                            alt=""
                            className="h-full w-full object-cover rounded-md shadow-xl"
                          />
                        </div>
                        <div>
                          <h1>{item.mealName}</h1>
                          <h1>{item.price}</h1>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="divs rounded h-[50vh] w-[48vw]">
              <div className="p-3">
                <h1 className="font-bold tracking-wider text-xl text-gray-500">
                  SUMMARY
                </h1>
              </div>
            </div>
            <div className="divs rounded h-[30vh] w-[48vw]"></div>
          </div>
          <style jsx>{`
            .divs {
              background-color: #f0f0f0;
              padding: 10px;
            }
          `}</style>
        </main>
      </div>
    </div>
  );
};

export default Checkout;
