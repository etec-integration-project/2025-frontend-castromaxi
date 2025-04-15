import React from 'react';
import { Mail, Phone, Twitter, Facebook, Instagram } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">About Us</h3>
            <p className="footer-text">
              Your premier destination for high-quality tech accessories. We curate the finest selection of mobile and PC peripherals to enhance your digital lifestyle.
            </p>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <div className="contact-list">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <span>support@techaccessories.com</span>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span>(555) 123-4567</span>
              </div>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Follow Us</h3>
            <div className="social-links">
              <a href="#" className="social-link">
                <Twitter className="social-icon" />
              </a>
              <a href="#" className="social-link">
                <Facebook className="social-icon" />
              </a>
              <a href="#" className="social-link">
                <Instagram className="social-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 TechAccessories. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;