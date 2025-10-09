import React, { useState } from 'react';
import Card, { CardContent } from './Card';
import Button from './Button';

interface VideoEmbedProps {
  url?: string;
  onUrlChange?: (url: string) => void;
  className?: string;
  label?: string;
  placeholder?: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({
  url = '',
  onUrlChange,
  className = '',
  label = 'URL de la vidéo',
  placeholder = 'Collez l\'URL YouTube, Vimeo, ou Dailymotion'
}) => {
  const [inputUrl, setInputUrl] = useState(url);
  const [embedUrl, setEmbedUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fonction pour convertir une URL en URL d'embed
  const getEmbedUrl = (url: string): string | null => {
    const trimmedUrl = url.trim();

    // YouTube
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const youtubeMatch = trimmedUrl.match(youtubeRegex);
    if (youtubeMatch) {
      return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
    }

    // Vimeo
    const vimeoRegex = /(?:vimeo\.com\/)(?:.*#|.*\/videos\/|.*\/|channels\/.*\/|groups\/.*\/videos\/|album\/.*\/video\/|video\/)?([0-9]+)(?:$|\/|\?)/;
    const vimeoMatch = trimmedUrl.match(vimeoRegex);
    if (vimeoMatch) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
    }

    // Dailymotion
    const dailymotionRegex = /(?:dailymotion\.com\/(?:video\/|embed\/video\/|hub\/.*\/|.*\/)|dai\.ly\/)([a-zA-Z0-9]+)/;
    const dailymotionMatch = trimmedUrl.match(dailymotionRegex);
    if (dailymotionMatch) {
      return `https://www.dailymotion.com/embed/video/${dailymotionMatch[1]}`;
    }

    return null;
  };

  const handleUrlChange = (newUrl: string) => {
    setInputUrl(newUrl);
    setError(null);

    if (newUrl.trim()) {
      const embed = getEmbedUrl(newUrl);
      if (embed) {
        setEmbedUrl(embed);
        onUrlChange?.(newUrl);
      } else {
        setEmbedUrl(null);
        setError('URL non reconnue. Supporte YouTube, Vimeo et Dailymotion.');
      }
    } else {
      setEmbedUrl(null);
      onUrlChange?.('');
    }
  };

  const handleClear = () => {
    setInputUrl('');
    setEmbedUrl(null);
    setError(null);
    onUrlChange?.('');
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Input URL */}
            <div className="flex gap-2">
              <input
                type="url"
                value={inputUrl}
                onChange={(e) => handleUrlChange(e.target.value)}
                placeholder={placeholder}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {inputUrl && (
                <Button
                  onClick={handleClear}
                  variant="outline"
                  className="px-3 py-2"
                >
                  ✕
                </Button>
              )}
            </div>

            {/* Message d'aide */}
            <div className="text-xs text-gray-500">
              Formats supportés: YouTube, Vimeo, Dailymotion
            </div>

            {/* Erreur */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            {/* Aperçu vidéo */}
            {embedUrl && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-700">Aperçu :</h4>
                <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                  <iframe
                    src={embedUrl}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    title="Vidéo intégrée"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoEmbed;