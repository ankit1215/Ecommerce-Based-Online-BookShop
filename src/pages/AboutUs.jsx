import React from "react";
import "../styles/About.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Our BookShop</h1>
      <p>
        Welcome to BookVerse — your one-stop online bookshop for all kinds of books!
        Whether you're into fiction, non-fiction, academic, or self-help, we've got
        something for everyone.
      </p>

      <p>
        Our mission is to make reading accessible, affordable, and enjoyable for
        everyone. We carefully curate our selection and ensure fast delivery and
        smooth checkout experiences.
      </p>

      <p>
        Founded by a team of book lovers and tech enthusiasts, BookVerse believes
        in empowering readers by putting a library at their fingertips.
      </p>

      <h3>Why Choose Us?</h3>
      <ul>
        <li>✔ Wide range of genres and authors</li>
        <li>✔ Easy ordering and secure payment</li>
        <li>✔ Fast delivery with real-time order tracking</li>
        <li>✔ Friendly customer support</li>
      </ul>
    </div>
  );
};

export default AboutUs;
