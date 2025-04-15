import React from 'react';
import { X, Smartphone, Monitor } from 'lucide-react';
import './MobileMenu.css';

function MobileMenu({ isOpen, onClose, setCategory }) {
  const handleCategoryClick = (category) => {
    setCategory(category);
    onClose();
  };

  return (
    <div className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}>
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <h2>Menu</h2>
          <button onClick={onClose} className="close-button">
            <X />
          </button>
        </div>

        <div className="mobile-menu-items">
          <button
            onClick={() => handleCategoryClick('all')}
            className="mobile-menu-button"
          >
            All Products
          </button>
          <button
            onClick={() => handleCategoryClick('mobile')}
            className="mobile-menu-button"
          >
            <Smartphone className="icon" />
            Mobile Accessories
          </button>
          <button
            onClick={() => handleCategoryClick('pc')}
            className="mobile-menu-button"
          >
            <Monitor className="icon" />
            PC Accessories
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu; 