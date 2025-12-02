import React, { useState } from 'react';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Seo from '../components/Seo';

const AnnuaireAssociationsPage: React.FC = () => {
  const [selectedDomaine, setSelectedDomaine] = useState('tous');

  const domaines = [
    { id: 'tous', name: 'Toutes les associations', icon: '🏢' },
    { id: 'environnement', name: 'Environnement', icon: '🌱' },
    { id: 'jeunesse', name: 'Jeunesse', icon: '👥' },
    { id: 'egalite', name: 'Égalité & Inclusion', icon: '⚖️' },
    { id: 'culture', name: 'Culture & Éducation', icon: '🎭' },
    { id: 'solidarite', name: 'Solidarité', icon: '🤝' }
  ];

  const associations = [
    {
      id: 1,
      nom: 'Guadeloupe Environnement',
      domaine: 'environnement',
      description: 'Protection de la biodiversité et lutte contre la pollution marine',
      contact: {
        email: 'contact@guadeloupe-environnement.org',
        telephone: '0590 12 34 56',
        adresse: 'Pointe-à-Pitre, Guadeloupe'
      },
      actions: ['Nettoyage des plages', 'Sensibilisation scolaire', 'Protection des tortues'],
      siteWeb: 'https://guadeloupe-environnement.org',
      benevoles: 150,
      fondee: 2010
    },
    {
      id: 2,
      nom: 'Jeunesse Citoyenne 971',
      domaine: 'jeunesse',
      description: 'Accompagnement des jeunes dans leur engagement citoyen et professionnel',
      contact: {
        email: 'info@jeunesse971.fr',
        telephone: '0690 98 76 54',
        adresse: 'Basse-Terre, Guadeloupe'
      },
      actions: ['Formation citoyenne', 'Orientation professionnelle', 'Projets solidaires'],
      siteWeb: 'https://jeunesse-citoyenne-971.fr',
      benevoles: 75,
      fondee: 2015
    },
    {
      id: 3,
      nom: 'Égalité Femmes Guadeloupe',
      domaine: 'egalite',
      description: 'Promotion de l\'égalité femmes-hommes et lutte contre les violences',
      contact: {
        email: 'contact@egalite-femmes-gp.org',
        telephone: '0590 87 65 43',
        adresse: 'Les Abymes, Guadeloupe'
      },
      actions: ['Accompagnement juridique', 'Prévention violences', 'Sensibilisation égalité'],
      siteWeb: 'https://egalite-femmes-guadeloupe.org',
      benevoles: 45,
      fondee: 2008
    },
    {
      id: 4,
      nom: 'Culture Créole Vivante',
      domaine: 'culture',
      description: 'Préservation et transmission du patrimoine culturel guadeloupéen',
      contact: {
        email: 'info@culture-creole.gp',
        telephone: '0690 11 22 33',
        adresse: 'Saint-François, Guadeloupe'
      },
      actions: ['Ateliers traditionnels', 'Spectacles culturels', 'Éducation patrimoniale'],
      siteWeb: 'https://culture-creole-vivante.gp',
      benevoles: 90,
      fondee: 2005
    },
    {
      id: 5,
      nom: 'Solidarité Quartiers',
      domaine: 'solidarite',
      description: 'Lutte contre l\'exclusion et aide aux familles en difficulté',
      contact: {
        email: 'aide@solidarite-quartiers.org',
        telephone: '0590 44 55 66',
        adresse: 'Gosier, Guadeloupe'
      },
      actions: ['Aide alimentaire', 'Soutien scolaire', 'Insertion professionnelle'],
      siteWeb: 'https://solidarite-quartiers.org',
      benevoles: 120,
      fondee: 2012
    },
    {
      id: 6,
      nom: 'Océan Bleu Guadeloupe',
      domaine: 'environnement',
      description: 'Protection du milieu marin et sensibilisation aux enjeux océaniques',
      contact: {
        email: 'contact@ocean-bleu-gp.fr',
        telephone: '0690 33 44 55',
        adresse: 'Sainte-Anne, Guadeloupe'
      },
      actions: ['Plongée écologique', 'Études marines', 'Éco-tourisme'],
      siteWeb: 'https://ocean-bleu-guadeloupe.fr',
      benevoles: 60,
      fondee: 2018
    }
  ];

  const associationsFiltrees = selectedDomaine === 'tous' 
    ? associations 
    : associations.filter(assoc => assoc.domaine === selectedDomaine);

  return (
    <div className="space-y-16">
      <Seo 
        title="Annuaire des associations" 
        description="Répertoire des associations citoyennes de Guadeloupe – environnement, éducation, solidarité et engagement local."
      />
      {/* Section Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            📋 Annuaire des Associations
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Trouvez et contactez les associations partenaires de "Citoyen en Action" 
            pour vous engager concrètement en Guadeloupe.
          </p>
        </div>
      </section>

      {/* Section Filtres */}
      <section className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Filtrer par Domaine d'Action
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {domaines.map((domaine) => (
            <button
              key={domaine.id}
              onClick={() => setSelectedDomaine(domaine.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
                selectedDomaine === domaine.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-lg">{domaine.icon}</span>
              <span>{domaine.name}</span>
            </button>
          ))}
        </div>

        {/* Statistiques */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-2xl font-bold text-primary-600">{associations.length}</div>
              <div className="text-sm text-gray-600">Associations partenaires</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent-600">
                {associations.reduce((total, assoc) => total + assoc.benevoles, 0)}
              </div>
              <div className="text-sm text-gray-600">Bénévoles actifs</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-600">6</div>
              <div className="text-sm text-gray-600">Domaines d'action</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent-600">15+</div>
              <div className="text-sm text-gray-600">Années d'expérience moyenne</div>
            </div>
          </div>
        </div>

        {/* Liste des Associations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {associationsFiltrees.map((association) => (
            <Card key={association.id} className="hover:scale-105 transition-transform">
              <CardContent>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {association.nom}
                    </h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        association.domaine === 'environnement' ? 'bg-green-100 text-green-800' :
                        association.domaine === 'jeunesse' ? 'bg-blue-100 text-blue-800' :
                        association.domaine === 'egalite' ? 'bg-purple-100 text-purple-800' :
                        association.domaine === 'culture' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-pink-100 text-pink-800'
                      }`}>
                        {domaines.find(d => d.id === association.domaine)?.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        Fondée en {association.fondee}
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary-600">
                      {association.benevoles}
                    </div>
                    <div className="text-xs text-gray-500">bénévoles</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm">
                  {association.description}
                </p>

                {/* Actions */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Actions principales :</h4>
                  <div className="flex flex-wrap gap-1">
                    {association.actions.map((action, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {action}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Contact :</h4>
                  <div className="space-y-1 text-xs text-gray-600">
                    <div>📧 {association.contact.email}</div>
                    <div>📞 {association.contact.telephone}</div>
                    <div>📍 {association.contact.adresse}</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <a 
                    href={association.siteWeb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs flex-1 text-center"
                  >
                    🌐 Site Web
                  </a>
                  <a 
                    href={`mailto:${association.contact.email}?subject=Contact via Citoyen en Action`}
                    className="btn-outline text-xs flex-1 text-center border border-gray-300 text-gray-700 hover:bg-gray-50 px-3 py-2 rounded"
                  >
                    ✉️ Contacter
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Section Rejoindre */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🤝 Votre Association Souhaite Nous Rejoindre ?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Intégrez le réseau "Citoyen en Action" pour amplifier votre impact 
            et toucher plus de citoyens engagés en Guadeloupe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:secretariat@farorudy.fr?subject=Demande de partenariat - Association"
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              📧 Devenir partenaire
            </a>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
              📋 Critères de partenariat
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnnuaireAssociationsPage;