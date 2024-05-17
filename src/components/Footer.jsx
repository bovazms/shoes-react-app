import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Secure Payment</h3>
          </div>
          <div className="footer-section">
            <h3>Express Shipping</h3>
          </div>
          <div className="footer-section">
            <h3>Free Return</h3>
          </div>
          <div className="footer-section">
            <h3>Shop</h3>
            <ul>
            <li><a href="/Collection">Collections</a></li>
              <li><a href="/Men">Men</a></li>
              <li><a href="/Women">Women</a></li>
              <li><a href="/Adidas">Adidas</a></li>
              <li><a href="/Puma">Puma</a></li>
              <li><a href="/Nike">Nike</a></li>

            </ul>
          </div>
          <div className="footer-section">
            <h3>About</h3>
            <ul>
              <li><a href="#About">About Us</a></li>
              <li><a href="/">Our Team</a></li>
              <li><a href="/Contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Need Help</h3>
            <ul>
              <li><a href="/">FAQs</a></li>
              <li><a href="/">Shipping &amp; Delivery</a></li>
              <li><a href="/">Returns</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com"><FaFacebook /></a>
              <a href="https://www.instagram.com"><FaInstagram /></a>
              <a href="https://www.twitter.com"><FaTwitter /></a>
              <a href="https://www.pinterest.com"><FaPinterest /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;