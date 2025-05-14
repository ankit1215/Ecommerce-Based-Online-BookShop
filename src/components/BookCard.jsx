import React, { useState, useEffect } from 'react';
import '../styles/BookCard.css';
import { FaShoppingCart, FaStar, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useWishlist } from '../context/WishlistContext';

export default function BookCard({ book, addToCartHandler }) {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    // Check if the book is already in the wishlist when the component mounts
    setIsWishlisted(wishlist.some((b) => b.id === book.id));
  }, [wishlist, book.id]);

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(book.id);
    } else {
      addToWishlist(book);
    }
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="book-card">
      <div className="book-image-container">
        {book.isOnSale && <div className="badge">-{book.discount || 10}% OFF</div>}

        <img src={book.image} alt={book.title} className="book-image" />

        <button className="wishlist-btn" onClick={toggleWishlist}>
          {isWishlisted ? <FaHeart color="red" /> : <FaRegHeart />}
        </button>
      </div>

      <div className="book-details">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">by {book.author}</p>

        <div className="book-rating">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="star-icon" />
          ))}
        </div>

        <p className="book-price">
          ₹{book.price}{' '}
          {book.originalPrice && (
            <span className="original-price">₹{book.originalPrice}</span>
          )}
        </p>

        <button className="buy-button" onClick={() => addToCartHandler(book)}>
          <FaShoppingCart /> Add to Cart
        </button>
      </div>
    </div>
  );
}
