import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.css';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext'; // Import WishlistProvider
import BookList from './pages/BookList'; // Import your book list page

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <AuthProvider>
          <WishlistProvider> {/* Wrap the App component with WishlistProvider */}
            <App />
          </WishlistProvider>
        </AuthProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
