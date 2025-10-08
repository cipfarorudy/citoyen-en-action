import React, { useState } from 'react';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';

const DebatsPage: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState('S1');

  const programmeDebats = [
    {
      id: 'S1',
      semaine: 'Semaine 1',
      theme: 'C\'est quoi être citoyen en Guadeloupe ?',
      format: 'Capsule courte',
      objectif: 'Lancer le concept et inviter au débat',
      date: '15 octobre 2025',
      statut: 'À venir',
      description: 'Introduction aux valeurs républicaines et à l\'engagement citoyen spécifique à la Guadeloupe',
      sujets: ['Citoyenneté et outre-mer', 'Spécificités guadeloupéennes', 'Droits et devoirs locaux'],
      duree: '90 secondes',
      publication: 'Mardi 18h'
    },
    {
      id: 'S2',
      semaine: 'Semaine 2',
      theme: 'Le vote : droit, devoir ou option ?',
      format: 'Live 1h',
      objectif: 'Faire participer le public',
      date: '24 octobre 2025',
      statut: 'À venir',
      description: 'Débat interactif sur l\'importance du vote et l\'abstention élevée en Guadeloupe',
      sujets: ['Abstention en Guadeloupe', 'Vote obligatoire ?', 'Représentativité politique'],
      duree: '60 minutes',
      publication: 'Vendredi 19h30'
    },
    {
      id: 'S3',
      semaine: 'Semaine 3',
      theme: 'L\'école forme-t-elle encore des citoyens ?',
      format: 'Capsule',
      objectif: 'Réflexion sur l\'éducation civique',
      date: '29 octobre 2025',
      statut: 'À venir',
      description: 'Analyse du système éducatif et de la formation à la citoyenneté',
      sujets: ['Éducation civique à l\'école', 'Système français vs local', 'Formation des jeunes citoyens'],
      duree: '90 secondes',
      publication: 'Jeudi 18h'
    },
    {
      id: 'S4',
      semaine: 'Semaine 4',
      theme: 'Faut-il plus de jeunes dans la politique locale ?',
      format: 'Live',
      objectif: 'Engagement et représentativité',
      date: '31 octobre 2025',
      statut: 'À venir',
      description: 'Débat sur la représentation des jeunes dans les instances politiques guadeloupéennes',
      sujets: ['Jeunes en politique', 'Renouvellement générationnel', 'Participation locale'],
      duree: '60 minutes',
      publication: 'Vendredi 19h30'
    },
    {
      id: 'S5',
      semaine: 'Semaine 5',
      theme: 'Respect et vivre-ensemble : mythe ou réalité ?',
      format: 'Capsule',
      objectif: 'Créer de l\'interaction',
      date: '5 novembre 2025',
      statut: 'À venir',
      description: 'Réflexion sur le vivre-ensemble dans la société guadeloupéenne multiculturelle',
      sujets: ['Diversité culturelle', 'Respect mutuel', 'Cohésion sociale'],
      duree: '90 secondes',
      publication: 'Mardi 18h'
    },
    {
      id: 'S6',
      semaine: 'Semaine 6',
      theme: 'Les inégalités sociales en Guadeloupe',
      format: 'Live',
      objectif: 'Donner la parole à différents profils',
      date: '7 novembre 2025',
      statut: 'À venir',
      description: 'Débat sur les inégalités spécifiques à l\'outre-mer et les solutions possibles',
      sujets: ['Inégalités territoriales', 'Vie chère', 'Opportunités locales'],
      duree: '60 minutes',
      publication: 'Vendredi 19h30'
    },
    {
      id: 'S7',
      semaine: 'Semaine 7',
      theme: 'Les médias et la vérité : qui croire ?',
      format: 'Capsule',
      objectif: 'Esprit critique et info',
      date: '12 novembre 2025',
      statut: 'À venir',
      description: 'Formation à l\'esprit critique face à l\'information et aux fake news',
      sujets: ['Fake news', 'Sources fiables', 'Médias locaux vs nationaux'],
      duree: '90 secondes',
      publication: 'Jeudi 18h'
    },
    {
      id: 'S8',
      semaine: 'Semaine 8',
      theme: 'L\'écologie et les citoyens d\'Outre-mer',
      format: 'Live',
      objectif: 'Relier environnement et civisme',
      date: '14 novembre 2025',
      statut: 'À venir',
      description: 'Enjeux écologiques spécifiques aux îles et responsabilité citoyenne',
      sujets: ['Changement climatique et îles', 'Biodiversité caraïbe', 'Actions éco-citoyennes'],
      duree: '60 minutes',
      publication: 'Vendredi 19h30'
    },
    {
      id: 'S9',
      semaine: 'Semaine 9',
      theme: 'Les droits des femmes aujourd\'hui',
      format: 'Capsule',
      objectif: 'Sensibilisation égalité',
      date: '19 novembre 2025',
      statut: 'À venir',
      description: 'État des lieux de l\'égalité femmes-hommes en Guadeloupe et dans la société',
      sujets: ['Égalité professionnelle', 'Violences faites aux femmes', 'Parité politique'],
      duree: '90 secondes',
      publication: 'Mardi 18h'
    },
    {
      id: 'S10',
      semaine: 'Semaine 10',
      theme: 'Les jeunes et l\'emploi local',
      format: 'Live',
      objectif: 'Thème économique & social',
      date: '21 novembre 2025',
      statut: 'À venir',
      description: 'Débat sur l\'insertion professionnelle des jeunes en Guadeloupe',
      sujets: ['Chômage des jeunes', 'Formation vs besoins locaux', 'Entrepreneuriat local'],
      duree: '60 minutes',
      publication: 'Vendredi 19h30'
    },
    {
      id: 'S11',
      semaine: 'Semaine 11',
      theme: 'La religion et la République',
      format: 'Capsule',
      objectif: 'Sujet sensible, approche équilibrée',
      date: '26 novembre 2025',
      statut: 'À venir',
      description: 'Laïcité et diversité religieuse dans une société plurielle comme la Guadeloupe',
      sujets: ['Laïcité en outre-mer', 'Diversité religieuse', 'Respect et neutralité'],
      duree: '90 secondes',
      publication: 'Jeudi 18h'
    },
    {
      id: 'S12',
      semaine: 'Semaine 12',
      theme: 'Bilan citoyen : ce qu\'on a appris ensemble',
      format: 'Live',
      objectif: 'Clôture du cycle + appel à action',
      date: '28 novembre 2025',
      statut: 'À venir',
      description: 'Bilan participatif du cycle de débats et perspectives pour l\'avenir',
      sujets: ['Apprentissages collectifs', 'Actions concrètes', 'Suite du mouvement'],
      duree: '60 minutes',
      publication: 'Vendredi 19h30'
    }
  ];

  const formats = [
    {
      type: 'Capsules "Le Saviez-vous ?"',
      duree: '1-3 minutes',
      description: 'Expliquer un principe civique de manière simple',
      exemple: '"C\'est quoi la laïcité ?"',
      icon: '💡'
    },
    {
      type: 'Débat express',
      duree: '2-3 minutes',
      description: 'Question clivante avec 2 arguments opposés',
      exemple: '"Faut-il rendre le vote obligatoire ?"',
      icon: '⚡'
    },
    {
      type: 'Réponse à un commentaire',
      duree: '1-2 minutes',
      description: 'Créer le dialogue avec la communauté',
      exemple: 'Répondre aux questions des abonnés',
      icon: '💬'
    },
    {
      type: 'Lives débats',
      duree: '30-60 minutes',
      description: 'Débats en direct avec invités',
      exemple: 'Tables citoyennes avec élus, profs, associations',
      icon: '🎥'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Section Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            💬 Citoyen en Action
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-semibold">
            "La parole du peuple, pour un avenir conscient."
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            🗣️ Débats citoyens en Guadeloupe • 🎓 Comprendre, échanger, agir • 🎥 Lives & capsules sur la vie civique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.tiktok.com/@citoyenaction971" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-lg bg-black hover:bg-gray-800"
            >
              🎥 Suivre sur TikTok
            </a>
            <a 
              href="https://chat.whatsapp.com/votre-lien-groupe" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-lg bg-green-600 hover:bg-green-700"
            >
              📱 Rejoindre WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Section Identité */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Notre Mission
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent>
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Public Cible
              </h3>
              <p className="text-gray-600">
                <strong>Jeunes Guadeloupéens (16-30 ans)</strong><br/>
                Focus sur les enjeux locaux avec ouverture nationale
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent>
              <div className="text-6xl mb-4">🗣️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Ton & Approche
              </h3>
              <p className="text-gray-600">
                <strong>Engagé et accessible</strong><br/>
                Sérieux sur le fond, dynamique dans la forme
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent>
              <div className="text-6xl mb-4">🇬🇵</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Ancrage Local
              </h3>
              <p className="text-gray-600">
                <strong>Guadeloupe d'abord</strong><br/>
                Références culturelles et enjeux territoriaux
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section Formats */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Nos Formats de Débats
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Différents types de contenus pour s'adapter à tous les goûts et stimuler l'engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {formats.map((format, index) => (
              <Card key={index} className="hover:scale-105 transition-transform">
                <CardContent>
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{format.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        {format.type}
                      </h3>
                      <p className="text-sm font-medium text-primary-600 mb-2">
                        Durée : {format.duree}
                      </p>
                      <p className="text-gray-600 mb-3">
                        {format.description}
                      </p>
                      <div className="bg-gray-100 p-2 rounded text-sm italic">
                        Exemple : {format.exemple}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Programme */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Programme des 4 Premières Semaines
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Calendrier détaillé de nos débats citoyens pour bien commencer.
          </p>
        </div>

        {/* Sélecteur de semaine */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {programmeDebats.map((semaine) => (
            <button
              key={semaine.id}
              onClick={() => setSelectedWeek(semaine.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedWeek === semaine.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {semaine.semaine}
            </button>
          ))}
        </div>

        {/* Détail de la semaine sélectionnée */}
        {programmeDebats
          .filter(semaine => semaine.id === selectedWeek)
          .map((semaine) => (
            <Card key={semaine.id} className="max-w-4xl mx-auto">
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">📅</span>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {semaine.theme}
                        </h3>
                        <p className="text-gray-600">{semaine.date}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center">
                        <span className="font-semibold text-gray-700 w-20">Format:</span>
                        <span className="text-primary-600">{semaine.format}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-semibold text-gray-700 w-20">Durée:</span>
                        <span className="text-gray-600">{semaine.duree}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-semibold text-gray-700 w-20">Objectif:</span>
                        <span className="text-accent-600">{semaine.objectif}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">
                      {semaine.description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-gray-900">
                      Sujets abordés :
                    </h4>
                    <ul className="space-y-2">
                      {semaine.sujets.map((sujet, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span className="text-gray-600">{sujet}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          semaine.statut === 'À venir' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {semaine.statut}
                        </span>
                        <Button size="sm" variant="primary">
                          Programmer un rappel
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
      </section>

      {/* Section CTA */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Rejoignez la Communauté !
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Participez aux débats, exprimez vos opinions et contribuez à construire 
            une démocratie participative en Guadeloupe.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl mb-2">🎥</div>
              <h3 className="font-bold mb-2">Suivez les Lives</h3>
              <p className="text-sm opacity-90">Chaque vendredi à 20h sur TikTok</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl mb-2">💬</div>
              <h3 className="font-bold mb-2">Rejoignez WhatsApp</h3>
              <p className="text-sm opacity-90">Discussions et notifications</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl mb-2">🗣️</div>
              <h3 className="font-bold mb-2">Proposez des Sujets</h3>
              <p className="text-sm opacity-90">Vos idées de débats comptent</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DebatsPage;