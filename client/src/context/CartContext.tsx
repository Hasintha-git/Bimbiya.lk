"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useContext, useState } from "react";
import { createContext } from "react";

type CartProviderProps = {
  children: ReactNode;
};

type CartItem = {
    id:number
    quantity: number
}

type CartContext = {
    getItemQuantity: (id:number) => number
    increaseCartQuantity: (id:number,quantity:number) => void
    decreaseCartQuantity: (id:number) => void
    removeFromCart: (id:number) => void
    cartQuantity:number
    cartItems: CartItem[]
}

const cartContext = createContext({} as CartContext);

export function useCart() {
  return useContext(cartContext);
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   count of all cart items
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity, 0
  )

  function getItemQuantity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  function increaseCartQuantity(id: number, quantity:number){
    setCartItems(currentItems => {
        if(currentItems.find(item => item.id === id) == null){
            return [...currentItems, {id, quantity: quantity}]
        }else {
            return currentItems.map(item => {
                if(item.id === id){
                    return {...item, quantity:item.quantity + quantity}
                }else{
                    return item
                }
            })
        }
    })
  }

  function decreaseCartQuantity(id: number){
    setCartItems(currentItems => {
        if(currentItems.find(item => item.id === id)?.quantity === 1){
            return currentItems.filter(item => item.id !== id)
        }else {
            return currentItems.map(item => {
                if(item.id === id){
                    return {...item, quantity:item.quantity - 1}
                }else{
                    return item
                }
            })
        }
    })
  }

  function removeFromCart(id:number){
    setCartItems(currentItems => {
        return currentItems.filter(item => item.id !== id)
    })
  }

  return <cartContext.Provider value={{getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems, cartQuantity}}>{children}</cartContext.Provider>;
};
