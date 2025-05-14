// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useCart } from '../context/CartContext';

// const dummyBooks = [/* same as before */];

// export default function BookDetail() {
//   const { id } = useParams();
//   const { addToCart } = useCart();

//   const book = dummyBooks.find((b) => b.id === parseInt(id));
//   if (!book) return <h2>Book not found</h2>;

//   return (
//     <div style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>
//       <img src={book.image} alt={book.title} style={{ width: '300px' }} />
//       <div>
//         <h2>{book.title}</h2>
//         <p><strong>Author:</strong> {book.author}</p>
//         <p><strong>Price:</strong> ₹{book.price}</p>
//         <p>{book.description}</p>
//         <button onClick={() => addToCart(book)} style={{ padding: '0.5rem 1rem' }}>
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }
