// CartContext.js
import React, { createContext, useEffect, useState } from "react";

// Create CartContext
export const CartContext = createContext();

// Custom hook to use CartContext


// CartProvider component to provide cart state
 const CartProvider = ({ children }) => {
  // State to hold cart items
  const [cart, setCart] = useState(() => {
    // Get cart from localStorage if available
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Update localStorage when cart changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cart]);

  // Add item to the cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, item];
      return updatedCart;
    });
  };

  // Remove item from the cart
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
  };

  // Cart context value to share with children
  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>);
};

export default CartProvider