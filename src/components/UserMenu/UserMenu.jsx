import React from 'react';
import { X, User, LogIn, UserPlus, Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './UserMenu.css';

function UserMenu({ isOpen, onClose, isAuthenticated, onLogout }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    onClose(); // Cerrar el menú
    navigate(path); // Navegar a la ruta
  };

  return (
    <div className={`user-menu-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className={`user-menu ${isOpen ? 'active' : ''}`} onClick={e => e.stopPropagation()}>
        <div className="user-menu-header">
          <h2>Account</h2>
          <button onClick={onClose} className="close-button">
            <X size={20} />
          </button>
        </div>

        <div className="user-menu-content">
          {!isAuthenticated ? (
            // Menú para usuarios no autenticados
            <div className="user-menu-section">
              <button 
                className="user-menu-item"
                onClick={() => handleNavigation('/login')}
              >
                <LogIn className="icon" />
                <span>Sign In</span>
              </button>
              <button 
                className="user-menu-item"
                onClick={() => handleNavigation('/register')}
              >
                <UserPlus className="icon" />
                <span>Create Account</span>
              </button>
            </div>
          ) : (
            // Menú para usuarios autenticados
            <>
              <div className="user-menu-section">
                <button 
                  className="user-menu-item"
                  onClick={() => handleNavigation('/settings')}
                >
                  <Settings className="icon" />
                  <span>Settings</span>
                </button>
                <button 
                  className="user-menu-item"
                  onClick={() => {
                    onLogout();
                    onClose();
                  }}
                >
                  <LogOut className="icon" />
                  <span>Sign Out</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserMenu; 