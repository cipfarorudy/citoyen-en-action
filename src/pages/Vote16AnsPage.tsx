import React from 'react';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import VideoEmbed from '../components/ui/VideoEmbed';

const Vote16AnsPage: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Section Hero */}
      <section className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            🗳️ Le vote à 16 ans
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Pour ou contre ? Analyse des arguments et enjeux pour la jeunesse guadeloupéenne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              🎬 Voir la capsule
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              📱 Partager sur TikTok
            </Button>
          </div>
        </div>
      </section>

      {/* Section Capsule */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Vote à 16 ans : Révolution ou illusion ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Analyse des arguments pour et contre le vote des jeunes de 16 ans en Guadeloupe.
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

          {/* Arguments Pour et Contre */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="border-green-200 bg-green-50">
              <CardContent>
                <h3 className="text-xl font-bold mb-4 text-green-800 flex items-center">
                  ✅ <span className="ml-2">Arguments POUR</span>
                </h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">🎓</span>
                    <span><strong>Éducation civique précoce :</strong> Les jeunes votent déjà aux élections lycéennes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">🌍</span>
                    <span><strong>Participation mondiale :</strong> 12 pays européens l'autorisent déjà</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">📚</span>
                    <span><strong>Apprentissage :</strong> Mieux comprendre la politique jeune</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">⚖️</span>
                    <span><strong>Égalité :</strong> Les jeunes paient déjà des impôts indirects</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent>
                <h3 className="text-xl font-bold mb-4 text-red-800 flex items-center">
                  ❌ <span className="ml-2">Arguments CONTRE</span>
                </h3>
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">🧠</span>
                    <span><strong>Immaturité :</strong> Le cerveau n'est pas pleinement développé</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">📖</span>
                    <span><strong>Éducation insuffisante :</strong> Manque de connaissances politiques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">🎭</span>
                    <span><strong>Influence familiale :</strong> Vote sous influence des parents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">🏫</span>
                    <span><strong>Préférence scolaire :</strong> Les jeunes privilégient les études</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Statistiques */}
          <Card className="mb-8">
            <CardContent>
              <h3 className="text-xl font-bold mb-4 text-gray-900">📊 Données en Guadeloupe</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">16-24 ans</div>
                  <div className="text-sm text-gray-600">Âge moyen des primo-votants</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">65%</div>
                  <div className="text-sm text-gray-600">Jeunes intéressés par la politique</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">45%</div>
                  <div className="text-sm text-gray-600">Participation aux élections régionales</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">80%</div>
                  <div className="text-sm text-gray-600">Utilisent les réseaux sociaux pour s'informer</div>
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
                  <p className="text-sm text-gray-600 italic">Musique rythmée – zouk engagé</p>
                </div>

                <div className="space-y-4 text-center">
                  <p className="text-lg font-medium text-gray-800">
                    Vote à 16 ans en Guadeloupe :<br/>
                    <strong>Révolution démocratique</strong> ou <strong>fausse bonne idée</strong> ?
                  </p>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                    <p className="text-gray-700 font-semibold mb-2">✅ LES POUR :</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <div>🎓 Éducation civique précoce</div>
                      <div>🌍 Suivre l'Europe</div>
                      <div>📚 Apprendre la politique jeune</div>
                      <div>⚖️ Égalité avec les impôts</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg">
                    <p className="text-gray-700 font-semibold mb-2">❌ LES CONTRE :</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <div>🧠 Cerveau pas mature</div>
                      <div>📖 Manque de connaissances</div>
                      <div>🎭 Influence familiale</div>
                      <div>🏫 Priorité aux études</div>
                    </div>
                  </div>

                  <p className="text-gray-700">
                    En Guadeloupe, <strong>65% des jeunes</strong> s'intéressent à la politique,<br/>
                    mais seulement <strong>45%</strong> votent aux régionales.
                  </p>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                    <p className="text-lg font-semibold text-gray-800">
                      Et toi, <strong>jeune Guadeloupéen</strong>,<br/>
                      tu voterais à 16 ans ?
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-xl font-bold text-gray-900 mb-2">
                      🗳️ Quel est TON avis ?
                    </p>
                    <p className="text-gray-600">👇 Vote en commentaire et argumente !</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section Ajouter une vidéo */}
          <Card className="mb-8">
            <CardContent>
              <h3 className="text-xl font-bold mb-4 text-gray-900">🎬 Ajoutez votre vidéo sur le sujet</h3>
              <p className="text-gray-600 mb-6">
                Vous avez créé une vidéo sur le vote à 16 ans ? Partagez-la ici pour enrichir le débat !
                Nous acceptons les liens YouTube, Vimeo et Dailymotion.
              </p>

              <VideoEmbed
                label="URL de votre vidéo"
                placeholder="Collez le lien de votre vidéo (YouTube, Vimeo, Dailymotion)"
              />

              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">💡 Conseils pour votre vidéo :</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Présentez clairement votre position (pour ou contre)</li>
                  <li>• Argumentez avec des faits concrets</li>
                  <li>• Restez respectueux envers les opinions opposées</li>
                  <li>• Utilisez les hashtags #VoteA16Ans #CitoyenEnAction</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => navigator.clipboard.writeText(`Découvrez notre analyse sur le vote à 16 ans en Guadeloupe : https://farorudy.com/capsules-video/vote-16-ans\n\nRévolution démocratique ou fausse bonne idée ? Les arguments pour et contre le vote des jeunes de 16 ans.\n\n#VoteA16Ans #JeunesseGuadeloupeenne #Democratie #CitoyenEnAction`)}
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
                  '#VoteA16Ans',
                  '#JeunesseGuadeloupeenne',
                  '#Democratie',
                  '#CitoyenEnAction',
                  '#Guadeloupe',
                  '#EducationCivique',
                  '#PolitiqueJeune',
                  '#DebatsCitoyens'
                ].map((hashtag, index) => (
                  <button
                    key={index}
                    onClick={() => navigator.clipboard.writeText(hashtag)}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors"
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
            <a href="/capsules-video/ecologie-politique" className="btn-secondary">
              🌊 Écologie politique
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

export default Vote16AnsPage;