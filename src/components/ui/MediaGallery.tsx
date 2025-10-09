import React, { useState } from 'react';
import Card, { CardContent } from './Card';

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

interface MediaGalleryProps {
  mediaItems: MediaItem[];
  title?: string;
  className?: string;
  maxItems?: number;
  showFilters?: boolean;
}

const MediaGallery: React.FC<MediaGalleryProps> = ({
  mediaItems,
  title = 'Galerie Médias',
  className = '',
  maxItems,
  showFilters = false
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'image' | 'video'>('all');
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  const filteredItems = mediaItems.filter(item => {
    if (selectedFilter === 'all') return true;
    return item.type === selectedFilter;
  });

  const displayedItems = maxItems ? filteredItems.slice(0, maxItems) : filteredItems;

  const openModal = (item: MediaItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          {title}
        </h2>
        {showFilters && (
          <div className="flex justify-center gap-2 mb-6">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedFilter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Tout ({mediaItems.length})
            </button>
            <button
              onClick={() => setSelectedFilter('image')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedFilter === 'image'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              📷 Images ({mediaItems.filter(item => item.type === 'image').length})
            </button>
            <button
              onClick={() => setSelectedFilter('video')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedFilter === 'video'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🎬 Vidéos ({mediaItems.filter(item => item.type === 'video').length})
            </button>
          </div>
        )}
      </div>

      {/* Gallery Grid */}
      {displayedItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="hover:shadow-lg transition-all cursor-pointer group"
              onClick={() => openModal(item)}
            >
              <Card>
                <CardContent className="p-0">
                <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden relative">
                  {item.type === 'image' ? (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🎬</div>
                        <p className="text-sm">Vidéo</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="text-2xl">🔍</div>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-1">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {item.description}
                    </p>
                  )}
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{item.createdAt.toLocaleDateString('fr-FR')}</span>
                    <span className="capitalize bg-gray-100 px-2 py-1 rounded">
                      {item.type}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl text-gray-300 mb-4">
            {selectedFilter === 'image' ? '📷' : selectedFilter === 'video' ? '🎬' : '🖼️'}
          </div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            Aucun média trouvé
          </h3>
          <p className="text-gray-600">
            {selectedFilter === 'all'
              ? 'Aucun média n\'a encore été ajouté.'
              : `Aucun${selectedFilter === 'image' ? 'e' : ''} ${selectedFilter === 'image' ? 'image' : 'vidéo'} trouvé${selectedFilter === 'image' ? 'e' : ''}.`
            }
          </p>
        </div>
      )}

      {/* Modal pour afficher le média en grand */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">{selectedItem.title}</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="p-4">
              {selectedItem.type === 'image' ? (
                <img
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  className="w-full max-h-96 object-contain rounded-lg"
                />
              ) : (
                <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                  <iframe
                    src={selectedItem.url.replace('watch?v=', 'embed/')}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    title={selectedItem.title}
                  ></iframe>
                </div>
              )}

              {selectedItem.description && (
                <p className="mt-4 text-gray-700">{selectedItem.description}</p>
              )}

              <div className="mt-4 text-sm text-gray-500">
                Ajouté le {selectedItem.createdAt.toLocaleDateString('fr-FR')}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaGallery;