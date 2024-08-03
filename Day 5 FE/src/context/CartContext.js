import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      // Check if the item is already in the cart
      const itemIndex = prevCart.findIndex((i) => i.name === item.name);
      if (itemIndex > -1) {
        // Item already exists, don't add it again
        return prevCart;
      }
      // Item doesn't exist, add to cart
      return [...prevCart, item];
    });
  };

  const removeFromCart = (itemToRemove) => {
    setCart((prevCart) => prevCart.filter(item => item.name !== itemToRemove.name));
  };

  const getTotalValue = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalValue }}>
      {children}
    </CartContext.Provider>
  );
};
