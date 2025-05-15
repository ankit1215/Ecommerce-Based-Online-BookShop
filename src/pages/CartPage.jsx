import React from 'react';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import '../styles/CartPage.css';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; // 🧠 Add this line

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    totalAmount,
  } = useCart();

  const navigate = useNavigate(); // 🧠 Initialize navigation

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-info">
                <h4>{item.title}</h4>
                <p>₹{item.price}</p>

                <div className="quantity-control">
                  <button onClick={() => decrementQuantity(item.id)}>
                    <FaMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementQuantity(item.id)}>
                    <FaPlus />
                  </button>
                </div>

                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  <FaTrash /> Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Total: ₹{totalAmount}</h3>
            <button
              className="checkout-btn"
              onClick={() => navigate('/checkout')} // ✅ Navigate to Checkout
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
