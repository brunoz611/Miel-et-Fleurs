# 🐝 Site de Vente de Miel - Miel Artisanal

Site web full-stack pour la vente de miel avec un design inspiré des abeilles.

## 🎨 Caractéristiques

- **Curseur personnalisé** : Une petite abeille animée suit votre souris
- **Thème abeille** : Couleurs noir et jaune
- **Animation de chargement** : Pot de miel qui se remplit
- **Design responsive** : S'adapte à tous les écrans
- **API REST** : Backend Node.js/Express avec données de produits

## 📁 Structure du Projet

```
Abe/
├── backend/          # Serveur API Node.js
│   ├── server.js
│   └── package.json
├── frontend/         # Application React
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles.css
│   ├── public/
│   ├── webpack.config.js
│   └── package.json
└── .github/
    └── copilot-instructions.md
```

## 🚀 Installation

### Prérequis

- Node.js (v14 ou supérieur)
- npm

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd frontend
npm install
```

## 💻 Démarrage

### Lancer le Backend (Port 3000)

```bash
cd backend
npm start
```

Pour le développement avec auto-reload :
```bash
npm run dev
```

### Lancer le Frontend (Port 5173)

```bash
cd frontend
npm start
```

Le site s'ouvrira automatiquement dans votre navigateur à `http://localhost:5173`

## 🍯 API Endpoints

- `GET /` - Message de bienvenue
- `GET /api/products` - Liste tous les produits de miel
- `GET /api/products/:id` - Récupère un produit spécifique

## 🎨 Design

### Thème

- **Couleur principale** : Jaune (#FFD700)
- **Couleur secondaire** : Noir (#1a1a1a)
- **Police** : Segoe UI

### Animations

1. **Curseur abeille** : L'abeille 🐝 suit le curseur avec une légère rotation
2. **Loading** : Pot de miel qui se remplit progressivement
3. **Cards** : Effet de survol avec élévation et ombre

## 📦 Technologies Utilisées

### Frontend
- React 18
- Webpack 5
- Babel
- CSS3 avec animations

### Backend
- Node.js
- Express
- CORS

## 🔧 Scripts Disponibles

### Backend
- `npm start` - Démarre le serveur
- `npm run dev` - Démarre avec nodemon (auto-reload)

### Frontend
- `npm start` - Démarre le serveur de développement
- `npm run build` - Crée le build de production

## 📝 Fonctionnalités

- ✅ Affichage des produits de miel
- ✅ Curseur personnalisé en forme d'abeille
- ✅ Animation de chargement pot de miel
- ✅ Design responsive
- ✅ Thème noir et jaune
- ✅ API REST fonctionnelle

## 🎯 Développement Futur

- [ ] Panier d'achat fonctionnel
- [ ] Système de paiement
- [ ] Authentification utilisateur
- [ ] Page de détail produit
- [ ] Gestion des stocks
- [ ] Images réelles de produits

## 📄 Licence

ISC

---

Fait avec ❤️ et 🐝
