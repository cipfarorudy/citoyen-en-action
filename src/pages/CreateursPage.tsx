import React, { useState } from 'react';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';

const CreateursPage: React.FC = () => {
  const [selectedScript, setSelectedScript] = useState('capsule');

  const scriptsModeles = {
    capsule: {
      titre: '🎬 Capsule "Le Saviez-vous ?"',
      duree: '90 secondes',
      objectif: 'Expliquer un principe civique de manière accessible',
      structure: [
        {
          etape: 'Accroche (0-5s)',
          contenu: '🎥 Plan d\'ouverture : drapeau de la Guadeloupe + ton visage cadré serré',
          exemple: '"Tu savais que voter n\'a été possible pour tous en France qu\'à partir de 1944 ?"'
        },
        {
          etape: 'Question choc (5-15s)',
          contenu: 'Statistique surprenante liée à la Guadeloupe',
          exemple: '"Et qu\'en Guadeloupe, l\'abstention dépasse souvent 60 % ? 🤔"'
        },
        {
          etape: 'Développement (15-70s)',
          contenu: 'Explication claire avec 2-3 points clés',
          exemple: '"Aujourd\'hui, on parle de la participation citoyenne : est-ce qu\'on peut encore changer les choses avec un bulletin de vote ?"'
        },
        {
          etape: 'Appel à l\'action (70-90s)',
          contenu: 'Question pour engager la communauté',
          exemple: '"💬 Dis-moi en commentaire : selon toi, c\'est utile ou inutile de voter ? Et surtout… pourquoi ?"'
        },
        {
          etape: 'Hashtags',
          contenu: 'Toujours finir par les hashtags officiels',
          exemple: '#CitoyenEnAction #Guadeloupe #DébatCivique'
        }
      ]
    },
    live: {
      titre: '🎥 Live "Le Débat du Vendredi"',
      duree: '60 minutes',
      objectif: 'Créer un débat interactif et constructif',
      structure: [
        {
          etape: 'Intro (0-5 min)',
          contenu: 'Présentation du thème + règles du débat',
          exemple: '"Bonsoir la Guadeloupe ! Ce soir on débat : Faut-il limiter le mandat des élus ? Règles : respect, écoute, arguments construits."'
        },
        {
          etape: 'Tour de table (5-20 min)',
          contenu: 'Présentation des invités (jeunes, élus, profs, citoyens)',
          exemple: '"Je reçois Marie, étudiante en droit, Thomas, conseiller municipal, et Sophie, professeure d\'histoire."'
        },
        {
          etape: 'Questions du public (20-40 min)',
          contenu: 'Interaction via chat TikTok Live',
          exemple: '"@Emma_971 demande : Pourquoi les jeunes ne votent plus ? Excellente question, Marie, tu en penses quoi ?"'
        },
        {
          etape: 'Mini-sondage (40-50 min)',
          contenu: 'Utiliser TikTok Q&A pour sonder l\'audience',
          exemple: '"Sondage express : Qui pense que 2 mandats c\'est suffisant ? Répondez par 👍 ou 👎"'
        },
        {
          etape: 'Clôture (50-60 min)',
          contenu: 'Résumé + appel à action concret',
          exemple: '"Résumé : 3 positions différentes, toutes respectables. À vous de jouer : partagez votre avis en vidéo avec #CitoyenEnAction"'
        }
      ]
    },
    debatExpress: {
      titre: '⚡ Débat Express',
      duree: '2-3 minutes',
      objectif: 'Présenter deux positions opposées sur un sujet clivant',
      structure: [
        {
          etape: 'Question clivante (0-10s)',
          contenu: 'Poser la question qui divise',
          exemple: '"Faut-il rendre le vote obligatoire en Guadeloupe ? Le débat est lancé !"'
        },
        {
          etape: 'Argument POUR (10-60s)',
          contenu: '2-3 arguments solides pour la position',
          exemple: '"✅ POUR : Plus de légitimité démocratique, fin de l\'abstention record, égalité devant le devoir civique"'
        },
        {
          etape: 'Argument CONTRE (60-110s)',
          contenu: '2-3 arguments solides contre la position',
          exemple: '"❌ CONTRE : Liberté de ne pas voter, vote contraint = vote non éclairé, problème de fond pas résolu"'
        },
        {
          etape: 'Appel au débat (110-120s)',
          contenu: 'Inviter la communauté à trancher',
          exemple: '"Et toi ? Team POUR ou Team CONTRE ? Argumente en commentaire ! 👇"'
        }
      ]
    }
  };

  const conseilsTechniques = [
    {
      categorie: '📱 Matériel',
      conseils: [
        'Tourne en mode portrait 1080x1920 (9:16)',
        'Micro-cravate pour la clarité audio',
        'Éclairage naturel ou ring light',
        'Fond neutre ou drapeau Guadeloupe'
      ]
    },
    {
      categorie: '🎬 Montage',
      conseils: [
        'Ajoute sous-titres automatiques TikTok',
        'Intro fixe de 3 secondes : logo + musique signature',
        'Bandeau "💬 Citoyen en Action" en bas',
        'Transitions fluides entre séquences'
      ]
    },
    {
      categorie: '⏰ Publication',
      conseils: [
        'Capsules : Mardi & Jeudi à 18h',
        'Lives : Vendredi à 19h30',
        'Replays : Samedi matin sur YouTube',
        'Annonces : 24h avant sur WhatsApp'
      ]
    },
    {
      categorie: '💬 Engagement',
      conseils: [
        'Toujours finir par "Et toi, t\'en penses quoi ?"',
        'Répondre aux commentaires dans les 2h',
        'Créer des sondages interactifs',
        'Inviter à rejoindre le groupe WhatsApp'
      ]
    }
  ];

  const hashtagsOfficials = [
    '#CitoyenEnAction',
    '#DébatCivique', 
    '#Guadeloupe',
    '#ParoleCitoyenne',
    '#JeunesseEngagée',
    '#DébatTikTok',
    '#République',
    '#ValeursCiviques'
  ];

  const exemplesConcrets = [
    {
      sujet: 'Vote à 16 ans',
      accroche: '"16 ans pour conduire, 18 ans pour voter... ça vous choque pas ? 🤔"',
      developement: 'Comparaison avec autres pays européens + témoignages de lycéens',
      question: '"Toi qui as entre 16-18 ans, tu te sens prêt(e) à voter ?"'
    },
    {
      sujet: 'Laïcité en Guadeloupe',
      accroche: '"En Guadeloupe, 80% sont catholiques... mais qu\'est-ce que ça change pour la République ? 🇫🇷"',
      developement: 'Principe de laïcité + spécificités culturelles ultramarines',
      question: '"Pour toi, religion et politique, ça doit rester séparé ?"'
    },
    {
      sujet: 'Écologie politique',
      accroche: '"Montée des eaux : +20cm d\'ici 2050 en Guadeloupe... Qui va nous protéger ? 🌊"',
      developement: 'Enjeux climatiques + responsabilité politique locale vs nationale',
      question: '"Climat : tu comptes sur qui ? Les politiques ou l\'action citoyenne ?"'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Section Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            🎬 Espace Créateurs
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Scripts, modèles et conseils pour créer du contenu "Citoyen en Action" 
            de qualité sur TikTok et les réseaux sociaux.
          </p>
        </div>
      </section>

      {/* Section Scripts Modèles */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            📝 Scripts Modèles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Utilisez ces structures pour créer du contenu engageant et éducatif.
          </p>
        </div>

        {/* Sélecteur de script */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(scriptsModeles).map(([key, script]) => (
            <button
              key={key}
              onClick={() => setSelectedScript(key)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedScript === key
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {script.titre}
            </button>
          ))}
        </div>

        {/* Script détaillé */}
        <Card className="max-w-4xl mx-auto">
          <CardContent>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {scriptsModeles[selectedScript as keyof typeof scriptsModeles].titre}
              </h3>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  ⏱️ {scriptsModeles[selectedScript as keyof typeof scriptsModeles].duree}
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  🎯 {scriptsModeles[selectedScript as keyof typeof scriptsModeles].objectif}
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {scriptsModeles[selectedScript as keyof typeof scriptsModeles].structure.map((etape, index) => (
                <div key={index} className="border-l-4 border-primary-600 pl-4">
                  <h4 className="text-lg font-semibold text-primary-800 mb-2">
                    {etape.etape}
                  </h4>
                  <p className="text-gray-700 mb-2">{etape.contenu}</p>
                  <div className="bg-gray-50 p-3 rounded italic text-sm text-gray-600">
                    <strong>Exemple :</strong> {etape.exemple}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section Conseils Techniques */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              🔧 Conseils Techniques
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {conseilsTechniques.map((section, index) => (
              <Card key={index}>
                <CardContent>
                  <h3 className="text-lg font-bold mb-4 text-gray-900">
                    {section.categorie}
                  </h3>
                  <ul className="space-y-2">
                    {section.conseils.map((conseil, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-accent-600 mr-2">•</span>
                        <span>{conseil}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Hashtags */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            🏷️ Hashtags Officiels
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Utilisez ces hashtags pour faire partie du mouvement "Citoyen en Action".
          </p>
        </div>
        
        <div className="bg-primary-50 rounded-lg p-8 text-center max-w-2xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {hashtagsOfficials.map((hashtag, index) => (
              <span
                key={index}
                className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                {hashtag}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-4">
            💡 Copiez-collez ces hashtags dans vos publications pour maximiser la portée.
          </p>
        </div>
      </section>

      {/* Section Exemples Concrets */}
      <section className="bg-accent-50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              💡 Exemples Concrets
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Inspirez-vous de ces exemples pour vos propres créations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {exemplesConcrets.map((exemple, index) => (
              <Card key={index}>
                <CardContent>
                  <h3 className="text-lg font-bold mb-4 text-primary-800">
                    📢 {exemple.sujet}
                  </h3>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700">🎯 Accroche</h4>
                      <p className="text-sm bg-yellow-50 p-2 rounded italic">
                        {exemple.accroche}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700">📖 Développement</h4>
                      <p className="text-sm text-gray-600">
                        {exemple.developement}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700">💬 Question finale</h4>
                      <p className="text-sm bg-blue-50 p-2 rounded italic">
                        {exemple.question}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🚀 Prêt à Créer ?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Vous avez maintenant tous les outils pour créer du contenu "Citoyen en Action" 
            de qualité. À vous de jouer !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary-600 hover:bg-gray-100">
              📱 Rejoindre le groupe WhatsApp
            </Button>
            <a 
              href="mailto:secretariat@farorudy.fr?subject=Proposition de contenu - Créateurs Citoyen en Action"
              className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-600 inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all"
            >
              📧 Proposer votre contenu
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateursPage;