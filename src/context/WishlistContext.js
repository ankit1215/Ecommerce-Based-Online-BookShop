import React, { createContext, useContext, useState } from 'react';

// Create Wishlist Context
const WishlistContext = createContext();

// WishlistProvider Component
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (book) => {
    setWishlist((prev) => [...prev, book]);
  };

  const removeFromWishlist = (bookId) => {
    setWishlist((prev) => prev.filter((book) => book.id !== bookId));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom Hook to use Wishlist Context
export const useWishlist = () => {
  return useContext(WishlistContext);
};
