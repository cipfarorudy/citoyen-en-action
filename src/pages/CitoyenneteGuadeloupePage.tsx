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

    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-50 font-sans">
      {/* Hero Section Modernisée */}
      <section className="hero bg-gradient-to-br from-yellow-400 via-cyan-500 to-green-600 text-white py-24 relative overflow-hidden animate-fade-in shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40 bg-repeat bg-[url('https://svgshare.com/i/14uA.svg')]"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 animate-fade-in-up">
              <span className="inline-block text-[7rem] drop-shadow-2xl animate-bounce">🏝️</span>
            </div>
            <h1 className="text-7xl font-extrabold mb-8 tracking-tight animate-fade-in-up font-poppins text-shadow-xl">
              C'est quoi être citoyen en Guadeloupe ?
            </h1>
            <p className="text-3xl mb-10 animate-fade-in-up delay-200 font-semibold opacity-95 text-shadow-lg">
              Entre héritage créole et République française,<br />
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-xl text-yellow-200 font-bold">Découvrons ensemble ce que signifie être citoyen dans notre archipel des Antilles.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-300">
              <Link to="#valeurs" className="btn btn-lg bg-white text-cyan-700 font-extrabold shadow-2xl hover:bg-yellow-100 hover:scale-105 transition-all border-4 border-cyan-400">
                📖 Découvrir nos valeurs
              </Link>
              <Link to="#agir" className="btn btn-lg bg-yellow-400 text-white font-extrabold shadow-2xl hover:bg-white hover:text-yellow-500 border-4 border-yellow-400 hover:scale-105 transition-all">
                🚀 Comment agir ?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction modernisée */}
      <section className="py-16 bg-gradient-to-r from-white via-blue-50 to-green-100 animate-fade-in">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-10 text-cyan-700 tracking-tight animate-fade-in-up">
              🗳️ Être citoyen guadeloupéen, c'est...
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="card text-center bg-white shadow-lg rounded-xl p-8 hover:scale-105 transition-transform duration-300 border-t-4 border-cyan-400 animate-fade-in-up">
                <div className="text-5xl mb-4 animate-bounce">🇬🇵</div>
                <h3 className="text-2xl font-bold mb-3 text-cyan-700">Vivre sa créolité</h3>
                <p className="text-gray-600 font-medium">
                  Assumer fièrement notre identité créole tout en participant pleinement 
                  à la République française
                </p>
              </div>
              <div className="card text-center bg-white shadow-lg rounded-xl p-8 hover:scale-105 transition-transform duration-300 border-t-4 border-green-400 animate-fade-in-up delay-100">
                <div className="text-5xl mb-4 animate-bounce">🤝</div>
                <h3 className="text-2xl font-bold mb-3 text-green-700">S'engager localement</h3>
                <p className="text-gray-600 font-medium">
                  Participer activement à la vie de sa commune, de son quartier, 
                  de sa communauté
                </p>
              </div>
              <div className="card text-center bg-white shadow-lg rounded-xl p-8 hover:scale-105 transition-transform duration-300 border-t-4 border-yellow-400 animate-fade-in-up delay-200">
                <div className="text-5xl mb-4 animate-bounce">🌊</div>
                <h3 className="text-2xl font-bold mb-3 text-yellow-700">Penser global</h3>
                <p className="text-gray-600 font-medium">
                  Contribuer aux enjeux caribéens, français et européens depuis 
                  notre territoire insulaire
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs citoyennes modernisées */}
      <section id="valeurs" className="py-16 bg-gradient-to-b from-blue-50 to-white animate-fade-in">
        <div className="container">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-green-700 tracking-tight animate-fade-in-up">
            📚 Les piliers de la citoyenneté guadeloupéenne
          </h2>
          <div className="grid lg:grid-cols-2 gap-10">
            {valeursCitoyennes.map((valeur, index) => (
              <div key={index} className="card bg-white rounded-2xl shadow-xl p-8 hover:scale-[1.03] transition-transform duration-300 border-l-8 border-green-400 animate-fade-in-up">
                <div className="flex items-start space-x-4">
                  <div className="text-5xl drop-shadow-lg animate-bounce min-w-[3rem]" aria-hidden="true">{valeur.icone}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-extrabold mb-3 text-green-700">{valeur.titre}</h3>
                    <p className="text-gray-600 mb-4 font-medium">{valeur.description}</p>
                    <ul className="space-y-2">
                      {valeur.points.map((point, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-green-500 mt-1 font-bold">✓</span>
                          <span className="text-base text-gray-700">{point}</span>
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

      {/* Défis contemporains modernisés */}
      <section className="py-16 bg-gradient-to-r from-blue-200 via-cyan-100 to-green-100 animate-fade-in">
        <div className="container">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-700 tracking-tight animate-fade-in-up">
            ⚡ Les défis de notre époque
          </h2>
          <p className="text-2xl text-center mb-12 text-cyan-700 max-w-3xl mx-auto font-medium animate-fade-in-up">
            En tant que citoyens guadeloupéens, nous sommes les acteurs du changement !<br />
            Relevons ensemble les grands défis de notre territoire pour une Guadeloupe plus forte et solidaire.
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            {defisContemporains.map((defi, index) => (
              <div key={index} className="card bg-white rounded-2xl shadow-xl p-8 border-l-8 border-blue-400 hover:scale-[1.03] transition-transform duration-300 animate-fade-in-up">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl animate-bounce drop-shadow-lg">{defi.titre.split(' ')[0]}</span>
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold text-sm shadow">Défi citoyen</span>
                </div>
                <h3 className="text-xl font-extrabold mb-3 text-blue-700">{defi.titre.replace(/^[^ ]+ /, '')}</h3>
                <p className="text-gray-600 mb-4 font-medium">{defi.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-cyan-600">Actions prioritaires :</h4>
                  <ul className="space-y-1">
                    {defi.actions.map((action, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="text-green-500 font-bold">✔</span>
                        <span className="text-base text-gray-700 font-medium">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Actions concrètes modernisées */}
      <section id="agir" className="py-16 bg-gradient-to-r from-green-500 via-cyan-400 to-blue-500 text-white animate-fade-in">
        <div className="container">
          <h2 className="text-4xl font-extrabold text-center mb-12 animate-fade-in-up">
            🚀 Comment être un citoyen actif ?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl text-center mb-12 opacity-95 font-medium animate-fade-in-up">
              Être citoyen, c'est agir chaque jour pour améliorer la vie de tous en Guadeloupe.<br />
              <span className="inline-block bg-yellow-300 text-green-900 px-3 py-1 rounded-full font-bold shadow ml-2">#AgirEnsemble</span>
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {actionsConcretes.map((action, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white bg-opacity-20 rounded-xl p-5 shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-yellow-400 text-green-800 rounded-full flex items-center justify-center font-extrabold text-xl shadow-lg animate-bounce">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-lg font-bold text-white drop-shadow-lg">{action}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center animate-fade-in-up">
              <span className="inline-block bg-white text-green-700 px-6 py-3 rounded-full font-bold text-xl shadow-lg border-2 border-green-400 hover:bg-green-100 transition-all cursor-pointer">
                ✊ Je m'engage pour ma Guadeloupe !
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages modernisés */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 via-white to-green-50 animate-fade-in">
        <div className="container">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-yellow-700 tracking-tight animate-fade-in-up">
            💬 Témoignages de citoyens engagés
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="card bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300 animate-fade-in-up">
              <div className="flex flex-col items-center mb-4">
                <div className="w-20 h-20 rounded-full bg-yellow-200 flex items-center justify-center text-6xl shadow-lg mb-2 animate-bounce">👩‍🏫</div>
                <span className="font-bold text-yellow-700">Marie</span>
                <span className="text-sm text-gray-500">Enseignante</span>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-4 text-gray-700 italic shadow">
                « Enseigner l'histoire de la Guadeloupe à nos jeunes, c'est leur donner les clés pour être fiers de leur identité et citoyens du monde. »
              </div>
            </div>
            <div className="card bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-100">
              <div className="flex flex-col items-center mb-4">
                <div className="w-20 h-20 rounded-full bg-green-200 flex items-center justify-center text-6xl shadow-lg mb-2 animate-bounce">👨‍🌾</div>
                <span className="font-bold text-green-700">Jean-Claude</span>
                <span className="text-sm text-gray-500">Agriculteur</span>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 rounded-xl p-4 text-gray-700 italic shadow">
                « Produire local, c'est nourrir nos compatriotes tout en préservant notre terre pour nos enfants. »
              </div>
            </div>
            <div className="card bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-200">
              <div className="flex flex-col items-center mb-4">
                <div className="w-20 h-20 rounded-full bg-cyan-200 flex items-center justify-center text-6xl shadow-lg mb-2 animate-bounce">👩‍💼</div>
                <span className="font-bold text-cyan-700">Sophie</span>
                <span className="text-sm text-gray-500">Élue locale</span>
              </div>
              <div className="bg-cyan-50 border-l-4 border-cyan-400 rounded-xl p-4 text-gray-700 italic shadow">
                « Représenter les Guadeloupéens, c'est porter leur voix tout en gardant les pieds dans notre réalité insulaire. »
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer d'engagement citoyen */}
      <footer className="py-10 bg-gradient-to-r from-green-600 via-cyan-600 to-blue-600 text-white text-center animate-fade-in">
        <div className="container">
          <h2 className="text-3xl font-extrabold mb-4">🌟 Ensemble, soyons les citoyens de demain !</h2>
          <p className="text-lg mb-6 opacity-90">Chaque voix compte, chaque action fait la différence.<br />
            Rejoignez le mouvement et construisons une Guadeloupe plus juste, durable et solidaire.</p>
          <Link to="/actions" className="btn btn-lg bg-white text-green-700 font-bold shadow-lg hover:bg-green-100 transition-all">
            📋 Découvrir nos actions
          </Link>
        </div>
      </footer>

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