import React, { useState } from 'react';
import '../styles/SidebarFilters.css';

const SidebarFilters = ({ onFilterChange }) => {
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [maxPrice, setMaxPrice] = useState(500);

  const handleAuthorChange = (e) => {
    setSelectedAuthor(e.target.value);
    onFilterChange({ author: e.target.value, maxPrice });
  };

  const handlePriceChange = (e) => {
    setMaxPrice(e.target.value);
    onFilterChange({ author: selectedAuthor, maxPrice: e.target.value });
  };

  return (
    <div className="sidebar-filters">
      <h3>Filter Books</h3>

      <div className="filter-group">
        <label>Author</label>
        <select value={selectedAuthor} onChange={handleAuthorChange}>
          <option value="">All</option>
          <option value="James Clear">James Clear</option>
          <option value="Robert Kiyosaki">Robert Kiyosaki</option>
          <option value="F. Scott Fitzgerald">F. Scott Fitzgerald</option>
          <option value="George Orwell">George Orwell</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Max Price: ₹{maxPrice}</label>
        <input type="range" min="100" max="500" value={maxPrice} onChange={handlePriceChange} />
      </div>
    </div>
  );
};

export default SidebarFilters;
