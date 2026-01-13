import React, { useState } from 'react';

function Cart({ items, onUpdateQuantity, onRemoveItem, onCheckout }) {
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    if (items.length === 0) return;
    
    const confirmation = window.confirm(
      `Confirmer votre commande de ${totalItems} article(s) pour ${totalPrice.toFixed(2)}€ ?\n\n` +
      `(Dans une vraie boutique, vous seriez redirigé vers le paiement)`
    );
    
    if (confirmation) {
      onCheckout();
      alert('🎉 Commande confirmée ! Merci pour votre achat.');
    }
  };

  return (
    <>
      <button 
        className={`cart-toggle ${totalItems > 0 ? 'has-items' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        🛒 Panier {totalItems > 0 && `(${totalItems})`}
      </button>

      {isOpen && (
        <div className="cart-overlay" onClick={() => setIsOpen(false)}>
          <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h2>🛒 Mon Panier</h2>
              <button className="cart-close" onClick={() => setIsOpen(false)}>✕</button>
            </div>

            {items.length === 0 ? (
              <div className="cart-empty">
                <p>🍯 Votre panier est vide</p>
                <p className="cart-empty-subtitle">Découvrez nos délicieux miels artisanaux</p>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {items.map(item => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-image">
                        {item.image ? (
                          <img src={item.image} alt={item.name} />
                        ) : (
                          <div className="cart-item-placeholder">🍯</div>
                        )}
                      </div>
                      <div className="cart-item-info">
                        <h4>{item.name}</h4>
                        <p className="cart-item-weight">{item.weight}</p>
                        <div className="cart-item-actions">
                          <div className="cart-quantity-selector">
                            <button 
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              className="cart-quantity-btn"
                            >
                              -
                            </button>
                            <span className="cart-quantity">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="cart-quantity-btn"
                            >
                              +
                            </button>
                          </div>
                          <button 
                            className="cart-remove-btn"
                            onClick={() => onRemoveItem(item.id)}
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                      <div className="cart-item-price">
                        {(item.price * item.quantity).toFixed(2)}€
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-footer">
                  <div className="cart-total">
                    <span className="cart-total-label">Total:</span>
                    <span className="cart-total-price">{totalPrice.toFixed(2)}€</span>
                  </div>
                  <button 
                    className="checkout-btn"
                    onClick={handleCheckout}
                  >
                    🐝 Commander maintenant
                  </button>
                  <p className="cart-info">
                    Livraison gratuite à partir de 50€
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
