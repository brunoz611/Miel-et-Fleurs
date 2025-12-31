const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Données de produits de miel
const honeyProducts = [
  {
    id: 1,
    name: 'Miel de Fleurs',
    description: 'Miel doux et parfumé provenant de fleurs sauvages',
    price: 12.99,
    weight: '500g',
    image: 'miel-fleurs.jpg'
  },
  {
    id: 2,
    name: 'Miel d\'Acacia',
    description: 'Miel clair et liquide, goût délicat',
    price: 14.99,
    weight: '500g',
    image: 'miel-acacia.jpg'
  },
  {
    id: 3,
    name: 'Miel de Lavande',
    description: 'Miel aromatique avec un goût floral distinctif',
    price: 15.99,
    weight: '500g',
    image: 'miel-lavande.jpg'
  },
  {
    id: 4,
    name: 'Miel de Châtaignier',
    description: 'Miel corsé au goût prononcé',
    price: 13.99,
    weight: '500g',
    image: 'miel-chataignier.jpg'
  },
  {
    id: 5,
    name: 'Miel de Forêt',
    description: 'Miel foncé et riche provenant des forêts',
    price: 16.99,
    weight: '750g',
    image: 'miel-foret.jpg'
  }
];

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'API Miel - Bienvenue!' });
});

// Récupérer tous les produits
app.get('/api/products', (req, res) => {
  res.json(honeyProducts);
});

// Récupérer un produit par ID
app.get('/api/products/:id', (req, res) => {
  const product = honeyProducts.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Produit non trouvé' });
  }
});

app.listen(PORT, () => {
  console.log(`🐝 Serveur API démarré sur http://localhost:${PORT}`);
});
