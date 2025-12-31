import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <div className="product-image-placeholder">🍯</div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-details">
          <span className="product-weight">{product.weight}</span>
          <span className="product-price">{product.price}€</span>
        </div>
        <button className="add-to-cart-btn">
          Ajouter au panier 🛒
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
