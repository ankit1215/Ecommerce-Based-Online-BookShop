import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../styles/Checkout.css';

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      toast.error('Your cart is empty!');
      return;
    }

    toast.success('🎉 Order placed successfully!');
    clearCart();
    navigate('/order-success'); // Navigate to Order Success Page
  };

  return (
    <div className="checkout-wrapper">
      <h2>Checkout</h2>

      <div className="checkout-steps">
        <span className="active-step">1 Shipping</span>
        <span className="arrow">→</span>
        <span>2 Payment</span>
        <span className="arrow">→</span>
        <span>3 Finish</span>
      </div>

      <div className="checkout-grid">
        {/* Left: Shipping Info */}
        <div className="checkout-left">
          <h3>Shipping</h3>
          <form className="shipping-form">
            <div className="form-row">
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Phone Number" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="City" />
              <input type="text" placeholder="District" />
            </div>
            <input type="text" placeholder="Street Address" className="full-width" />
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="checkout-right">
          <h3>Order Summary</h3>

          {cartItems.map((item) => (
            <div key={item.id} className="summary-item">
              <img src={item.image} alt={item.title} />
              <div className="summary-details">
                <p className="title">{item.title}</p>
                <p className="info">Color: Black | Size: XS</p>
                <p className="price">₹{item.price}</p>
              </div>
              <div className="quantity-box">
                <button>-</button>
                <span>{item.quantity}</span>
                <button>+</button>
              </div>
            </div>
          ))}

          <div className="discount-row">
            <input type="text" placeholder="Enter promo code" />
            <button className="apply-btn">Apply</button>
          </div>

          <div className="totals">
            <p>Subtotal: ₹{totalAmount}</p>
            <p>Delivery Charge: ₹10</p>
            <h4>Total: ₹{totalAmount + 10}</h4>
          </div>

          <button onClick={handlePlaceOrder} className="place-order-btn">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}