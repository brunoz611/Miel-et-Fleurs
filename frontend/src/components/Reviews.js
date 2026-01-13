import React, { useState, useEffect } from 'react';

// Configuration de l'API
const API_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:3000'
  : 'https://miel-et-fleurs.vercel.app';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/reviews`)
      .then(response => response.json())
      .then(data => {
        setReviews(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur chargement avis:', error);
        setLoading(false);
      });
  }, []);

  const renderStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  if (loading) {
    return <div className="reviews-loading">Chargement des avis...</div>;
  }

  return (
    <section className="reviews-section">
      <h2 className="section-title">
        <span className="bee-emoji">🐝</span> Avis de nos clients
      </h2>
      <div className="reviews-container">
        {reviews.map(review => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <div className="review-author">
                <span className="author-icon">👤</span>
                <span className="author-name">{review.author}</span>
              </div>
              <div className="review-rating">
                {renderStars(review.rating)}
              </div>
            </div>
            <p className="review-comment">{review.comment}</p>
            <span className="review-date">
              {new Date(review.date).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
