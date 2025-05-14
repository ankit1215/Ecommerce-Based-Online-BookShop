import React from 'react';
import '../styles/Modal.css';

const QuickViewModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>×</span>
        <h2>{item.title}</h2>
        <p>Author: {item.author}</p>
        <p>Price: ₹{item.price}</p>
        <img src={item.image} alt={item.title} style={{ maxWidth: '100%' }} />
        <p>Description coming soon...</p>
      </div>
    </div>
  );
};

export default QuickViewModal;
