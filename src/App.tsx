import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ActionsPage from './pages/ActionsPage';
import ContactPage from './pages/ContactPage';
import DebatsPage from './pages/DebatsPage';
import RessourcesPage from './pages/RessourcesPage';
import CreateursPage from './pages/CreateursPage';
import AnnuaireAssociationsPage from './pages/AnnuaireAssociationsPage';
import CitoyenneteGuadeloupePage from './pages/CitoyenneteGuadeloupePage';
import CapsulesVideosPage from './pages/CapsulesVideosPage';
import Vote16AnsPage from './pages/Vote16AnsPage';
import EcologiePolitiquePage from './pages/EcologiePolitiquePage';
import LiberteExpressionPage from './pages/LiberteExpressionPage';
import MediaAdminPage from './pages/MediaAdminPage';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
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
      </Layout>
    </Router>
  );
};

export default App;
