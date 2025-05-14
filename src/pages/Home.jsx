import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // Make sure this file exists
import BookList from "./BookList";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to BookVerse</h1>
        <p>Explore a universe of stories, knowledge, and imagination.</p>
        <Link to="/books" className="cta-button">Browse Books</Link>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Explore Categories</h2>
        <div className="category-list">
          <div className="category-card">📖 Fiction</div>
          <div className="category-card">📘 Non-Fiction</div>
          <div className="category-card">🎓 Academic</div>
          <div className="category-card">🧠 Self-Help</div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="best-sellers">
        <h2>Best Sellers</h2>
        <BookList limit={4} /> {/* Replace with filtered list if needed */}
      </section>

      {/* Call to Action */}
      <section className="join-now">
        <h2>Join Our Reader’s Community</h2>
        <p>Sign up to track orders, wishlist books, and leave reviews.</p>
        <Link to="/register" className="cta-button">Join Now</Link>
      </section>
    </div>
  );
};

export default Home;
