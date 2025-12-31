import React from 'react';
import ReactDOM from 'react-dom/client';

// Test simple
function TestApp() {
  return (
    <div style={{padding: '20px', fontSize: '24px'}}>
      <h1>🐝 Test React Fonctionne!</h1>
      <p>Si vous voyez ce message, React se charge correctement.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TestApp />);
