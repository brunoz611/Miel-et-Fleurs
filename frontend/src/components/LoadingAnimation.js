import React from 'react';

function LoadingAnimation() {
  return (
    <div className="loading-container">
      <div className="honey-jar">
        <div className="jar-body">
          <div className="honey-fill"></div>
          <div className="jar-label">🐝</div>
        </div>
        <div className="jar-lid"></div>
      </div>
      <p className="loading-text">Chargement du miel...</p>
    </div>
  );
}

export default LoadingAnimation;
