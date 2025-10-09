import React from 'react';
import { Link } from 'react-router-dom';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';

const CapsulesVideosPage: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Section Hero */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            🎥 Capsules Vidéo
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Contenus courts et percutants pour comprendre la citoyenneté guadeloupéenne.
            Partagez ces vidéos sur vos réseaux !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-600 hover:bg-gray-100">
              🎬 Voir toutes les capsules
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              📱 Partager sur TikTok
            </Button>
          </div>
        </div>
      </section>

      {/* Section Capsule Principale */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            C'est quoi être citoyen en Guadeloupe ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Notre première capsule vidéo explique ce que signifie vraiment la citoyenneté
            dans le contexte guadeloupéen.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Lecteur Vidéo */}
          <Card className="mb-8">
            <CardContent className="p-0">
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <iframe
                  src="https://app.fliki.ai/embed/68e7b769bd9faac783060579"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="w-full h-full"
                  title="C'est quoi être citoyen en Guadeloupe ?"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          {/* Informations de la capsule */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold mb-4 text-gray-900">📊 Statistiques</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Durée :</span>
                    <span className="font-semibold">45 secondes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vues :</span>
                    <span className="font-semibold">En cours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Créée le :</span>
                    <span className="font-semibold">9 octobre 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Thème :</span>
                    <span className="font-semibold">Citoyenneté</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3 className="text-xl font-bold mb-4 text-gray-900">🎯 Objectifs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Expliquer la citoyenneté guadeloupéenne</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Sensibiliser sur l'histoire locale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Encourager l'engagement citoyen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Promouvoir le débat démocratique</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Script de la capsule */}
          <Card className="mb-8 hidden">
            <CardContent>
              <h3 className="text-xl font-bold mb-4 text-gray-900">📝 Script de la capsule</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
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
            </CardContent>
          </Card>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => navigator.clipboard.writeText(`Découvrez cette capsule vidéo sur la citoyenneté guadeloupéenne : https://farorudy.com/capsules-video\n\nÊtre citoyen en Guadeloupe, ce n'est pas juste avoir un passeport français. C'est porter en soi l'histoire de nos ancêtres et agir aujourd'hui pour une société plus juste.\n\n#CitoyennetéEnGuadeloupe #QuiSuisJeCitoyen #Guadeloupe`)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              📋 Copier le lien de partage
            </Button>
            <a
              href="https://www.tiktok.com/@farorudy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-black hover:bg-gray-800"
            >
              🎵 Suivre @farorudy sur TikTok
            </a>
            <a
              href="https://www.facebook.com/farorudy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-blue-700 hover:bg-blue-800"
            >
              📘 Voir sur Facebook
            </a>
          </div>

          {/* Hashtags */}
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold mb-4 text-gray-900">📍 Hashtags suggérés</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  '#CitoyennetéEnGuadeloupe',
                  '#QuiSuisJeCitoyen',
                  '#Guadeloupe',
                  '#MémoireEtAvenir',
                  '#EngagementLocal',
                  '#CitoyenEnAction',
                  '#DebatsCitoyens',
                  '#Guadeloupe971'
                ].map((hashtag, index) => (
                  <button
                    key={index}
                    onClick={() => navigator.clipboard.writeText(hashtag)}
                    className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm hover:bg-purple-200 transition-colors"
                  >
                    {hashtag}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section Prochaines Capsules */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              🎬 Prochaines Capsules
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les thèmes que nous allons aborder dans nos prochaines vidéos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link to="/capsules-video/vote-16-ans" className="block">
              <Card className="hover:scale-105 transition-transform cursor-pointer">
                <CardContent>
                  <div className="text-center">
                    <div className="text-5xl mb-4">🗳️</div>
                    <h3 className="text-lg font-bold mb-3 text-gray-900">
                      Le vote à 16 ans
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Pour ou contre ? Analyse des arguments et enjeux pour la jeunesse guadeloupéenne.
                    </p>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Disponible
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/capsules-video/ecologie-politique" className="block">
              <Card className="hover:scale-105 transition-transform cursor-pointer">
                <CardContent>
                  <div className="text-center">
                    <div className="text-5xl mb-4">🌊</div>
                    <h3 className="text-lg font-bold mb-3 text-gray-900">
                      Écologie politique
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Comment l'environnement devient une question politique majeure en Guadeloupe.
                    </p>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Disponible
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/capsules-video/liberte-expression" className="block">
              <Card className="hover:scale-105 transition-transform cursor-pointer">
                <CardContent>
                  <div className="text-center">
                    <div className="text-5xl mb-4">⚖️</div>
                    <h3 className="text-lg font-bold mb-3 text-gray-900">
                      Liberté d'expression
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Où sont les limites ? Analyse des droits et responsabilités sur les réseaux sociaux.
                    </p>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Disponible
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            📤 Partagez nos capsules !
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Aidez-nous à sensibiliser plus de citoyens guadeloupéens !
            Partagez ces vidéos sur vos réseaux sociaux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.whatsapp.com/votre-lien-groupe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-lg bg-green-600 hover:bg-green-700"
            >
              📱 Proposer un thème
            </a>
            <a
              href="mailto:secretariat@farorudy.fr?subject=Proposition de capsule vidéo - Citoyen en Action"
              className="btn-primary btn-lg bg-white text-indigo-600 hover:bg-gray-100"
            >
              ✉️ Contribuer à une capsule
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CapsulesVideosPage;