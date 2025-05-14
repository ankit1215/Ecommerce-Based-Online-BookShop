import React, { useState } from 'react';
import '../styles/ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Thanks for contacting us!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contactus-wrapper">
      <div className="contact-form-section">
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you! Fill out the form and we'll get back to you shortly.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="contact-map-section">
        <iframe
          title="Book Shop Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7542.402327467619!2d72.82530078857455!3d19.054891069583473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c946a4ccad0b%3A0x7fe232707d361edd!2sMedify!5e0!3m2!1sen!2sin!4v1747039845140!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
