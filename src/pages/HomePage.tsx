import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card, { CardContent } from '../components/ui/Card';
import logoReact from '../assets/logoCEA.png';

const actions = [
  {
    icon: '🌺',
    title: 'Environnement guadeloupéen',
    description: 'Protection de la biodiversité locale, lutte contre le changement climatique, préservation des récifs coralliens, mangroves et flore endémique comme la fleur de tiaré.',
    color: 'bg-green-100 text-green-700',
  },
  {
    icon: '🎓',
    title: 'Éducation & Jeunesse',
    description: 'Sensibilisation, ateliers et débats pour tous - lutte contre l\'échec scolaire, formation professionnelle adaptée aux besoins locaux de la Guadeloupe.',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    icon: '⚖️',
    title: 'Justice sociale & Autonomie',
    description: 'Lutte contre les inégalités et pour l\'inclusion - droits humains, égalité, revendication de l\'autonomie politique et économique pour la Guadeloupe.',
    color: 'bg-yellow-100 text-yellow-700',
  },
  {
    icon: '🤝',
    title: 'Solidarité & Culture créole',
    description: 'Aide, entraide et engagement citoyen - préservation de la culture créole, promotion de la solidarité sociale dans l\'archipel guadeloupéen.',
    color: 'bg-pink-100 text-pink-700',
  },
];

const stats = [
  { number: '120+', label: 'Actions réalisées en Guadeloupe' },
  { number: '5K+', label: 'Citoyens engagés' },
  { number: '30+', label: 'Associations partenaires' },
  { number: '50+', label: 'Débats organisés' },
];

function HomePage() {
  return (
    <div className="space-y-16">
      {/* Bannière moderne avec logo */}
      <div className="banner fade-in">
        <div className="banner-content flex items-center justify-center">
          <img src={logoReact} alt="Logo Citoyen" width={70} height={70} style={{marginRight: '1rem', borderRadius: '12px', boxShadow: '0 4px 16px rgba(37,99,235,0.18)'}} />
          <span className="headline-shadow">Citoyen en Action - Guadeloupe 🌺</span>
        </div>
      </div>

      {/* Section Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Ensemble, Changeons les Choses</h1>
          <p className="text-2xl md:text-3xl mb-4 font-semibold">"La parole du peuple, pour un avenir conscient."</p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">🗣️ Débats citoyens en Guadeloupe • 🎓 Comprendre, échanger, agir • 🎥 Lives & capsules sur la vie civique • 🌺 Pour tous ceux qui aiment notre pays</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-primary-600 hover:bg-gray-100">Découvrir nos actions</Button>
            <Button size="lg" className="bg-accent-600 hover:bg-accent-700">Rejoindre le mouvement</Button>
          </div>
        </div>
      </section>

      {/* Section Actions */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Nos Domaines d'Action en Guadeloupe</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Découvrez les différents axes sur lesquels nous travaillons pour créer un impact positif dans notre société guadeloupéenne, pour tous ceux qui aiment notre pays.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, index) => (
            <Card key={index} className="text-center hover:scale-105 transition-transform">
              <CardContent>
                <div className={`w-16 h-16 rounded-full ${action.color} flex items-center justify-center text-3xl mx-auto mb-4`}>{action.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{action.title}</h3>
                <p className="text-gray-600">{action.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Notre Impact en Chiffres - Guadeloupe</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Ils Témoignent</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Découvrez les histoires inspirantes de ceux qui ont rejoint notre mouvement, citoyens guadeloupéens qui agissent pour leur pays.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Marie-Line Balay',
              role: 'Bénévole environnement',
              content: 'Grâce à Citoyen en Action, je peux m\'engager concrètement pour la protection de l\'environnement en Guadeloupe. Les actions sont bien organisées et ont un vrai impact sur nos récifs coralliens et forêts de mangroves.',
              avatar: '👩‍🌾'
            },
            {
              name: 'Jean-Claude Chevry',
              role: 'Coordinateur local Basse-Terre',
              content: 'Ce mouvement me permet de rencontrer des personnes extraordinaires et de participer à des projets qui changent vraiment la vie des gens. Nous travaillons sur l\'autonomie et les droits humains en Guadeloupe.',
              avatar: '👨‍💼'
            },
            {
              name: 'Sophie Lecapre',
              role: 'Militante inclusion jeunesse',
              content: 'L\'approche collaborative et bienveillante de cette communauté rend l\'engagement citoyen accessible à tous. C\'est exactement ce dont nous avions besoin pour la jeunesse guadeloupéenne.',
              avatar: '👩‍🎓'
            }
          ].map((testimonial, index) => (
            <Card key={index}>
              <CardContent>
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Section Lives du Vendredi */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">🎥 Lives du Vendredi - Débats Citoyens Guadeloupéens</h2>
            <p className="text-xl mb-6 opacity-90 max-w-3xl mx-auto">Chaque vendredi à 20h, rejoignez-nous pour des débats en direct sur les enjeux citoyens ! Démocratie, écologie, justice sociale, autonomie... Débattons ensemble pour notre pays !</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">📱</span>
                <div>
                  <h3 className="text-xl font-bold">Groupe "Débat citoyen"</h3>
                  <p className="opacity-90">Discussions et notifications</p>
                </div>
              </div>
              <p className="text-sm mb-4 opacity-80">Rejoignez notre groupe WhatsApp "Débat citoyen" pour recevoir les notifications des lives et poursuivre les débats entre les sessions.</p>
              <a href="https://wa.me/590690570846?text=Bonjour, je souhaite rejoindre le groupe Débat citoyen" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">📱 Rejoindre via WhatsApp</a>
              <p className="text-xs mt-2 opacity-70">📞 Contact : 0690 57 08 46</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">🎥</span>
                <div>
                  <h3 className="text-xl font-bold">Lives TikTok</h3>
                  <p className="opacity-90">Débats en direct</p>
                </div>
              </div>
              <p className="text-sm mb-4 opacity-80">Participez aux débats en direct, posez vos questions et exprimez votre opinion sur les sujets citoyens du moment.</p>
              <a href="https://www.tiktok.com/@farorudy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-black hover:bg-gray-800 rounded-lg transition-colors">📱 Suivre @farorudy</a>
            </div>
          </div>
          <div className="text-center mt-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 inline-block">
              <p className="text-lg font-semibold">🗓️ Prochain live</p>
              <p className="text-2xl font-bold">Vendredi 24 octobre 2025 à 19h30</p>
              <p className="opacity-90">Thème : "Le vote : droit, devoir ou option ? - Réflexion sur la participation électorale en Guadeloupe"</p>
              <hr className="border-white border-opacity-30 my-3"/>
              <p className="text-sm opacity-75">📅 Programme régulier :</p>
              <p className="text-sm opacity-90">Capsules : Mardi & Jeudi 18h | Lives : Vendredi 19h30</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Extension Communautaire */}
      <section className="bg-accent-50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">🌐 Extension Communautaire</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Prolongez les débats et restez connectés avec la communauté "Citoyen en Action" Guadeloupe.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:scale-105 transition-transform">
              <CardContent>
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Serveur Débat Citoyen en action de RudyFAROMIrval</h3>
                <p className="text-gray-600 text-sm mb-4">Rejoignez notre serveur Discord officiel pour prolonger les débats, poser vos questions et échanger avec d'autres citoyens engagés de Guadeloupe.</p>
                <a href="https://discord.gg/debat-citoyen-rudyfaromirval" target="_blank" rel="noopener noreferrer"><Button className="bg-indigo-600 hover:bg-indigo-700">💬 Rejoindre Discord</Button></a>
              </CardContent>
            </Card>
            <Card className="text-center hover:scale-105 transition-transform">
              <CardContent>
                <div className="text-5xl mb-4">📰</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Newsletter "Le Journal Citoyen"</h3>
                <p className="text-gray-600 text-sm mb-4">Recevez chaque mois un résumé des débats, des analyses approfondies et l'actualité citoyenne de Guadeloupe.</p>
                <Button className="bg-accent-600 hover:bg-accent-700">S'abonner gratuitement</Button>
              </CardContent>
            </Card>
            <Card className="text-center hover:scale-105 transition-transform">
              <CardContent>
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Partenaires Associatifs</h3>
                <p className="text-gray-600 text-sm mb-4">Collaborations avec des associations guadeloupéennes (jeunesse, environnement, égalité) pour diversifier les débats.</p>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">Devenir partenaire</Button>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">📱 Multi-Plateformes</h3>
            <p className="mb-6 opacity-90">Retrouvez nos contenus sur toutes les plateformes pour ne rien manquer !</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.tiktok.com/@farorudy" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-gray-800 px-4 py-2 rounded-lg transition-colors">📱 TikTok @farorudy (Lives & Capsules)</a>
              <a href="https://www.youtube.com/@rudyfaro" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors">📺 Rudy FARO (Replays)</a>
              <a href="https://www.instagram.com/rudyfaro" target="_blank" rel="noopener noreferrer" className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg transition-colors">📸 @rudyfaro (Stories & Reels)</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à Passer à l'Action ?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Rejoignez des milliers de citoyens qui agissent déjà pour un monde meilleur. Ensemble, nous pouvons faire la différence pour notre pays.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"><Button size="lg" variant="outline" className="bg-white text-primary-600 hover:bg-gray-100">Nous contacter</Button></Link>
            <Link to="/actions"><Button size="lg" className="bg-accent-600 hover:bg-accent-700">Voir nos actions</Button></Link>
            <Link to="/ressources"><Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary-600">Ressources pédagogiques</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
