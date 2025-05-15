import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/OrderSuccess.css';

export default function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="order-success-wrapper">
      <div className="success-card">
        <div className="checkmark-circle">
          <span>✓</span>
        </div>
        <h2>Order Placed Successfully!</h2>
        <p>Thank you for your purchase. Your order has been confirmed and will be processed soon.</p>

        <div className="actions">
          <button onClick={() => navigate('/')} className="btn home-btn">Go to Home</button>
          <button onClick={() => navigate('/orders')} className="btn order-btn">View My Orders</button>
        </div>
      </div>
    </div>
  );
}
