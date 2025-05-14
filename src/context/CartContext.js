import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems((prevItems) => {
      const exists = prevItems.find((item) => item.id === book.id);
      if (exists) {
        return prevItems.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...book, quantity: 1 }];
    });
  };

  const removeFromCart = (bookId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== bookId));
  };

  const incrementQuantity = (bookId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === bookId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (bookId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === bookId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
