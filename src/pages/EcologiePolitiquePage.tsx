import React from 'react';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';

const EcologiePolitiquePage: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Section Hero */}
      <section className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            🌊 Écologie politique
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Comment l'environnement devient une question politique majeure en Guadeloupe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-600 hover:bg-gray-100">
              🎬 Voir la capsule
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              📱 Partager sur TikTok
            </Button>
          </div>
        </div>
      </section>

      {/* Section Capsule */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            L'écologie : De la marge au centre du débat politique
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Analyse de l'émergence des questions environnementales dans la politique guadeloupéenne.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Lecteur Vidéo */}
          <Card className="mb-8">
            <CardContent className="p-0">
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🎬</div>
                  <p className="text-xl">Vidéo en préparation</p>
                  <p className="text-sm opacity-75">Disponible bientôt sur Fliki AI</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enjeux environnementaux */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="border-blue-200 bg-blue-50">
              <CardContent>
                <h3 className="text-xl font-bold mb-4 text-blue-800 flex items-center">
                  🌊 <span className="ml-2">Enjeux marins</span>
                </h3>
                <ul className="space-y-3 text-blue-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">🐠</span>
                    <span><strong>Récifs coralliens :</strong> 50% détruits par le blanchissement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">🛥️</span>
                    <span><strong>Pollution plastique :</strong> 80% des déchets marins</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">🏊‍♂️</span>
                    <span><strong>Eutrophisation :</strong> Algues vertes dans les baies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">🐢</span>
                    <span><strong>Espèces protégées :</strong> Menacées par la pêche illégale</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardContent>
                <h3 className="text-xl font-bold mb-4 text-green-800 flex items-center">
                  🌿 <span className="ml-2">Enjeux terrestres</span>
                </h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">🌳</span>
                    <span><strong>Forêts tropicales :</strong> Déforestation pour l'agriculture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">🏔️</span>
                    <span><strong>Montagnes :</strong> Érosion et glissements de terrain</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">🌱</span>
                    <span><strong>Biodiversité :</strong> Espèces endémiques menacées</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">🏙️</span>
                    <span><strong>Urbain :</strong> Artificialisation des sols</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Questions politiques */}
          <Card className="mb-8">
            <CardContent>
              <h3 className="text-xl font-bold mb-4 text-gray-900">⚖️ Questions politiques clés</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Énergie renouvelable vs dépendance</h4>
                  <p className="text-gray-600">Comment réduire la dépendance au fuel importé tout en développant les énergies solaire et éolienne ?</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Tourisme durable vs développement économique</h4>
                  <p className="text-gray-600">Comment concilier protection environnementale et attractivité touristique ?</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Agriculture locale vs changement climatique</h4>
                  <p className="text-gray-600">Comment adapter l'agriculture aux dérèglements climatiques tout en préservant les traditions ?</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Justice environnementale</h4>
                  <p className="text-gray-600">Qui paie pour la pollution ? Les quartiers populaires sont-ils plus exposés ?</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Statistiques */}
          <Card className="mb-8">
            <CardContent>
              <h3 className="text-xl font-bold mb-4 text-gray-900">📊 Chiffres clés</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">50%</div>
                  <div className="text-sm text-gray-600">Récifs coralliens détruits</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">80%</div>
                  <div className="text-sm text-gray-600">Déchets marins plastiques</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">+2°C</div>
                  <div className="text-sm text-gray-600">Réchauffement local</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">30%</div>
                  <div className="text-sm text-gray-600">Espèces menacées</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Script de la capsule */}
          <Card className="mb-8">
            <CardContent>
              <h3 className="text-xl font-bold mb-4 text-gray-900">📝 Script de la capsule</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-center mb-4">
                  <span className="text-2xl">🎵</span>
                  <p className="text-sm text-gray-600 italic">Musique nature – sons des vagues et oiseaux tropicaux</p>
                </div>

                <div className="space-y-4 text-center">
                  <p className="text-lg font-medium text-gray-800">
                    L'écologie en Guadeloupe :<br/>
                    <strong>De la marge au centre</strong> du débat politique.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg">
                    <p className="text-gray-700 font-semibold mb-2">🌊 NOS MERVEILLES MENACÉES :</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <div>🐠 50% récifs coralliens détruits</div>
                      <div>🛥️ 80% déchets plastiques</div>
                      <div>🏊‍♂️ Algues vertes dans les baies</div>
                      <div>🐢 Espèces protégées en danger</div>
                    </div>
                  </div>

                  <p className="text-gray-700">
                    L'écologie n'est plus une question de <strong>"bobos"</strong>,<br/>
                    c'est une question de <strong>survie collective</strong>.
                  </p>

                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg">
                    <p className="text-gray-700 font-semibold mb-2">⚖️ QUESTIONS POLITIQUES :</p>
                    <div className="space-y-1 text-sm">
                      <div>• Énergie renouvelable vs dépendance fuel</div>
                      <div>• Tourisme durable vs économie</div>
                      <div>• Agriculture locale vs climat</div>
                      <div>• Justice environnementale</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                    <p className="text-lg font-semibold text-gray-800">
                      Qui décide pour notre environnement ?<br/>
                      <strong>Les politiques ou les citoyens ?</strong>
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-xl font-bold text-gray-900 mb-2">
                      🌿 Quelle écologie pour la Guadeloupe ?
                    </p>
                    <p className="text-gray-600">👇 Partage tes idées pour protéger notre île !</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => navigator.clipboard.writeText(`Découvrez notre capsule sur l'écologie politique en Guadeloupe : https://farorudy.com/capsules-video/ecologie-politique\n\nL'écologie : De la marge au centre du débat politique. Analyse des enjeux environnementaux majeurs.\n\n#EcologiePolitique #Guadeloupe #Environnement #CitoyenEnAction`)}
              className="bg-green-600 hover:bg-green-700"
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
                  '#EcologiePolitique',
                  '#Guadeloupe',
                  '#Environnement',
                  '#CitoyenEnAction',
                  '#JusticeEnvironnementale',
                  '#EcologieTropicale',
                  '#ProtectionNaturelle',
                  '#PolitiqueVerte'
                ].map((hashtag, index) => (
                  <button
                    key={index}
                    onClick={() => navigator.clipboard.writeText(hashtag)}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm hover:bg-green-200 transition-colors"
                  >
                    {hashtag}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section Navigation */}
      <section className="bg-gray-50 py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            🎬 Autres capsules
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/capsules-video" className="btn-primary">
              📚 Toutes les capsules
            </a>
            <a href="/capsules-video/vote-16-ans" className="btn-secondary">
              🗳️ Vote à 16 ans
            </a>
            <a href="/capsules-video/liberte-expression" className="btn-secondary">
              ⚖️ Liberté d'expression
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcologiePolitiquePage;