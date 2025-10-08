# 💬 Citoyen en Action

> **"La parole du peuple, pour un avenir conscient."**

Plateforme web et communauté TikTok dédiées aux débats citoyens et à l'éducation civique en Guadeloupe 🇬🇵

[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.9-purple.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 🎯 Mission

**Citoyen en Action** est une initiative citoyenne qui vise à :
- 🗣️ **Démocratiser** les débats civiques via TikTok et les réseaux sociaux
- 🎓 **Éduquer** les citoyens sur leurs droits et devoirs républicains
- 🏛️ **Encourager** l'engagement politique local en Guadeloupe
- 🤝 **Créer** une communauté de citoyens conscients et actifs

## 📱 Contenus & Formats

### 🎥 Lives TikTok "Le Débat du Vendredi"
- **Horaire** : Vendredis 19h30
- **Format** : 60 minutes de débat interactif
- **Invités** : Élus, jeunes, associations, citoyens

### 💡 Capsules "Le Saviez-vous ?"
- **Publication** : Mardis & Jeudis 18h
- **Durée** : 90 secondes
- **Contenu** : Éducation civique accessible

### 📚 Ressources Pédagogiques
- Fiches civiques détaillées
- Guides pratiques (tri, pétitions)
- Annuaire des associations partenaires

## 🏗️ Architecture Technique

### Stack Frontend
```
React 19.1.1 + TypeScript
├── Vite (Build tool & Dev server)
├── React Router DOM (Navigation SPA)
├── CSS Custom (Utility classes)
└── Responsive Design (Mobile-first)
```

### Structure du Projet
```
src/
├── components/
│   ├── ui/           # Composants réutilisables (Button, Card)
│   └── layout/       # Header, Footer, Layout
├── pages/            # Pages principales de l'application
│   ├── HomePage.tsx
│   ├── DebatsPage.tsx
│   ├── RessourcesPage.tsx
│   └── CreateursPage.tsx
├── styles/
│   └── index.css     # Styles globaux et utilitaires
└── main.tsx         # Point d'entrée de l'application
```

## 🚀 Installation & Développement

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
git clone https://github.com/cipfarorudy/citoyen-en-action.git
cd citoyen-en-action
npm install
```

### Développement
```bash
npm run dev
# ➜ Serveur local : http://localhost:5173
```

### Build Production
```bash
npm run build
npm run preview
```

## 📅 Calendrier Éditorial (Octobre-Novembre 2025)

| Semaine | Date | Thème | Format |
|---------|------|-------|---------|
| S1 | 15 oct | C'est quoi être citoyen en Guadeloupe ? | Capsule |
| S2 | 24 oct | Le vote : droit, devoir ou option ? | Live 1h |
| S3 | 29 oct | L'école forme-t-elle encore des citoyens ? | Capsule |
| S4 | 31 oct | Faut-il plus de jeunes en politique locale ? | Live 1h |
| ... | ... | ... | ... |

[Voir le calendrier complet](src/pages/DebatsPage.tsx)

## 🎨 Identité Visuelle

### Couleurs Officielles
- **Bleu républicain** : `#1e3a8a` (Primary)
- **Vert caraïbe** : `#22c55e` (Accent)
- **Blanc** : Neutralité et clarté

### Hashtags TikTok
```
#CitoyenEnAction #DébatCivique #Guadeloupe 
#ParoleCitoyenne #JeunesseEngagée #République
```

## 📞 Contact & Communauté

### 📧 Contact Officiel
- **Email** : secretariat@farorudy.fr
- **Téléphone** : 0690 57 08 46
- **Localisation** : Guadeloupe, France

### 🌐 Réseaux Sociaux
- **TikTok** : [@votre-compte] - Lives & Capsules
- **WhatsApp** : [Groupe communauté]
- **YouTube** : [Chaîne replays]
- **Instagram** : [Stories & Reels]

### 💬 Extension Communautaire
- **Discord** "Citoyen en Action" (débats prolongés)
- **Newsletter** "Le Journal Citoyen" (mensuelle)
- **Partenariats** avec associations locales

## 🤝 Contribuer

### Pour les Créateurs de Contenu
1. Consultez la [page Créateurs](src/pages/CreateursPage.tsx)
2. Utilisez nos scripts et modèles vidéo
3. Respectez la charte graphique officielle
4. Contactez-nous pour validation : secretariat@farorudy.fr

### Pour les Développeurs
1. Fork le repository
2. Créez une branche feature (`git checkout -b feature/amazing-feature`)
3. Committez vos changements (`git commit -m 'Add amazing feature'`)
4. Pushez vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrez une Pull Request

### Associations Partenaires
Rejoignez notre réseau ! Critères :
- ✅ Basée en Guadeloupe
- ✅ Engagement citoyen/social/environnemental
- ✅ Valeurs républicaines partagées

**Contact partenariats** : secretariat@farorudy.fr

## 📄 Ressources Disponibles

### 📋 Guides Pratiques
- [Guide du tri en Guadeloupe](public/ressources/guide-tri-guadeloupe.md)
- [Modèle de pétition locale](public/ressources/modele-petition-locale.md)
- [Carte des points de collecte] (À venir)

### 🏢 Annuaire Associations
- [Répertoire complet des partenaires](/ressources/annuaire-associations-guadeloupe)
- Contacts directs et domaines d'action
- 6 domaines : Environnement, Jeunesse, Égalité, Culture, Solidarité

## 🎯 Objectifs 2025-2026

### Phase 1 (Oct-Déc 2025) : Lancement
- [ ] 12 semaines de contenus programmés
- [ ] Communauté TikTok 1000+ abonnés  
- [ ] 5 associations partenaires minimum
- [ ] Discord actif 100+ membres

### Phase 2 (2026) : Expansion
- [ ] Couverture des élections locales
- [ ] Partenariat avec collectivités
- [ ] Extension aux autres îles DOM-TOM
- [ ] Plateforme de vote citoyen

## 📊 Analytics & Métriques

### Indicateurs Clés
- **Engagement TikTok** : Vues, commentaires, partages
- **Participation débats** : Nombre de participants lives
- **Ressources téléchargées** : Guides, modèles, fiches
- **Partenariats** : Associations, institutions

### Outils de Mesure
- TikTok Analytics
- Google Analytics (site web)
- Retours communauté WhatsApp/Discord

## 📜 Licence & Crédits

### Licence
Ce projet est sous licence MIT. Voir [LICENSE](LICENSE) pour plus de détails.

### Crédits
- **Concept & Développement** : Équipe Citoyen en Action
- **Design & UX** : Inspiré des couleurs républicaines et caraïbes
- **Contenu éditorial** : Adaptation locale des enjeux civiques

### Mentions Légales
- **Éditeur** : Citoyen en Action
- **Hébergeur** : [À définir selon déploiement]
- **RGPD** : Conformité données personnelles

---

## 🎉 Rejoignez le Mouvement !

**Ensemble, faisons entendre la voix citoyenne en Guadeloupe !**

🔗 **Site web** : [En cours de déploiement]  
📧 **Contact** : secretariat@farorudy.fr  
📱 **WhatsApp** : [Rejoindre la communauté]  
🎥 **TikTok** : [@votre-compte] - RDV vendredi 19h30 !

---

*"La démocratie, c'est l'affaire de tous. En Guadeloupe comme ailleurs, chaque voix compte."*

**#CitoyenEnAction #GuadeloupeCitoyenne #DébatDémocratique** 🇬🇵🗳️
