import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CartSidebar from './components/CartSidebar/CartSidebar';
import ProductGrid from './components/ProductGrid/ProductGrid';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import UserMenu from './components/UserMenu/UserMenu';
import Login from './components/Login/Login';

function App() {
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState('all');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Wireless Gaming Mouse",
      price: 49.99,
      category: "pc",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
      description: "RGB gaming mouse with 7 programmable buttons"
    },
    {
      id: 2,
      name: "Premium Phone Case",
      price: 24.99,
      category: "mobile",
      image: "https://images.unsplash.com/photo-1541877590-a1885a0c5df0?w=500",
      description: "Shock-proof protective case with elegant design"
    }
  ];

  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(p => p.category === category);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    // Aquí puedes agregar más lógica de logout si es necesario
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar 
          cartCount={cart.length} 
          setCategory={setCategory}
          openCart={() => setIsCartOpen(true)}
          openUserMenu={() => setIsUserMenuOpen(true)}
          isAuthenticated={isAuthenticated}
        />
        
        <Routes>
          <Route 
            path="/login" 
            element={
              !isAuthenticated ? (
                <Login onLogin={() => setIsAuthenticated(true)} />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          <Route
            path="/*"
            element={
              <>
                <UserMenu 
                  isOpen={isUserMenuOpen}
                  onClose={() => setIsUserMenuOpen(false)}
                  isAuthenticated={isAuthenticated}
                  onLogout={handleLogout}
                />

                <main className="main-content">
                  <Hero />
                  <ProductGrid 
                    products={filteredProducts} 
                    addToCart={addToCart} 
                    removeFromCart={removeFromCart}
                    category={category}
                    cartItems={cart} 
                  />
                </main>
                <Footer />
                
                <CartSidebar 
                  isOpen={isCartOpen}
                  onClose={() => setIsCartOpen(false)}
                  cartItems={cart}
                  removeFromCart={removeFromCart}
                />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;