import React, { useEffect, useState } from 'react';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            style={{
              border: '1px solid #ccc',
              marginBottom: '1rem',
              padding: '1rem',
              borderRadius: '8px',
            }}
          >
            <h4>Order ID: {order.id}</h4>
            <p>Date: {order.date}</p>
            <p>Customer: {order.user.name}</p>
            <p>Total: ₹{order.total}</p>
            <ul>
              {order.items.map((item) => (
                <li key={item.id}>
                  {item.title} x {item.quantity} = ₹{item.price * item.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}
