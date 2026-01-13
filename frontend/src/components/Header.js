import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="bee-icon">🐝</span>
          <h1>La Maison du Miel</h1>
        </div>
        <nav className="nav">
          <a href="#accueil" className="nav-link">Accueil</a>
          <a href="#produits" className="nav-link">Nos Miels</a>
          <a href="#apropos" className="nav-link">À Propos</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#commander" className="nav-link commander-btn">Commander</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
