import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import BookList from '../pages/BookList';
import Orders from '../pages/Orders';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AboutUs from "../pages/AboutUs";
import BookPage from '../pages/BookPage';
import ContactUs from '../pages/ContactUs';
import CartPage from '../pages/CartPage';
import Profile from "../pages/Profile";
import Wishlist from '../pages/Wishlist'; // Assuming you have a Wishlist page to display the wishlist
import Checkout from '../pages/Checkout';
import OrderSuccess from '../pages/OrderSuccess';


// You can add more routes here later

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BookList />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/books" element={<BookPage />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/wishlist" element={<Wishlist />} /> {/* Wishlist route */}
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-success" element={<OrderSuccess />} />




    </Routes>
  );
}

export default AppRoutes;
