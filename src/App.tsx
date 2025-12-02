import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
// Lazy loading des pages pour améliorer le temps de chargement initial
const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ActionsPage = React.lazy(() => import('./pages/ActionsPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const DebatsPage = React.lazy(() => import('./pages/DebatsPage'));
const RessourcesPage = React.lazy(() => import('./pages/RessourcesPage'));
const CreateursPage = React.lazy(() => import('./pages/CreateursPage'));
const AnnuaireAssociationsPage = React.lazy(() => import('./pages/AnnuaireAssociationsPage'));
const CitoyenneteGuadeloupePage = React.lazy(() => import('./pages/CitoyenneteGuadeloupePage'));
const CapsulesVideosPage = React.lazy(() => import('./pages/CapsulesVideosPage'));
const Vote16AnsPage = React.lazy(() => import('./pages/Vote16AnsPage'));
const EcologiePolitiquePage = React.lazy(() => import('./pages/EcologiePolitiquePage'));
const LiberteExpressionPage = React.lazy(() => import('./pages/LiberteExpressionPage'));
const MediaAdminPage = React.lazy(() => import('./pages/MediaAdminPage'));

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <React.Suspense fallback={<div className="container py-16"><p>Chargement...</p></div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/actions" element={<ActionsPage />} />
          <Route path="/debats" element={<DebatsPage />} />
          <Route path="/ressources" element={<RessourcesPage />} />
          <Route path="/capsules-video" element={<CapsulesVideosPage />} />
          <Route path="/capsules-video/vote-16-ans" element={<Vote16AnsPage />} />
          <Route path="/capsules-video/ecologie-politique" element={<EcologiePolitiquePage />} />
          <Route path="/capsules-video/liberte-expression" element={<LiberteExpressionPage />} />
          <Route path="/admin/medias" element={<MediaAdminPage />} />
          <Route path="/ressources/annuaire-associations-guadeloupe" element={<AnnuaireAssociationsPage />} />
          <Route path="/createurs" element={<CreateursPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/citoyennete-guadeloupe" element={<CitoyenneteGuadeloupePage />} />
          {/* Pages légales (à créer plus tard) */}
          <Route path="/mentions-legales" element={<div className="container py-16"><h1 className="text-3xl font-bold">Mentions Légales</h1><p className="mt-4">Contenu à venir...</p></div>} />
          <Route path="/politique-confidentialite" element={<div className="container py-16"><h1 className="text-3xl font-bold">Politique de Confidentialité</h1><p className="mt-4">Contenu à venir...</p></div>} />
          <Route path="/cookies" element={<div className="container py-16"><h1 className="text-3xl font-bold">Gestion des Cookies</h1><p className="mt-4">Contenu à venir...</p></div>} />
          {/* Page 404 */}
          <Route path="*" element={
            <div className="container py-16 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Non Trouvée</h1>
              <p className="text-xl text-gray-600 mb-8">La page que vous cherchez n'existe pas.</p>
              <a href="/" className="btn-primary">Retour à l'accueil</a>
            </div>
          } />
        </Routes>
        </React.Suspense>
      </Layout>
    </Router>
  );
};

export default App;
