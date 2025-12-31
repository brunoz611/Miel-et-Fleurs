import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import LoadingAnimation from './components/LoadingAnimation';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler un délai de chargement pour voir l'animation
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';
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

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <h2 className="page-title">Nos Miels Artisanaux</h2>
        <ProductList products={products} />
      </main>
      <footer className="footer">
        <p>🐝 © 2025 Miel Artisanal - Tous droits réservés</p>
      </footer>
    </div>
  );
}

export default App;
