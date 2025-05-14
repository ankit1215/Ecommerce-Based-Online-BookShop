// BookList.jsx
import React, { useState } from 'react';
import BookCard from '../components/BookCard';
import QuickViewModal from '../components/QuickViewModal'; // ⬅️ Import
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';

import '../styles/BookList.css';

const sampleBooks = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 299,
    image: img1,
  },
  {
    id: 2,
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 399,
    image: img2,
  },
  {
    id: 3,
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    price: 349,
    image: img3,
  },
  {
    id: 4,
    title: 'Wings of Fire',
    author: 'A.P.J. Abdul Kalam',
    price: 199,
    image: img4,
  },
  {
    id: 5,
    title: 'Think and Grow Rich',
    author: 'Napoleon Hill',
    price: 259,
    image: img5,
  },
  {
    id: 6,
    title: 'Ikigai',
    author: 'Héctor García',
    price: 319,
    image: img1,
  },
  {
    id: 7,
    title: '1984',
    author: 'George Orwell',
    price: 199,
    image: img3,
  },
  {
    id: 8,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    price: 299,
    image: img4,
  },
];

export default function BookList({ limit }) {
  const booksToDisplay = limit ? sampleBooks.slice(0, limit) : sampleBooks;
  const [selectedBook, setSelectedBook] = useState(null); // ⬅️ Modal state

  const handleQuickView = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Books</h2>
      <div className="book-list">
        {booksToDisplay.map(book => (
          <BookCard key={book.id} book={book} onQuickView={handleQuickView} />

        ))}
      </div>

      {/* Quick View Modal */}
      {selectedBook && (
        <QuickViewModal book={selectedBook} onClose={handleCloseModal} />
      )}
    </div>
  );
}
