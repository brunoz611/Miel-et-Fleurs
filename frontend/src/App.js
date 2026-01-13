import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import LoadingAnimation from './components/LoadingAnimation';
import Reviews from './components/Reviews';
import Cart from './components/Cart';

// Configuration de l'API
const API_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:3000'
  : 'https://miel-et-fleurs.vercel.app';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Simuler un délai de chargement pour voir l'animation
    console.log('API_URL:', API_URL);
    setTimeout(() => {
      fetch(`${API_URL}/api/products`)
        .then(response => {
          console.log('Response:', response);
          return response.json();
        })
        .then(data => {
          console.log('Data:', data);
          setProducts(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Erreur:', error);
          setLoading(false);
        });
    }, 2000);
  }, []);

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      
      return [...prevItems, product];
    });
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleCheckout = () => {
    // Dans une vraie application, on enverrait la commande au backend
    // Pour l'instant, on vide juste le panier
    setCartItems([]);
  };

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="app">
      <Header />
      <Cart 
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
      
      {/* Hero Section Premium */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Miel d'exception –</h1>
          <h2 className="hero-subtitle">La Maison du Miel, Verruyes</h2>
          <p className="hero-tagline">Apiculteur artisanal – Deux-Sèvres</p>
          <div className="hero-buttons">
            <button className="hero-btn primary" onClick={() => document.getElementById('produits').scrollIntoView({ behavior: 'smooth' })}>Découvrir nos miels</button>
            <button className="hero-btn secondary" onClick={() => document.getElementById('produits').scrollIntoView({ behavior: 'smooth' })}>Commander</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1587049352846-4a222e784f67?w=800&h=600&fit=crop" alt="Miel et nid d'abeilles" />
        </div>
      </section>

      {/* Badges de qualité */}
      <section className="quality-badges">
        <div className="badge">
          <div className="badge-icon">🛡️</div>
          <div className="badge-content">
            <div className="badge-title">Pureté</div>
            <div className="badge-subtitle">100% Naturelle</div>
          </div>
        </div>
        <div className="badge">
          <div className="badge-icon">🌻</div>
          <div className="badge-content">
            <div className="badge-title">Apiculture</div>
            <div className="badge-subtitle">Raisonnée</div>
          </div>
        </div>
        <div className="badge">
          <div className="badge-icon">🏡</div>
          <div className="badge-content">
            <div className="badge-title">Production Locale</div>
            <div className="badge-subtitle">à Verruyes</div>
          </div>
        </div>
      </section>

      <main className="main-content">
        <div className="products-section-header">
          <h2 className="page-title" id="produits">Nos Miels</h2>
          <p className="section-intro">"Chaque pot est une récolte unique, issue de nos ruches à Verruyes"</p>
        </div>
        <ProductList products={products} onAddToCart={handleAddToCart} />
        
        {/* Section À Propos */}
        <section className="about-section" id="apropos">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&h=400&fit=crop" alt="Apiculteur" />
          </div>
          <div className="about-content">
            <h2 className="about-title">À Propos de l'Apiculteur</h2>
            <p className="about-text">Une passion au cœur de la nature</p>
            <p className="about-description">Depuis plus de 20 ans, je pratique une apiculture respectueuse des abeilles et de l'environnement. Chaque pot de miel est le fruit d'un travail minutieux et d'un profond respect pour ces créatures extraordinaires qui pollinisent nos campagnes.</p>
            <p className="about-description">Basé à Verruyes dans les Deux-Sèvres, mes ruches sont installées dans des environnements préservés, loin de toute pollution, offrant ainsi un miel pur et authentique.</p>
          </div>
        </section>

        {/* Section Avantages */}
        <section className="benefits-section">
          <div className="benefit-card">
            <div className="benefit-icon">🛡️</div>
            <h3 className="benefit-title">Immunité Renforcée</h3>
            <p className="benefit-description">Un trésor de miel — synonyme de santé</p>
            <p className="benefit-text">Le miel artisanal — riche en antioxydants et nutrients — est reconnu par nombreux de gens...</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🎵</div>
            <h3 className="benefit-title">Apaise la Gorge</h3>
            <p className="benefit-description">Un réconfort total — naturel et doux</p>
            <p className="benefit-text">Le miel artisanal — riche en antioxydants et nutrients — est reconnu par nombreux de gens...</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">⚡</div>
            <h3 className="benefit-title">Énergie Naturelle</h3>
            <p className="benefit-description">Un carburant sain pour votre quotidien</p>
            <p className="benefit-text">Un remède anti — fatigue ancestral et vigo. Ses sucres et son boost permettent des activités...</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🌟</div>
            <h3 className="benefit-title">Sans Source Raffinée</h3>
            <p className="benefit-description">Un produit 100% — pure et authentique</p>
            <p className="benefit-text">Un trésor miel d — 100% pur qui rejette les contours — donc énergie total dans le corpore...</p>
          </div>
        </section>

        <Reviews />
      </main>
      
      <footer className="footer">
        <div className="footer-content">
          <p>🐝 © 2026 La Maison du Miel - Tous droits réservés</p>
          <p className="footer-subtitle">Miel 100% naturel et produit localement à Verruyes</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
