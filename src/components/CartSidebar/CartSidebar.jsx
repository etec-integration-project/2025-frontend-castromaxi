import React from 'react';
import { X, Trash2 } from 'lucide-react';
import './CartSidebar.css';

function CartSidebar({ isOpen, onClose, cartItems, removeFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={`cart-sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className={`cart-sidebar ${isOpen ? 'active' : ''}`} onClick={e => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Shopping Cart ({cartItems.length})</h2>
          <button onClick={onClose} className="close-button">
            <X size={20} />
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="remove-button"
                  aria-label="Remove item"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="checkout-button">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartSidebar; 