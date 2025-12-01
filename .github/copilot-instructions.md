# Citoyen en Action - Instructions pour AI Agents

## Vue d'ensemble du projet

Plateforme web civique React pour la Guadeloupe 🇬🇵 - contenus éducatifs (capsules vidéo, débats TikTok), ressources pédagogiques, et engagement citoyen local.

**Stack** : React 19 + TypeScript + Vite + React Router DOM + CSS custom (pas de Tailwind en runtime)

## Architecture

```
src/
├── components/
│   ├── ui/          # Composants réutilisables (Button, Card, MediaGallery, VideoEmbed)
│   └── layout/      # Header, Footer, Layout (wrapper principal)
├── pages/           # Pages routées (HomePage, DebatsPage, CapsulesVideosPage...)
├── assets/          # Images statiques (logos)
└── index.css        # Styles globaux avec classes utilitaires custom
```

### Patterns clés

- **Layout wrapper** : Toutes les pages sont wrappées dans `<Layout>` via `App.tsx` - ne jamais inclure Header/Footer dans les pages individuelles
- **Routing** : Routes définies dans `App.tsx` avec React Router v7, chemins en français (`/a-propos`, `/debats`, `/capsules-video`)
- **Composants UI** : Utiliser `Card`, `CardContent`, `CardHeader` et `Button` de `src/components/ui/`

## Conventions de style

### CSS Classes (index.css)
Le projet utilise des classes CSS custom inspirées de Tailwind mais **sans Tailwind en runtime**. Les classes sont définies dans `src/index.css`.

```tsx
// ✅ Correct - Classes définies dans index.css
<div className="container py-16">
  <h2 className="text-3xl font-bold text-gray-900 mb-4">Titre</h2>
  <Button variant="primary" size="lg">Action</Button>
</div>
```

**Couleurs du thème** :
- `--accent-logo: #00d8ff` - Accent principal (cyan React)
- `bg-primary-600` / `text-primary-600` : Bleu républicain `#1e3a8a`
- `bg-accent-600` / `text-accent-600` : Vert caraïbe `#22c55e`

**Classes d'animation** : `.fade-in`, `.slide-up`, `.card` (hover effects)

### Structure des pages

```tsx
// Pattern standard pour une page
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';

const MaPage: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Section Hero avec gradient */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Titre</h1>
        </div>
      </section>
      
      {/* Section contenu */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cards... */}
        </div>
      </section>
    </div>
  );
};
```

## Commandes de développement

```bash
npm run dev      # Serveur dev Vite (localhost:5173)
npm run build    # tsc -b && vite build
npm run lint     # ESLint
npm run preview  # Preview du build
npm start        # Serveur Express production (server.js, port 3000)
```

## Contenu et localisation

- **Langue** : Tout le contenu est en français
- **Contexte** : Guadeloupe - références locales (récifs coralliens, mangroves, créole, autonomie)
- **Réseaux** : TikTok (@farorudy), WhatsApp (0690 57 08 46), Facebook, YouTube

### Ressources statiques
Les fichiers markdown pédagogiques sont dans `public/ressources/` :
- `guide-tri-guadeloupe.md`
- `modele-petition-locale.md`

## Bonnes pratiques

1. **Imports** : Toujours utiliser les composants UI existants plutôt que du HTML brut
2. **Links** : Utiliser `<Link to="/path">` de react-router-dom pour la navigation interne
3. **Liens externes** : Ajouter `target="_blank" rel="noopener noreferrer"`
4. **Icônes** : Utiliser des emojis pour les icônes (pas de bibliothèque externe)
5. **Images** : Importer depuis `src/assets/` avec import ES6

## Déploiement

Production utilise `server.js` (Express) qui sert le build statique depuis `dist/` avec fallback SPA pour le routing client-side.
