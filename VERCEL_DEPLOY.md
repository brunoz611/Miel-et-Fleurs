# Déploiement sur Vercel 🚀

## Configuration

Ce projet est configuré pour être déployé sur Vercel avec :
- Backend API (Node.js/Express)
- Frontend (React/Webpack)

## Étapes de déploiement

### 1. Installer Vercel CLI (optionnel)

```bash
npm install -g vercel
```

### 2. Variables d'environnement sur Vercel

Dans votre projet Vercel, configurez ces variables :

**Pour la production :**
- `NODE_ENV` = `production`
- `REACT_APP_API_URL` = `https://votre-domaine.vercel.app`

### 3. Déployer avec Git (recommandé)

1. Connectez votre repo GitHub à Vercel
2. Importez le projet `brunoz611/Miel-et-Fleurs`
3. Vercel détectera automatiquement la configuration
4. Cliquez sur "Deploy"

### 4. Déployer avec CLI

```bash
# Depuis la racine du projet
vercel

# Pour la production
vercel --prod
```

## Structure pour Vercel

```
Abe/
├── backend/          # API serverless
│   └── server.js     # Devient une fonction serverless
├── frontend/         # Static site
│   └── dist/         # Build output
└── vercel.json       # Configuration Vercel
```

## Routes

- `/api/*` → Backend API
- `/*` → Frontend React

## Après déploiement

1. Récupérez l'URL de production (ex: `https://miel-et-fleurs.vercel.app`)
2. Mettez à jour `REACT_APP_API_URL` avec cette URL
3. Redéployez pour appliquer les changements

## Commandes utiles

```bash
# Voir les logs
vercel logs

# Lister les déploiements
vercel list

# Supprimer un déploiement
vercel remove [deployment-url]
```

---

🐝 Votre site de miel sera en ligne en quelques minutes !
