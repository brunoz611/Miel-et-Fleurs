require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Données de produits de miel avec stock et avis
const honeyProducts = [
  {
    id: 1,
    name: 'Miel de Fleurs',
    description: 'Miel doux et parfumé provenant de fleurs sauvages, récolté avec soin dans nos ruches',
    price: 12.99,
    weight: '500g',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784l67?w=400&h=400&fit=crop',
    stock: 25,
    inStock: true,
    category: 'Doux'
  },
  {
    id: 2,
    name: 'Miel d\'Acacia',
    description: 'Miel clair et liquide, goût délicat et sucré. Parfait pour sucrer vos boissons',
    price: 14.99,
    weight: '500g',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=400&fit=crop',
    stock: 18,
    inStock: true,
    category: 'Doux'
  },
  {
    id: 3,
    name: 'Miel de Lavande',
    description: 'Miel aromatique avec un goût floral distinctif. Idéal pour les desserts',
    price: 15.99,
    weight: '500g',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784f67?w=400&h=400&fit=crop',
    stock: 12,
    inStock: true,
    category: 'Floral'
  },
  {
    id: 4,
    name: 'Miel de Châtaignier',
    description: 'Miel corsé au goût prononcé et boisé. Excellent avec les fromages',
    price: 13.99,
    weight: '500g',
    image: 'https://images.unsplash.com/photo-1471943311424-646960669fbc?w=400&h=400&fit=crop',
    stock: 8,
    inStock: true,
    category: 'Corsé'
  },
  {
    id: 5,
    name: 'Miel de Forêt',
    description: 'Miel foncé et riche provenant des forêts. Un goût puissant et authentique',
    price: 16.99,
    weight: '750g',
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=400&h=400&fit=crop',
    stock: 15,
    inStock: true,
    category: 'Corsé'
  },
  {
    id: 6,
    name: 'Miel de Thym',
    description: 'Miel méditerranéen au goût intense et aromatique. Propriétés antiseptiques',
    price: 17.99,
    weight: '500g',
    image: 'https://images.unsplash.com/photo-1516714819001-715e25f17e9f?w=400&h=400&fit=crop',
    stock: 10,
    inStock: true,
    category: 'Aromatique'
  }
];

// Données des avis clients
const reviews = [
  {
    id: 1,
    productId: 1,
    author: 'Marie L.',
    rating: 5,
    comment: 'Excellent miel ! Goût authentique et texture parfaite. Je recommande vivement !',
    date: '2025-12-15'
  },
  {
    id: 2,
    productId: 1,
    author: 'Pierre D.',
    rating: 5,
    comment: 'Qualité exceptionnelle, on sent que c\'est du vrai miel artisanal.',
    date: '2025-12-10'
  },
  {
    id: 3,
    productId: 2,
    author: 'Sophie M.',
    rating: 5,
    comment: 'Le miel d\'acacia est délicieux ! Parfait dans mon thé.',
    date: '2025-12-20'
  },
  {
    id: 4,
    productId: 3,
    author: 'Jean B.',
    rating: 4,
    comment: 'Très bon miel de lavande, arôme subtil et agréable.',
    date: '2025-12-08'
  },
  {
    id: 5,
    productId: 2,
    author: 'Lucie R.',
    rating: 5,
    comment: 'Livraison rapide et produit de qualité. Parfait !',
    date: '2025-12-18'
  },
  {
    id: 6,
    productId: 4,
    author: 'Thomas V.',
    rating: 5,
    comment: 'Le miel de châtaignier est incroyable avec du fromage. Un vrai régal !',
    date: '2025-12-12'
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

// Récupérer tous les avis
app.get('/api/reviews', (req, res) => {
  res.json(reviews);
});

// Récupérer les avis d'un produit spécifique
app.get('/api/reviews/:productId', (req, res) => {
  const productReviews = reviews.filter(r => r.productId === parseInt(req.params.productId));
  res.json(productReviews);
});

// Simuler un endpoint de commande
app.post('/api/orders', (req, res) => {
  const { items, customer } = req.body;
  
  // Validation simple
  if (!items || !items.length || !customer) {
    return res.status(400).json({ message: 'Données invalides' });
  }
  
  // Calculer le total
  const total = items.reduce((sum, item) => {
    const product = honeyProducts.find(p => p.id === item.productId);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);
  
  // Simuler la création de commande
  const order = {
    id: Math.random().toString(36).substr(2, 9),
    items,
    customer,
    total: total.toFixed(2),
    status: 'pending',
    date: new Date().toISOString()
  };
  
  res.status(201).json({
    success: true,
    message: 'Commande créée avec succès',
    order
  });
});

app.listen(PORT, () => {
  console.log(`🐝 Serveur API démarré sur http://localhost:${PORT}`);
});
