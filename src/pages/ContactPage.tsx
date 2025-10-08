import React, { useState } from 'react';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'question'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pourriez envoyer les données à un serveur
    console.log('Formulaire soumis:', formData);
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
    
    // Réinitialiser le formulaire
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      type: 'question'
    });
  };

  const contactInfo = [
    {
      title: 'Adresse',
      content: 'Guadeloupe\nFrance',
      icon: '📍'
    },
    {
      title: 'Téléphone',
      content: '0690 57 08 46',
      icon: '📞'
    },
    {
      title: 'Email',
      content: 'secretariat@farorudy.fr',
      icon: '✉️'
    },
    {
      title: 'Horaires',
      content: 'Lun - Ven: 9h - 18h\nSam: 10h - 16h',
      icon: '🕒'
    }
  ];

  const offices = [
    {
      city: 'Guadeloupe',
      address: 'Secrétariat Citoyen en Action, Guadeloupe',
      phone: '0690 57 08 46',
      coordinator: 'Équipe Citoyen en Action'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Section Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contactez-Nous
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Une question, une idée, un projet ? Nous sommes là pour vous écouter 
            et vous accompagner dans votre engagement citoyen.
          </p>
        </div>
      </section>

      {/* Section Formulaire et Infos */}
      <section className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire de Contact */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Envoyez-nous un Message
            </h2>
            
            <Card>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                      Type de demande
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="question">Question générale</option>
                      <option value="participation">Participation à une action</option>
                      <option value="proposition">Proposition de projet</option>
                      <option value="partenariat">Demande de partenariat</option>
                      <option value="presse">Demande presse</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Décrivez votre demande en détail..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Envoyer le Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Informations de Contact */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Nos Coordonnées
            </h2>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent>
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {info.title}
                        </h3>
                        <p className="text-gray-600 whitespace-pre-line">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Groupe WhatsApp */}
            <Card className="mt-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">📱</span>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Groupe WhatsApp "Débat citoyen"
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Rejoignez notre groupe de discussion pour recevoir les notifications des lives, 
                  échanger avec la communauté et prolonger les débats.
                </p>
                <div className="space-y-2">
                  <a 
                    href="https://wa.me/590690570846?text=Bonjour, je souhaite rejoindre le groupe Débat citoyen" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <span>💬</span>
                    <span>Rejoindre le groupe</span>
                  </a>
                  <p className="text-xs text-gray-500">
                    📞 Ou contactez-nous directement : 0690 57 08 46
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Réseaux Sociaux */}
            <Card className="mt-6">
              <CardContent>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Suivez-nous sur les Réseaux
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href="#" 
                    className="flex items-center space-x-2 text-black hover:text-gray-700 transition-colors p-2 rounded-lg hover:bg-gray-50"
                  >
                    <span>�</span>
                    <span>TikTok</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center space-x-2 text-red-600 hover:text-red-800 transition-colors p-2 rounded-lg hover:bg-red-50"
                  >
                    <span>�</span>
                    <span>YouTube</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center space-x-2 text-pink-600 hover:text-pink-800 transition-colors p-2 rounded-lg hover:bg-pink-50"
                  >
                    <span>�</span>
                    <span>Instagram</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center space-x-2 text-blue-700 hover:text-blue-900 transition-colors p-2 rounded-lg hover:bg-blue-50"
                  >
                    <span>�</span>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Bureaux Locaux */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Nos Bureaux Locaux
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Retrouvez nos équipes dans plusieurs villes françaises pour un accompagnement de proximité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index}>
                <CardContent>
                  <h3 className="text-xl font-bold text-primary-600 mb-4">
                    {office.city}
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start space-x-2">
                      <span className="text-lg">📍</span>
                      <span className="text-sm">{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">📞</span>
                      <span className="text-sm">{office.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">👤</span>
                      <span className="text-sm">Coordinateur: {office.coordinator}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section FAQ Rapide */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Questions Fréquentes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              question: 'Comment puis-je participer à vos actions ?',
              answer: 'Inscrivez-vous via notre formulaire de contact ou directement sur les pages des actions qui vous intéressent.'
            },
            {
              question: 'Les actions sont-elles gratuites ?',
              answer: 'Oui, toutes nos actions citoyennes sont entièrement gratuites et ouvertes à tous.'
            },
            {
              question: 'Puis-je proposer ma propre action ?',
              answer: 'Absolument ! Contactez-nous avec votre idée, nous vous accompagnerons dans sa réalisation.'
            },
            {
              question: 'Comment devenir bénévole régulier ?',
              answer: 'Contactez-nous via le formulaire en précisant votre motivation et vos disponibilités.'
            }
          ].map((faq, index) => (
            <Card key={index}>
              <CardContent>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;