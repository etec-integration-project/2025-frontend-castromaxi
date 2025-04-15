import React from 'react';
import { Cpu, Smartphone } from 'lucide-react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Tech Accessories for Modern Life
          </h1>
          <p className="hero-description">
            Enhance your digital experience with premium accessories
          </p>
          <div className="features">
            <div className="feature-item">
              <div className="feature-icon">
                <Cpu />
              </div>
              <span>PC Gear</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <Smartphone />
              </div>
              <span>Mobile Accessories</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;