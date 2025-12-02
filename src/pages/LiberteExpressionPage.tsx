import React from 'react';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Seo from '../components/Seo';

const LiberteExpressionPage: React.FC = () => {
  return (
    <div className="space-y-16">
      <Seo 
        title="Liberté d'expression" 
        description="Où sont les limites de la liberté d'expression sur les réseaux sociaux ? Droits, responsabilités et censure en Guadeloupe."
      />
      {/* Section Hero */}
      <section className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            ⚖️ Liberté d'expression
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Où sont les limites ? Analyse des droits et responsabilités sur les réseaux sociaux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-600 hover:bg-gray-100">
              🎬 Voir la capsule
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              📱 Partager sur TikTok
            </Button>
          </div>
        </div>
      </section>

      {/* Section Capsule */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Liberté d'expression : Droit fondamental ou danger public ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Analyse des limites de la liberté d'expression dans l'ère des réseaux sociaux.
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

          {/* Droits et limites */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="border-green-200 bg-green-50">
              <CardContent>
                <h3 className="text-xl font-bold mb-4 text-green-800 flex items-center">
                  ✅ <span className="ml-2">Droits fondamentaux</span>
                </h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">📝</span>
                    <span><strong>Article 11 DDHC :</strong> Libre communication des pensées</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">📰</span>
                    <span><strong>Presse libre :</strong> Sans censure préalable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">🎭</span>
                    <span><strong>Opinions politiques :</strong> Même les plus extrêmes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">🌐</span>
                    <span><strong>Réseaux sociaux :</strong> Espaces d'expression</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent>
                <h3 className="text-xl font-bold mb-4 text-red-800 flex items-center">
                  ❌ <span className="ml-2">Limites légales</span>
                </h3>
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">🗣️</span>
                    <span><strong>Incitement à la haine :</strong> Racisme, homophobie</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">📢</span>
                    <span><strong>Diffamation :</strong> Atteinte à l'honneur</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">🔪</span>
                    <span><strong>Appels à la violence :</strong> Menaces et provocation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">🕵️</span>
                    <span><strong>Fake news :</strong> Désinformation massive</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Cas pratiques */}
          <Card className="mb-8">
            <CardContent>
              <h3 className="text-xl font-bold mb-4 text-gray-900">📱 Cas pratiques en Guadeloupe</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Débats politiques sur TikTok</h4>
                  <p className="text-gray-600">Où s'arrête la critique politique et où commence l'insulte personnelle ?</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Mouvements sociaux</h4>
                  <p className="text-gray-600">Comment amplifier sa voix sans risquer la censure ou les poursuites ?</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Journalisme citoyen</h4>
                  <p className="text-gray-600">Responsabilités des influenceurs dans la diffusion d'informations.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Modération des plateformes</h4>
                  <p className="text-gray-600">Qui décide ce qui est acceptable ? Algorithmes vs modérateurs humains.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Statistiques */}
          <Card className="mb-8">
            <CardContent>
              <h3 className="text-xl font-bold mb-4 text-gray-900">📊 Liberté d'expression en chiffres</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">75%</div>
                  <div className="text-sm text-gray-600">Guadeloupéens actifs sur RS</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">45%</div>
                  <div className="text-sm text-gray-600">Ont déjà censuré un post</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">60%</div>
                  <div className="text-sm text-gray-600">S'inquiètent de la désinformation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">30%</div>
                  <div className="text-sm text-gray-600">Ont été victimes de cyberharcèlement</div>
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
                  <p className="text-sm text-gray-600 italic">Musique débat – rythme soutenu, voix off sérieuse</p>
                </div>

                <div className="space-y-4 text-center">
                  <p className="text-lg font-medium text-gray-800">
                    Liberté d'expression en Guadeloupe :<br/>
                    <strong>Droit fondamental</strong> ou <strong>danger public</strong> ?
                  </p>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                    <p className="text-gray-700 font-semibold mb-2">✅ DROITS PROTÉGÉS :</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <div>📝 Libre communication (DDHC)</div>
                      <div>📰 Presse sans censure</div>
                      <div>🎭 Opinions politiques</div>
                      <div>🌐 Réseaux sociaux libres</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg">
                    <p className="text-gray-700 font-semibold mb-2">❌ LIMITES LÉGALES :</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <div>🗣️ Incitement à la haine</div>
                      <div>📢 Diffamation</div>
                      <div>🔪 Appels à la violence</div>
                      <div>🕵️ Fake news massives</div>
                    </div>
                  </div>

                  <p className="text-gray-700">
                    En Guadeloupe, <strong>75% des citoyens</strong> sont actifs sur les réseaux,<br/>
                    mais <strong>45%</strong> ont déjà censuré un post par peur.
                  </p>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                    <p className="text-lg font-semibold text-gray-800">
                      Où placer le curseur entre<br/>
                      <strong>liberté</strong> et <strong>responsabilité</strong> ?
                    </p>
                  </div>

                  <p className="text-gray-700">
                    Les plateformes décident-elles à notre place ?<br/>
                    Ou devons-nous nous <strong>autoréguler</strong> ?
                  </p>

                  <div className="border-t pt-4">
                    <p className="text-xl font-bold text-gray-900 mb-2">
                      ⚖️ Quelle liberté d'expression pour demain ?
                    </p>
                    <p className="text-gray-600">👇 Partage ton point de vue sur les limites de l'expression !</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => navigator.clipboard.writeText(`Découvrez notre capsule sur la liberté d'expression : https://farorudy.com/capsules-video/liberte-expression\n\nLiberté d'expression : Droit fondamental ou danger public ? Analyse des droits et responsabilités sur les réseaux sociaux.\n\n#LiberteExpression #Guadeloupe #ReseauxSociaux #CitoyenEnAction`)}
              className="bg-purple-600 hover:bg-purple-700"
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
                  '#LiberteExpression',
                  '#Guadeloupe',
                  '#ReseauxSociaux',
                  '#CitoyenEnAction',
                  '#DebatsCitoyens',
                  '#DroitsFonctionnels',
                  '#Censure',
                  '#Democratie'
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
            <a href="/capsules-video/ecologie-politique" className="btn-secondary">
              🌊 Écologie politique
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiberteExpressionPage;