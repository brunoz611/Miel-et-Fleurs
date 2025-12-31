import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="bee-icon">🐝</span>
          <h1>Miel Artisanal</h1>
        </div>
        <nav className="nav">
          <a href="#accueil" className="nav-link">Accueil</a>
          <a href="#produits" className="nav-link">Produits</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
      <div className="honeycomb-pattern"></div>
    </header>
  );
}

export default Header;
