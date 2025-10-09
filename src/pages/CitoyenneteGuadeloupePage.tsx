import React from 'react';
import { Link } from 'react-router-dom';

const CitoyenneteGuadeloupePage: React.FC = () => {
  const valeursCitoyennes = [
    {
      icone: "🌍",
      titre: "Identité Caribéenne",
      description: "Comprendre notre place dans l'archipel caribéen, entre héritage créole et citoyenneté française",
      points: [
        "Patrimoine culturel unique mêlant traditions africaines, européennes et amérindiennes",
        "Position géostratégique dans la Caraïbe",
        "Bilinguisme créole-français comme richesse identitaire"
      ]
    },
    {
      icone: "⚖️",
      titre: "Droits & Devoirs",
      description: "Connaître ses droits et assumer ses responsabilités de citoyen guadeloupéen",
      points: [
        "Droit de vote et participation aux élections locales, nationales et européennes",
        "Accès aux services publics et à la protection sociale",
        "Devoir de solidarité et d'engagement communautaire"
      ]
    },
    {
      icone: "🏛️",
      titre: "Institutions Locales",
      description: "Maîtriser le fonctionnement des institutions qui nous gouvernent",
      points: [
        "Collectivité territoriale de Guadeloupe et ses compétences",
        "Communes et intercommunalités",
        "Représentation au Parlement français et européen"
      ]
    },
    {
      icone: "🌱",
      titre: "Développement Durable",
      description: "Protéger notre environnement exceptionnel pour les générations futures",
      points: [
        "Préservation de la biodiversité tropicale",
        "Transition énergétique et autonomie",
        "Gestion des risques naturels (cyclones, séismes)"
      ]
    },
    {
      icone: "💼",
      titre: "Économie Solidaire",
      description: "Construire une économie au service des Guadeloupéens",
      points: [
        "Soutien à l'agriculture locale et au made in Gwada",
        "Développement du tourisme responsable",
        "Innovation et entrepreneuriat caribéen"
      ]
    },
    {
      icone: "🎓",
      titre: "Éducation Citoyenne",
      description: "Transmettre les valeurs républicaines adaptées à notre réalité",
      points: [
        "Histoire de l'esclavage et mémoire collective",
        "Laïcité dans un contexte multiculturel",
        "Éducation aux médias et lutte contre les fake news"
      ]
    }
  ];

  const defisContemporains = [
    {
      titre: "🏠 Crise du logement",
      description: "Accès au logement décent pour tous",
      actions: ["Favoriser l'habitat social", "Lutter contre l'habitat indigne", "Promouvoir l'éco-construction"]
    },
    {
      titre: "🚗 Mobilité durable", 
      description: "Réduire la dépendance à la voiture individuelle",
      actions: ["Développer les transports en commun", "Promouvoir les mobilités douces", "Aménager le territoire"]
    },
    {
      titre: "💸 Vie chère",
      description: "Améliorer le pouvoir d'achat des Guadeloupéens",
      actions: ["Circuits courts et agriculture locale", "Transparence sur les prix", "Économie sociale et solidaire"]
    },
    {
      titre: "👥 Cohésion sociale",
      description: "Lutter contre les inégalités et renforcer le vivre-ensemble",
      actions: ["Mixité sociale", "Insertion professionnelle", "Dialogue interculturel"]
    }
  ];

  const actionsConcretes = [
    "Participer aux conseils de quartier et assemblées citoyennes",
    "S'engager dans les associations locales",
    "Consommer responsable et privilégier les producteurs locaux",
    "Voter à toutes les élections",
    "Signaler les dysfonctionnements aux élus",
    "Participer aux débats publics et consultations citoyennes",
    "Transmettre l'histoire et la culture guadeloupéennes",
    "Protéger l'environnement au quotidien"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-green-600 via-blue-600 to-yellow-500 text-white py-20">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">
              🏝️ C'est quoi être citoyen en Guadeloupe ?
            </h1>
            <p className="text-xl mb-8 animate-fade-in-up delay-200">
              Entre héritage créole et République française, découvrons ensemble ce que signifie 
              être citoyen dans notre archipel des Antilles
            </p>
            <div className="animate-fade-in-up delay-300">
              <Link to="#valeurs" className="btn btn-lg bg-white text-green-600 hover:bg-gray-100 mr-4">
                📖 Découvrir nos valeurs
              </Link>
              <Link to="#agir" className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-green-600">
                🚀 Comment agir ?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              🗳️ Être citoyen guadeloupéen, c'est...
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="card text-center">
                <div className="text-4xl mb-4">🇬🇵</div>
                <h3 className="text-xl font-semibold mb-3">Vivre sa créolité</h3>
                <p className="text-gray-600">
                  Assumer fièrement notre identité créole tout en participant pleinement 
                  à la République française
                </p>
              </div>
              <div className="card text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-3">S'engager localement</h3>
                <p className="text-gray-600">
                  Participer activement à la vie de sa commune, de son quartier, 
                  de sa communauté
                </p>
              </div>
              <div className="card text-center">
                <div className="text-4xl mb-4">🌊</div>
                <h3 className="text-xl font-semibold mb-3">Penser global</h3>
                <p className="text-gray-600">
                  Contribuer aux enjeux caribéens, français et européens depuis 
                  notre territoire insulaire
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs citoyennes */}
      <section id="valeurs" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            📚 Les piliers de la citoyenneté guadeloupéenne
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {valeursCitoyennes.map((valeur, index) => (
              <div key={index} className="card hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{valeur.icone}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">{valeur.titre}</h3>
                    <p className="text-gray-600 mb-4">{valeur.description}</p>
                    <ul className="space-y-2">
                      {valeur.points.map((point, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span className="text-sm text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Défis contemporains */}
      <section className="py-16 bg-blue-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            ⚡ Les défis de notre époque
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
            En tant que citoyens guadeloupéens, nous devons faire face à des enjeux spécifiques 
            à notre territoire tout en contribuant aux grands défis de notre siècle.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {defisContemporains.map((defi, index) => (
              <div key={index} className="card bg-white">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{defi.titre}</h3>
                <p className="text-gray-600 mb-4">{defi.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-blue-600">Actions prioritaires :</h4>
                  <ul className="space-y-1">
                    {defi.actions.map((action, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="text-blue-500">▸</span>
                        <span className="text-sm text-gray-700">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Actions concrètes */}
      <section id="agir" className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">
            🚀 Comment être un citoyen actif ?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-center mb-12 opacity-90">
              Être citoyen, ce n'est pas seulement avoir des droits, c'est surtout agir 
              au quotidien pour améliorer la vie de tous en Guadeloupe.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {actionsConcretes.map((action, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white bg-opacity-10 rounded-lg p-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-yellow-400 text-green-800 rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-lg">{action}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            💬 Témoignages de citoyens engagés
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-6xl mb-4">👩‍🏫</div>
              <h3 className="text-xl font-bold mb-2">Marie, enseignante</h3>
              <p className="text-gray-600 italic">
                "Enseigner l'histoire de la Guadeloupe à nos jeunes, c'est leur donner 
                les clés pour être fiers de leur identité et citoyens du monde."
              </p>
            </div>
            <div className="card text-center">
              <div className="text-6xl mb-4">👨‍🌾</div>
              <h3 className="text-xl font-bold mb-2">Jean-Claude, agriculteur</h3>
              <p className="text-gray-600 italic">
                "Produire local, c'est nourrir nos compatriotes tout en préservant 
                notre terre pour nos enfants."
              </p>
            </div>
            <div className="card text-center">
              <div className="text-6xl mb-4">👩‍💼</div>
              <h3 className="text-xl font-bold mb-2">Sophie, élue locale</h3>
              <p className="text-gray-600 italic">
                "Représenter les Guadeloupéens, c'est porter leur voix tout en 
                gardant les pieds dans notre réalité insulaire."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">
              🌟 Rejoignez le mouvement citoyen !
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Ensemble, construisons une Guadeloupe plus juste, plus durable et plus solidaire. 
              Votre voix compte, votre action fait la différence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/actions" className="btn btn-lg bg-white text-orange-600 hover:bg-gray-100">
                📋 Découvrir nos actions
              </Link>
              <a 
                href="https://wa.me/590690570846?text=Je veux rejoindre le mouvement citoyen" 
                className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-orange-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Nous rejoindre sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CitoyenneteGuadeloupePage;