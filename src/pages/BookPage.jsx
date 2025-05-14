// BookPage.jsx
import React, { useState } from 'react';
import SidebarFilters from '../components/SidebarFilters';
import BookList from './BookList';
import '../styles/BookPage.css';
import img1 from '../assets/images/img1.jpg';

// Sample book data
const sampleBooks = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 299, image: img1 },
  { id: 2, title: 'Atomic Habits', author: 'James Clear', price: 399, image: img1 },
  { id: 3, title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', price: 349, image: img1 },
  { id: 4, title: 'Wings of Fire', author: 'A.P.J. Abdul Kalam', price: 199, image: img1 },
  { id: 5, title: 'Think and Grow Rich', author: 'Napoleon Hill', price: 259, image: img1 },
  { id: 6, title: 'Ikigai', author: 'Héctor García', price: 319, image: img1 },
  { id: 7, title: '1984', author: 'George Orwell', price: 199, image: img1 },
  { id: 8, title: 'The Alchemist', author: 'Paulo Coelho', price: 299, image: img1 },
];

const BookPage = () => {
  const [filters, setFilters] = useState({ author: '', maxPrice: 500 });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredBooks = sampleBooks.filter(book => {
    return (
      (filters.author === '' || book.author === filters.author) &&
      book.price <= filters.maxPrice
    );
  });

  return (
    <div className="book-page">
      <SidebarFilters onFilterChange={handleFilterChange} />
      <div className="book-content">
        <BookList books={filteredBooks} />
      </div>
    </div>
  );
};

export default BookPage;
