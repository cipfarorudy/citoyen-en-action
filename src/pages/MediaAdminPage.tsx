import React, { useState } from 'react';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import ImageUpload from '../components/ui/ImageUpload';
import VideoEmbed from '../components/ui/VideoEmbed';
import Seo from '../components/Seo';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  title: string;
  description?: string;
  url: string;
  thumbnail?: string;
  createdAt: Date;
  tags?: string[];
}

const MediaAdminPage: React.FC = () => {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [activeTab, setActiveTab] = useState<'images' | 'videos'>('images');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMediaTitle, setNewMediaTitle] = useState('');
  const [newMediaDescription, setNewMediaDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedImagePreview, setSelectedImagePreview] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState('');

  const handleImageSelect = (file: File, previewUrl: string) => {
    setSelectedImage(file);
    setSelectedImagePreview(previewUrl);
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
    setSelectedImagePreview(null);
  };

  const handleAddMedia = () => {
    if (activeTab === 'images' && selectedImage && newMediaTitle.trim()) {
      const newMedia: MediaItem = {
        id: Date.now().toString(),
        type: 'image',
        title: newMediaTitle.trim(),
        description: newMediaDescription.trim() || undefined,
        url: selectedImagePreview!, // En production, ce serait l'URL uploadée
        thumbnail: selectedImagePreview || undefined,
        createdAt: new Date(),
        tags: []
      };
      setMediaItems(prev => [newMedia, ...prev]);
      resetForm();
    } else if (activeTab === 'videos' && videoUrl && newMediaTitle.trim()) {
      const newMedia: MediaItem = {
        id: Date.now().toString(),
        type: 'video',
        title: newMediaTitle.trim(),
        description: newMediaDescription.trim() || undefined,
        url: videoUrl,
        createdAt: new Date(),
        tags: []
      };
      setMediaItems(prev => [newMedia, ...prev]);
      resetForm();
    }
  };

  const resetForm = () => {
    setNewMediaTitle('');
    setNewMediaDescription('');
    setSelectedImage(null);
    setSelectedImagePreview(null);
    setVideoUrl('');
    setShowAddForm(false);
  };

  const handleDeleteMedia = (id: string) => {
    setMediaItems(prev => prev.filter(item => item.id !== id));
  };

  const filteredMedia = mediaItems.filter(item => {
    if (activeTab === 'images') return item.type === 'image';
    if (activeTab === 'videos') return item.type === 'video';
    return true;
  });

  return (
    <div className="space-y-8">
      <Seo 
        title="Administration des médias" 
        description="Gestion des images et vidéos pour le site Citoyen en Action Guadeloupe – administration du contenu multimédia."
      />
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            🎨 Administration des Médias
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Gérez les images et vidéos intégrées sur le site Citoyen en Action
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="container">
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-1">
            <button
              onClick={() => setActiveTab('images')}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'images'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              📷 Images ({mediaItems.filter(item => item.type === 'image').length})
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'videos'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              🎬 Vidéos ({mediaItems.filter(item => item.type === 'video').length})
            </button>
          </div>
        </div>

        {/* Add Media Button */}
        <div className="text-center mb-8">
          <Button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-green-600 hover:bg-green-700"
          >
            {showAddForm ? 'Annuler' : `➕ Ajouter ${activeTab === 'images' ? 'une image' : 'une vidéo'}`}
          </Button>
        </div>

        {/* Add Media Form */}
        {showAddForm && (
          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 text-gray-900">
                Ajouter {activeTab === 'images' ? 'une image' : 'une vidéo'}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Titre *
                    </label>
                    <input
                      type="text"
                      value={newMediaTitle}
                      onChange={(e) => setNewMediaTitle(e.target.value)}
                      placeholder="Titre du média"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description (optionnel)
                    </label>
                    <textarea
                      value={newMediaDescription}
                      onChange={(e) => setNewMediaDescription(e.target.value)}
                      placeholder="Description du média"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  {activeTab === 'images' ? (
                    <ImageUpload
                      onImageSelect={handleImageSelect}
                      onImageRemove={handleImageRemove}
                      label="Sélectionner l'image"
                    />
                  ) : (
                    <VideoEmbed
                      url={videoUrl}
                      onUrlChange={setVideoUrl}
                      label="URL de la vidéo"
                    />
                  )}
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <Button
                  onClick={resetForm}
                  variant="outline"
                >
                  Annuler
                </Button>
                <Button
                  onClick={handleAddMedia}
                  disabled={
                    !newMediaTitle.trim() ||
                    (activeTab === 'images' && !selectedImage) ||
                    (activeTab === 'videos' && !videoUrl)
                  }
                  className="bg-green-600 hover:bg-green-700"
                >
                  Ajouter
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
                  {item.type === 'image' ? (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white">
                      <div className="text-center">
                        <div className="text-3xl mb-2">🎬</div>
                        <p className="text-sm">Vidéo intégrée</p>
                      </div>
                    </div>
                  )}
                </div>

                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                {item.description && (
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {item.description}
                  </p>
                )}

                <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                  <span>{item.createdAt.toLocaleDateString('fr-FR')}</span>
                  <span className="capitalize">{item.type}</span>
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                  >
                    ✏️ Modifier
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDeleteMedia(item.id)}
                    className="text-red-600 hover:bg-red-50"
                  >
                    🗑️ Supprimer
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMedia.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl text-gray-300 mb-4">
              {activeTab === 'images' ? '📷' : '🎬'}
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Aucun {activeTab === 'images' ? 'image' : 'vidéo'} ajouté{activeTab === 'images' ? 'e' : ''} encore
            </h3>
            <p className="text-gray-600">
              Cliquez sur "Ajouter {activeTab === 'images' ? 'une image' : 'une vidéo'}" pour commencer.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default MediaAdminPage;