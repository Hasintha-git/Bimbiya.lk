import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const CardButtons = () => {
  const [qty, setQty] = useState(1);

//   const { increaseCartQuantity } = useCart();

  function minusQty() {
    if (qty == 1) {
      setQty(1);
    } else {
      setQty(qty - 1);
    }
  }

  // Add cart dta to the backend
  function addToCart(id:number, qty:number) {

  }

  return (
    <div className="flex flex-col">
      <div>
        <input
          type="button"
          value="-"
          className="border w-7 h-9 text-gray-900 text-xl cursor-pointer"
          onClick={minusQty}
        />
        <input
          type="number"
          value={qty}
          disabled
          className="border w-9 text-center h-9 text-gray-900 text-xl"
          min="0"
        />
        <input
          type="button"
          value="+"
          className="border w-7 h-9 text-gray-900 text-xl cursor-pointer"
          onClick={() => setQty(qty + 1)}
        />
      </div>

      <div className="pt-5">
        <button
          type="button"
          className="mr-5 flex-none rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
          onClick={() => addToCart(props.id,qty)}
        >
          Add To Cart
        </button>
        <button
          type="button"
          className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Buy now
        </button>
      </div>
    </div>
  );
};

export default CardButtons;
