import React from 'react';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Seo from '../components/Seo';

const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Transparence',
      description: 'Nous croyons en la transparence totale dans nos actions et notre gestion.',
      icon: '🔍'
    },
    {
      title: 'Inclusion',
      description: 'Chaque voix compte et mérite d\'être entendue dans notre mouvement.',
      icon: '🤝'
    },
    {
      title: 'Action',
      description: 'Nous privilégions l\'action concrète plutôt que les discours vides.',
      icon: '⚡'
    },
    {
      title: 'Durabilité',
      description: 'Nos solutions pensent l\'avenir et respectent l\'environnement.',
      icon: '🌱'
    }
  ];

  const team = [
    {
      name: 'Claire Moreau',
      role: 'Fondatrice & Directrice',
      bio: 'Ancienne journaliste, Claire a créé Citoyen en Action pour donner une voix aux initiatives citoyennes.',
      avatar: '👩‍💼'
    },
    {
      name: 'Antoine Dubois',
      role: 'Coordinateur Actions',
      bio: 'Spécialiste en développement durable, Antoine coordonne nos projets environnementaux.',
      avatar: '👨‍🌾'
    },
    {
      name: 'Fatima Al-Hassan',
      role: 'Responsable Inclusion',
      bio: 'Travailleuse sociale passionnée, Fatima veille à l\'inclusivité de toutes nos actions.',
      avatar: '👩‍⚕️'
    }
  ];

  return (
    <div className="space-y-16">
      <Seo title="À propos" description="Découvrez l'histoire, la mission et les valeurs de Citoyen en Action en Guadeloupe." />
      {/* Section Hero */}
      <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            À Propos de Nous
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Découvrez l'histoire, les valeurs et la vision qui animent notre mouvement 
            citoyen depuis plus de 5 ans.
          </p>
        </div>
      </section>

      {/* Section Histoire */}
      <section className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Notre Histoire
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Citoyen en Action est né en 2019 d'un constat simple : face aux défis de notre époque, 
                les citoyens ont besoin d'espaces pour agir concrètement et collectivement.
              </p>
              <p>
                Fondé par Claire Moreau, journaliste engagée, notre mouvement a commencé avec une 
                petite équipe de bénévoles parisiens. Aujourd'hui, nous sommes présents dans plus 
                de 25 villes françaises.
              </p>
              <p>
                Nous avons organisé plus de 150 actions citoyennes, touchant des domaines aussi 
                variés que l'environnement, l'inclusion sociale, l'éducation et la solidarité locale.
              </p>
            </div>
          </div>
          
          <div className="bg-primary-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-primary-800">En quelques chiffres</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-primary-700">Année de création</span>
                <span className="font-bold text-primary-800">2019</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-primary-700">Membres actifs</span>
                <span className="font-bold text-primary-800">2,500+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-primary-700">Villes partenaires</span>
                <span className="font-bold text-primary-800">25+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-primary-700">Actions réalisées</span>
                <span className="font-bold text-primary-800">150+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Mission */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Notre Mission
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8">
                Nous créons des ponts entre les citoyens et les enjeux de société, 
                en proposant des actions concrètes et accessibles qui génèrent un impact positif 
                dans nos communautés locales.
              </p>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-primary-600">Notre Vision</h3>
                <p className="text-lg text-gray-700 italic">
                  "Une société où chaque citoyen peut contribuer activement à construire 
                  un monde plus juste, plus durable et plus solidaire, grâce à des actions 
                  collectives porteuses de sens."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Nos Valeurs Fondamentales
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ces valeurs guident chacune de nos décisions et actions au quotidien.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:scale-105 transition-transform">
              <CardContent>
                <div className="text-6xl mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Section Équipe */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Rencontrez les personnes passionnées qui donnent vie à notre mouvement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent>
                  <div className="text-6xl mb-4">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="container py-16">
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Rejoignez Notre Mouvement
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Vous partagez nos valeurs ? Vous voulez agir concrètement ? 
            Rejoignez une communauté de citoyens engagés qui font la différence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Devenir bénévole
            </Button>
            <Button size="lg" className="bg-accent-600 hover:bg-accent-700">
              Nous soutenir
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;