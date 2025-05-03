import { useState } from 'react';
import { Play, Pause, Clock, Heart, HeartOff, Plus } from 'lucide-react';

export default function SongCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  
  const song = {
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: "3:20",
    releaseYear: 2020,
    genre: "Synth-pop, New wave",
    producer: "The Weeknd, Max Martin, Oscar Holter",
    coverImage: "/api/placeholder/230/230"
  };

  const handlePlayPause = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  const handleLike = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="max-w-md mx-auto">
      <div 
        className="bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:bg-gray-800"
        onClick={toggleDetails}
      >
        {/* Main Song Card */}
        <div className="flex items-center p-4">
          <div className="relative group">
            <img 
              src={song.coverImage} 
              alt={`${song.album} cover`} 
              className="w-16 h-16 rounded object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded">
              <button 
                onClick={handlePlayPause}
                className="p-1 bg-green-500 rounded-full text-white"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>
            </div>
          </div>

          <div className="ml-4 flex-grow">
            <h3 className="text-white font-medium text-lg">{song.title}</h3>
            <p className="text-gray-400 text-sm">{song.artist}</p>
          </div>

          <div className="flex items-center space-x-3">
            <button 
              onClick={handleLike}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {isLiked ? <Heart size={20} fill="#22c55e" color="#22c55e" /> : <Heart size={20} />}
            </button>
            <div className="text-gray-400 flex items-center">
              <Clock size={16} className="mr-1" />
              <span className="text-sm">{song.duration}</span>
            </div>
          </div>
        </div>

        {/* Expanded Details */}
        {showDetails && (
          <div className="p-4 border-t border-gray-800 bg-gray-900">
            <div className="flex">
              <img 
                src={song.coverImage} 
                alt={`${song.album} cover`} 
                className="w-32 h-32 rounded object-cover"
              />
              <div className="ml-4">
                <h4 className="text-white font-medium text-lg">{song.album}</h4>
                <p className="text-gray-400 text-sm mb-2">{song.artist} • {song.releaseYear}</p>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-gray-500">Genre</p>
                    <p className="text-white">{song.genre}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Duration</p>
                    <p className="text-white">{song.duration}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-500">Producer</p>
                    <p className="text-white">{song.producer}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-between">
              <button className="bg-green-600 text-white px-4 py-2 rounded-full flex items-center">
                <Play size={16} className="mr-1" />
                Play
              </button>
              <button className="bg-transparent border border-gray-600 text-gray-300 px-4 py-2 rounded-full flex items-center">
                <Plus size={16} className="mr-1" />
                Add to Playlist
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}