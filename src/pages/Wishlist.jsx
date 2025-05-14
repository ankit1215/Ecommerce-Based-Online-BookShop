import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import BookCard from '../components/BookCard';

export default function Wishlist() {
  const { wishlist } = useWishlist();

  return (
    <div className="wishlist-page">
      <h2>Your Wishlist</h2>
      {wishlist.length > 0 ? (
        <div className="wishlist-books">
          {wishlist.map((book) => (
            <BookCard key={book.id} book={book} addToCartHandler={() => { }} />
          ))}
        </div>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
}
