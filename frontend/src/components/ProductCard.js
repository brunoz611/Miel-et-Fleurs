import React, { useState } from 'react';

function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div className="product-image-placeholder" style={{ display: product.image ? 'none' : 'flex' }}>
          🍯
        </div>
        {!product.inStock && (
          <div className="out-of-stock-badge">Rupture de stock</div>
        )}
        {product.inStock && product.stock < 5 && (
          <div className="low-stock-badge">Plus que {product.stock} en stock !</div>
        )}
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <span className="product-category">{product.category}</span>
        <p className="product-description">{product.description}</p>
        <div className="product-details">
          <span className="product-weight">📦 {product.weight}</span>
          <span className="product-price">{product.price.toFixed(2)}€</span>
        </div>
        
        {product.inStock && (
          <div className="product-actions">
            <div className="quantity-selector">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="quantity-btn"
              >
                -
              </button>
              <span className="quantity-display">{quantity}</span>
              <button 
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                className="quantity-btn"
              >
                +
              </button>
            </div>
            <button 
              className={`add-to-cart-btn ${added ? 'added' : ''}`}
              onClick={handleAddToCart}
              disabled={added}
            >
              {added ? '✓ Ajouté !' : '🛒 Ajouter au panier'}
            </button>
          </div>
        )}
        {!product.inStock && (
          <button className="add-to-cart-btn disabled" disabled>
            Indisponible
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
