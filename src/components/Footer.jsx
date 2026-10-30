
import { Link } from "react-router-dom";
import "./Footer.css";

import {
  FaEnvelope,
  FaClock,
  FaHeadset,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-section">
          <h2 className="footer-logo">NovaCart</h2>

          <p className="footer-description">
            Your trusted destination for quality products at affordable prices.
            Shop with confidence and enjoy a seamless shopping experience.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/">Products</Link>
            </li>

            <li>
              <Link to="/checkout">Cart</Link>
            </li>

            <li>
              <Link to="/auth">Login</Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-section">
          <h3>Customer Support</h3>

          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping Policy</li>
            <li>Return Policy</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-section">
          <h3>Contact</h3>

          <div className="contact-item">
            <FaEnvelope />
            <span>support@novacart.com</span>
          </div>

          <div className="contact-item">
            <FaClock />
            <span>Mon – Fri: 9 AM – 6 PM</span>
          </div>

          <div className="contact-item">
            <FaHeadset />
            <span>24/7 Customer Assistance</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} NovaCart. All rights reserved.
        </p>
      </div>
    </footer>
  );
};




