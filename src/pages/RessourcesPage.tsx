import React, { useState } from 'react';
import Card, { CardContent } from '../components/ui/Card';

const RessourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('tous');

  const categories = [
    { id: 'tous', name: 'Toutes les ressources', icon: '📚' },
    { id: 'civisme', name: 'Éducation civique', icon: '🏛️' },
    { id: 'droits', name: 'Droits & Devoirs', icon: '⚖️' },
    { id: 'democratie', name: 'Démocratie', icon: '🗳️' },
    { id: 'guadeloupe', name: 'Spécial Guadeloupe', icon: '🇬🇵' }
  ];

  const fiches = [
    {
      id: 1,
      titre: "C'est quoi la laïcité ?",
      category: 'civisme',
      niveau: 'Débutant',
      duree: '3 min',
      description: 'Comprendre le principe de laïcité à la française et son application en outre-mer',
      points: [
        'Séparation de l\'Église et de l\'État depuis 1905',
        'Neutralité religieuse dans l\'espace public',
        'Liberté de conscience pour tous',
        'Application spécifique en Guadeloupe'
      ],
      exemples: [
        '🏫 Pas de signes religieux dans les écoles publiques',
        '🏛️ Mairies neutres religieusement',
        '👥 Égalité de traitement de toutes les religions'
      ],
      debat: 'Faut-il adapter la laïcité aux spécificités ultramarines ?',
      sources: ['Constitution française', 'Loi de 1905', 'Code de l\'éducation']
    },
    {
      id: 2,
      titre: "Le vote à 16 ans : pour ou contre ?",
      category: 'democratie',
      niveau: 'Intermédiaire',
      duree: '4 min',
      description: 'Analyser les arguments pour et contre l\'abaissement de l\'âge du vote',
      points: [
        'Maturité politique des jeunes',
        'Enjeux qui les concernent directement',
        'Exemples dans d\'autres pays',
        'Impact sur la participation électorale'
      ],
      exemples: [
        '✅ POUR: Les jeunes payent des impôts indirects',
        '✅ POUR: Ils vivent les conséquences des décisions',
        '❌ CONTRE: Manque d\'expérience de vie',
        '❌ CONTRE: Influence familiale trop forte'
      ],
      debat: 'La maturité se mesure-t-elle à l\'âge ou à l\'engagement ?',
      sources: ['Assemblée nationale', 'Études européennes', 'Sondages jeunesse']
    },
    {
      id: 3,
      titre: "Les collectivités territoriales en Guadeloupe",
      category: 'guadeloupe',
      niveau: 'Débutant',
      duree: '3 min',
      description: 'Comprendre l\'organisation administrative spécifique de la Guadeloupe',
      points: [
        'Région et Département fusionnés',
        'Collectivité territoriale unique',
        'Compétences spéciales d\'outre-mer',
        'Relations avec l\'État français'
      ],
      exemples: [
        '🏛️ CTG : Collectivité territoriale de Guadeloupe',
        '🗺️ Compétences : éducation, transport, développement',
        '🇪🇺 Fonds européens spécifiques (FEDER, FSE)'
      ],
      debat: 'Plus d\'autonomie ou plus d\'intégration à la France ?',
      sources: ['Code général des collectivités', 'Loi NOTRe', 'Statut d\'outre-mer']
    },
    {
      id: 4,
      titre: "Liberté d'expression : jusqu'où peut-on aller ?",
      category: 'droits',
      niveau: 'Avancé',
      duree: '5 min',
      description: 'Les limites légales et morales de la liberté d\'expression',
      points: [
        'Liberté fondamentale mais pas absolue',
        'Limites légales (diffamation, incitation)',
        'Responsabilité sur les réseaux sociaux',
        'Équilibre avec le respect d\'autrui'
      ],
      exemples: [
        '🚫 Interdit : Propos racistes, antisémites',
        '🚫 Interdit : Incitation à la violence',
        '✅ Autorisé : Critique politique, débat d\'idées',
        '⚠️ Attention : Fake news, désinformation'
      ],
      debat: 'Faut-il plus réguler les réseaux sociaux ?',
      sources: ['Déclaration des droits de l\'homme', 'Code pénal', 'Jurisprudence']
    },
    {
      id: 5,
      titre: "L'égalité femmes-hommes en politique",
      category: 'democratie',
      niveau: 'Intermédiaire',
      duree: '4 min',
      description: 'Parité et représentation dans la vie politique française',
      points: [
        'Lois sur la parité depuis 2000',
        'Évolution de la représentation féminine',
        'Situation en Guadeloupe',
        'Obstacles persistants'
      ],
      exemples: [
        '📊 2000 : Loi constitutionnelle sur la parité',
        '📈 Progrès : 39% de femmes à l\'Assemblée (2022)',
        '🇬🇵 Guadeloupe : Plusieurs femmes élues importantes'
      ],
      debat: 'La parité obligatoire est-elle la bonne solution ?',
      sources: ['Haut Conseil à l\'égalité', 'INSEE', 'Assemblée nationale']
    },
    {
      id: 7,
      titre: "C'est quoi être citoyen en Guadeloupe ?",
      category: 'guadeloupe',
      niveau: 'Débutant',
      duree: '2 min',
      description: 'Comprendre ce que signifie vraiment la citoyenneté dans le contexte guadeloupéen',
      points: [
        'Porter l\'histoire de nos ancêtres (esclaves, marrons, travailleurs immigrés)',
        'Agir pour une société plus juste aujourd\'hui',
        'Parler créole sans complexe',
        'Voter en conscience et protéger l\'environnement',
        'Exiger l\'égalité et débattre des enjeux locaux'
      ],
      exemples: [
        '🇬� Citoyenneté = fierté + mémoire + engagement',
        '🗳️ Voter en conscience pour l\'autonomie',
        '� Protéger nos mangroves et nos mers',
        '💬 Débattre sur TikTok, Facebook et dans la rue'
      ],
      debat: 'Comment vis-tu ta citoyenneté guadeloupéenne ?',
      sources: ['Histoire de la Guadeloupe', 'Mouvement Citoyen en Action', 'Constitution française']
    }
  ];

  const filteredFiches = selectedCategory === 'tous' 
    ? fiches 
    : fiches.filter(fiche => fiche.category === selectedCategory);

  return (
    <div className="space-y-16">
      {/* Section Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            📚 Ressources Citoyennes
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Fiches pédagogiques "Le Saviez-vous ?" pour comprendre les enjeux civiques 
            et alimenter nos débats sur TikTok.
          </p>
        </div>
      </section>

      {/* Section Filtres */}
      <section className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Explorer par Thème
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Liste des Fiches */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredFiches.map((fiche) => (
            <Card key={fiche.id} className="hover:scale-105 transition-transform">
              <CardContent>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {fiche.titre}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className={`px-2 py-1 rounded-full ${
                        fiche.niveau === 'Débutant' ? 'bg-green-100 text-green-800' :
                        fiche.niveau === 'Intermédiaire' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {fiche.niveau}
                      </span>
                      <span className="text-gray-600">⏱️ {fiche.duree}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm">
                  {fiche.description}
                </p>

                {/* Points clés */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Points clés :</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {fiche.points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exemples concrets */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Exemples concrets :</h4>
                  <div className="space-y-1">
                    {fiche.exemples.map((exemple, index) => (
                      <div key={index} className="text-sm bg-gray-50 p-2 rounded">
                        {exemple}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Question de débat */}
                <div className="bg-purple-50 p-3 rounded-lg mb-4">
                  <h4 className="font-semibold text-purple-800 mb-1">💭 Pour débattre :</h4>
                  <p className="text-sm text-purple-700 italic">
                    {fiche.debat}
                  </p>
                </div>

                {/* Sources */}
                <div className="text-xs text-gray-500">
                  <strong>Sources :</strong> {fiche.sources.join(', ')}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Section Capsules Réseaux Sociaux */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              🎥 Capsules pour Réseaux Sociaux
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Contenus courts et percutants pour TikTok, Facebook et Instagram. 
              Partagez ces capsules pour sensibiliser votre communauté !
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="hover:scale-105 transition-transform">
              <CardContent className="p-8">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🇬🇵</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    C'est quoi être citoyen en Guadeloupe ?
                  </h3>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">TikTok / Facebook</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">⏱️ 45 secondes</span>
                  </div>
                </div>

                {/* Contenu de la capsule */}
                <div className="bg-white rounded-lg p-6 mb-6 shadow-inner">
                  <div className="text-center mb-4">
                    <span className="text-2xl">🎵</span>
                    <p className="text-sm text-gray-600 italic">Musique douce en fond – zouk ou gwoka moderne</p>
                  </div>

                  <div className="space-y-4 text-center">
                    <p className="text-lg font-medium text-gray-800">
                      Être citoyen en Guadeloupe,<br/>
                      ce n'est pas juste avoir un passeport français.
                    </p>

                    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg">
                      <p className="text-gray-700">
                        C'est <strong>porter en soi</strong> l'histoire de nos ancêtres — esclaves, marrons, travailleurs immigrés —<br/>
                        et <strong>agir aujourd'hui</strong> pour une société plus juste.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-yellow-50 p-3 rounded">
                        🗣️ <strong>Parler créole</strong> sans complexe
                      </div>
                      <div className="bg-blue-50 p-3 rounded">
                        🗳️ <strong>Voter</strong> en conscience
                      </div>
                      <div className="bg-green-50 p-3 rounded">
                        🌿 <strong>Protéger</strong> nos mangroves et nos mers
                      </div>
                      <div className="bg-purple-50 p-3 rounded">
                        ✊ <strong>Exiger</strong> l'égalité, ici comme ailleurs
                      </div>
                    </div>

                    <p className="text-gray-700">
                      C'est aussi <strong>débattre</strong> — dans la rue, en classe…<br/>
                      ou sur <strong>TikTok</strong> et <strong>Facebook</strong> ! 📱
                    </p>

                    <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg">
                      <p className="text-lg font-semibold text-gray-800">
                        Parce que la citoyenneté, en Guadeloupe,<br/>
                        se vit avec <strong>fierté</strong>, <strong>mémoire</strong>… et <strong>engagement</strong>.
                      </p>
                    </div>

                    <div className="border-t pt-4">
                      <p className="text-xl font-bold text-gray-900 mb-2">
                        ✊ Et toi, comment tu vis ta citoyenneté ?
                      </p>
                      <p className="text-gray-600">👇 Partage ton point de vue en commentaire !</p>
                    </div>
                  </div>
                </div>

                {/* Hashtags */}
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">📍 Hashtags suggérés :</h4>
                  <p className="text-sm text-gray-700">
                    #CitoyennetéEnGuadeloupe #QuiSuisJeCitoyen #Guadeloupe #MémoireEtAvenir #EngagementLocal
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => navigator.clipboard.writeText(`Être citoyen en Guadeloupe, ce n'est pas juste avoir un passeport français. C'est porter en soi l'histoire de nos ancêtres — esclaves, marrons, travailleurs immigrés — et agir aujourd'hui pour une société plus juste. C'est parler créole sans complexe, voter en conscience, protéger nos mangroves et nos mers, et exiger l'égalité, ici comme ailleurs. C'est aussi débattre — dans la rue, en classe… ou sur TikTok et Facebook ! Parce que la citoyenneté, en Guadeloupe, se vit avec fierté, mémoire… et engagement. ✊ Et toi, comment tu vis ta citoyenneté ? 👇 Partage ton point de vue en commentaire ! #CitoyennetéEnGuadeloupe #QuiSuisJeCitoyen #Guadeloupe #MémoireEtAvenir #EngagementLocal`)}
                    className="btn-primary bg-blue-600 hover:bg-blue-700"
                  >
                    📋 Copier le texte
                  </button>
                  <a
                    href="https://www.tiktok.com/@farorudy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary bg-black hover:bg-gray-800"
                  >
                    🎵 Voir sur TikTok
                  </a>
                  <a
                    href="https://www.facebook.com/farorudy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary bg-blue-700 hover:bg-blue-800"
                  >
                    📘 Partager sur Facebook
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Ressources Utiles */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              📋 Ressources Utiles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Outils pratiques et guides pour passer à l'action concrète en Guadeloupe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="hover:scale-105 transition-transform">
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl mb-4">📖</div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">
                    Livret du Citoyen
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Guide officiel du gouvernement de Guadeloupe pour comprendre vos droits et devoirs de citoyen.
                  </p>
                  <a
                    href="https://www.guadeloupe.gouv.fr/contenu/telechargement/7719/57332/file/Livret%20du%20citoyen.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                  >
                    📄 Consulter le livret
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform">
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl mb-4">♻️</div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">
                    Guide du Tri en Guadeloupe
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Mode d'emploi complet pour bien trier ses déchets selon les spécificités locales.
                  </p>
                  <a
                    href="/ressources/guide-tri-guadeloupe.pdf"
                    className="btn-primary text-sm"
                    download
                  >
                    📄 Télécharger le guide
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform">
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl mb-4">🗺️</div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">
                    Carte des Points de Collecte
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Localisation interactive de tous les points de recyclage et collecte sélective.
                  </p>
                  <a 
                    href="/ressources/carte-collecte-guadeloupe"
                    className="btn-primary text-sm"
                  >
                    🗺️ Voir la carte
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform">
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl mb-4">📝</div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">
                    Modèle de Pétition Locale
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Template prêt à utiliser pour lancer vos propres pétitions citoyennes.
                  </p>
                  <a 
                    href="/ressources/modele-petition-locale.docx"
                    className="btn-primary text-sm"
                    download
                  >
                    📄 Télécharger le modèle
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform">
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl mb-4">📞</div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">
                    Contacts des Associations
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Répertoire complet des associations partenaires en Guadeloupe.
                  </p>
                  <a 
                    href="/ressources/annuaire-associations-guadeloupe"
                    className="btn-primary text-sm"
                  >
                    📋 Consulter l'annuaire
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-gradient-to-r from-accent-600 to-primary-600 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">💡 Besoin d'Aide ?</h3>
            <p className="mb-6 opacity-90">
              Nos bénévoles peuvent vous accompagner dans vos démarches citoyennes !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:secretariat@farorudy.fr?subject=Demande d'accompagnement - Citoyen en Action"
                className="bg-white text-accent-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                📧 Demander un accompagnement
              </a>
              <a 
                href="https://chat.whatsapp.com/votre-lien-groupe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                💬 Rejoindre le groupe d'entraide
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Comment Utiliser */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Comment Utiliser Ces Fiches ?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardContent>
                <div className="text-5xl mb-4">🎥</div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">
                  Avant les Lives
                </h3>
                <p className="text-gray-600 text-sm">
                  Lisez la fiche correspondante pour bien comprendre les enjeux 
                  avant de participer au débat TikTok.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent>
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">
                  Pour Argumenter
                </h3>
                <p className="text-gray-600 text-sm">
                  Utilisez les points clés et exemples pour enrichir vos 
                  arguments dans les discussions WhatsApp ou TikTok.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent>
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">
                  Pour Approfondir
                </h3>
                <p className="text-gray-600 text-sm">
                  Consultez les sources mentionnées pour aller plus loin 
                  dans votre réflexion citoyenne.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proposez Vos Sujets !
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Vous avez une question civique ? Un sujet à débattre ? 
            Proposez-nous vos idées pour les prochaines fiches "Le Saviez-vous ?"
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://chat.whatsapp.com/votre-lien-groupe" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-lg bg-green-600 hover:bg-green-700"
            >
              📱 Proposer sur WhatsApp
            </a>
            <a 
              href="mailto:secretariat@farorudy.fr?subject=Proposition de sujet - Citoyen en Action"
              className="btn-primary btn-lg bg-white text-indigo-600 hover:bg-gray-100"
            >
              ✉️ Envoyer par email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RessourcesPage;