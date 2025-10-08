import React, { useState } from 'react';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';

const ActionsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('tous');

  const categories = [
    { id: 'tous', name: 'Toutes les actions', icon: '🌟' },
    { id: 'environnement', name: 'Environnement', icon: '🌱' },
    { id: 'solidarite', name: 'Solidarité', icon: '🤝' },
    { id: 'education', name: 'Éducation', icon: '📚' },
    { id: 'inclusion', name: 'Inclusion', icon: '🌍' }
  ];

  const actions = [
    {
      id: 1,
      title: 'Nettoyage des Berges de Seine',
      category: 'environnement',
      date: '15 Octobre 2024',
      location: 'Paris 4ème',
      participants: 45,
      status: 'upcoming',
      description: 'Rejoignez-nous pour nettoyer les berges de la Seine et sensibiliser à la protection de nos cours d\'eau.',
      image: '🏞️',
      impact: '2 tonnes de déchets collectés'
    },
    {
      id: 2,
      title: 'Distribution de Repas Solidaires',
      category: 'solidarite',
      date: '12 Octobre 2024',
      location: 'Lyon Centre',
      participants: 30,
      status: 'upcoming',
      description: 'Préparation et distribution de repas chauds pour les personnes en difficulté.',
      image: '🍲',
      impact: '200 repas distribués'
    },
    {
      id: 3,
      title: 'Ateliers Numériques Seniors',
      category: 'inclusion',
      date: '8 Octobre 2024',
      location: 'Marseille',
      participants: 25,
      status: 'completed',
      description: 'Formation aux outils numériques pour réduire la fracture numérique chez les seniors.',
      image: '💻',
      impact: '40 seniors formés'
    },
    {
      id: 4,
      title: 'Plantation d\'Arbres Urbains',
      category: 'environnement',
      date: '5 Octobre 2024',
      location: 'Toulouse',
      participants: 60,
      status: 'completed',
      description: 'Plantation participative pour reverdir la ville et lutter contre les îlots de chaleur.',
      image: '🌳',
      impact: '100 arbres plantés'
    },
    {
      id: 5,
      title: 'Soutien Scolaire Bénévole',
      category: 'education',
      date: '20 Octobre 2024',
      location: 'Bordeaux',
      participants: 35,
      status: 'upcoming',
      description: 'Aide aux devoirs et soutien scolaire pour les élèves en difficulté.',
      image: '✏️',
      impact: '80 élèves accompagnés'
    },
    {
      id: 6,
      title: 'Marché Solidaire Local',
      category: 'solidarite',
      date: '3 Octobre 2024',
      location: 'Lille',
      participants: 50,
      status: 'completed',
      description: 'Organisation d\'un marché proposant des produits locaux à prix accessible.',
      image: '🛒',
      impact: '300 familles aidées'
    }
  ];

  const filteredActions = selectedCategory === 'tous' 
    ? actions 
    : actions.filter(action => action.category === selectedCategory);

  const upcomingActions = actions.filter(action => action.status === 'upcoming').length;
  const completedActions = actions.filter(action => action.status === 'completed').length;
  const totalParticipants = actions.reduce((sum, action) => sum + action.participants, 0);

  return (
    <div className="space-y-16">
      {/* Section Hero */}
      <section className="bg-gradient-to-r from-accent-600 to-accent-800 text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nos Actions Citoyennes
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Découvrez toutes nos actions passées et à venir. Trouvez celle qui vous inspire 
            et rejoignez-nous pour faire la différence !
          </p>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center bg-primary-50 p-6 rounded-lg">
            <div className="text-4xl font-bold text-primary-600 mb-2">
              {upcomingActions}
            </div>
            <div className="text-lg text-gray-700">
              Actions à venir
            </div>
          </div>
          <div className="text-center bg-accent-50 p-6 rounded-lg">
            <div className="text-4xl font-bold text-accent-600 mb-2">
              {completedActions}
            </div>
            <div className="text-lg text-gray-700">
              Actions réalisées
            </div>
          </div>
          <div className="text-center bg-yellow-50 p-6 rounded-lg">
            <div className="text-4xl font-bold text-yellow-600 mb-2">
              {totalParticipants}
            </div>
            <div className="text-lg text-gray-700">
              Participants impliqués
            </div>
          </div>
        </div>
      </section>

      {/* Section Filtres */}
      <section className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Explorer Nos Actions
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Filtrez par catégorie pour trouver les actions qui vous correspondent.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Liste des Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActions.map((action) => (
            <Card key={action.id} className="overflow-hidden">
              <CardContent>
                {/* Header de la carte */}
                <div className={`p-6 ${action.status === 'completed' ? 'bg-gray-100' : 'bg-gradient-to-r from-primary-50 to-primary-100'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-4xl">{action.image}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      action.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {action.status === 'completed' ? 'Terminé' : 'À venir'}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {action.title}
                  </h3>
                </div>

                {/* Contenu de la carte */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm">
                    {action.description}
                  </p>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">📅</span>
                      <span>{action.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">📍</span>
                      <span>{action.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">👥</span>
                      <span>{action.participants} participants</span>
                    </div>
                  </div>

                  {action.status === 'completed' && (
                    <div className="bg-green-50 p-3 rounded-lg mb-4">
                      <div className="flex items-center text-green-800">
                        <span className="mr-2">🎯</span>
                        <span className="font-medium text-sm">{action.impact}</span>
                      </div>
                    </div>
                  )}

                  <Button 
                    className="w-full" 
                    variant={action.status === 'completed' ? 'secondary' : 'primary'}
                  >
                    {action.status === 'completed' ? 'Voir les résultats' : 'Participer'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Section Lives du Vendredi */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🎥 Participez aux Débats Citoyens
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Chaque vendredi à 20h, rejoignez nos lives TikTok pour débattre 
            des sujets qui vous tiennent à cœur !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://chat.whatsapp.com/votre-lien-groupe" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors text-lg font-medium"
            >
              📱 Rejoindre WhatsApp
            </a>
            <a 
              href="https://www.tiktok.com/@votre-compte" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-black hover:bg-gray-800 rounded-lg transition-colors text-lg font-medium"
            >
              🎥 Suivre sur TikTok
            </a>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="bg-gray-50 py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Vous Avez Une Idée d'Action ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Nous sommes toujours ouverts aux nouvelles initiatives citoyennes. 
            Proposez votre projet et mobilisons ensemble !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="primary">
              Proposer une action
            </Button>
            <Button size="lg" variant="outline">
              Devenir coordinateur
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActionsPage;