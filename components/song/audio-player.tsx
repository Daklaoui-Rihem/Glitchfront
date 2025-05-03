import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, ChevronDown, MoreVertical, Plus, Share2, ListMusic } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(123); // in seconds (2:03)
  const [showArtistInfo, setShowArtistInfo] = useState(false);
  
  const song = {
    title: "Impacto",
    artist: "Enjambre, Lo Blondo",
    album: "El Segundo Es Felino",
    duration: 236, // in seconds (3:56)
    albumArt: "/api/placeholder/600/600",
    label: "Capitol Records"
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleArtistInfo = () => {
    setShowArtistInfo(!showArtistInfo);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gradient-to-b from-red-800 to-red-950 min-h-screen text-white flex flex-col">
      {/* Top Bar */}
      <div className="flex justify-between items-center p-6">
        <ChevronDown size={24} className="cursor-pointer" />
        <div className="text-center">
          <p className="text-sm font-light uppercase tracking-wider opacity-80">PLAYING FROM SEARCH</p>
          <p className="text-sm">"{song.title}" in Search</p>
        </div>
        <MoreVertical size={24} className="cursor-pointer" />
      </div>

      {/* Album Art */}
      <div className="flex-grow flex flex-col items-center justify-center px-8 py-4">
        <div className="w-full max-w-2xl aspect-square rounded-lg overflow-hidden shadow-2xl mb-8">
          <img 
            src={song.albumArt} 
            alt={`${song.album} cover`} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Song Info */}
        <div className="w-full max-w-2xl">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-3xl font-bold">{song.title}</h1>
              <p className="text-xl text-gray-300">{song.artist}</p>
            </div>
            <button className="bg-transparent rounded-full p-2 hover:bg-white hover:bg-opacity-10">
              <Plus size={24} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="w-full bg-white bg-opacity-30 rounded-full h-1 mb-2">
              <div 
                className="bg-white h-1 rounded-full" 
                style={{ width: `${(currentTime / song.duration) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(song.duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center space-x-8 mt-8 mb-6">
            <button className="text-white opacity-70 hover:opacity-100 transition">
              <Shuffle size={20} />
            </button>
            <button className="text-white opacity-70 hover:opacity-100 transition">
              <SkipBack size={32} />
            </button>
            <button 
              className="bg-white text-red-900 rounded-full p-4 hover:scale-105 transition"
              onClick={handlePlayPause}
            >
              {isPlaying ? <Pause size={32} /> : <Play size={32} />}
            </button>
            <button className="text-white opacity-70 hover:opacity-100 transition">
              <SkipForward size={32} />
            </button>
            <button className="text-white opacity-70 hover:opacity-100 transition">
              <Repeat size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-center space-x-12 p-6 border-t border-white border-opacity-10">
        <button className="flex flex-col items-center opacity-70 hover:opacity-100 transition">
          <ListMusic size={20} />
          <span className="text-xs mt-1">Queue</span>
        </button>
        <button className="flex flex-col items-center opacity-70 hover:opacity-100 transition">
          <Share2 size={20} />
          <span className="text-xs mt-1">Share</span>
        </button>
        <button 
          className="flex flex-col items-center opacity-70 hover:opacity-100 transition"
          onClick={toggleArtistInfo}
        >
          <div className="h-5 w-5 rounded-full bg-gray-400 flex items-center justify-center">
            <span className="text-xs">i</span>
          </div>
          <span className="text-xs mt-1">About</span>
        </button>
      </div>

      {/* Artist Info Panel (would slide up from bottom) */}
      {showArtistInfo && (
        <div className="absolute bottom-0 left-0 right-0 bg-gray-900 rounded-t-3xl p-6 transform transition-transform duration-300 ease-in-out" style={{height: '30%'}}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">About the artist</h2>
            <button onClick={toggleArtistInfo} className="opacity-70 hover:opacity-100">
              <ChevronDown size={24} />
            </button>
          </div>
          <div className="overflow-y-auto h-full">
            <p className="text-gray-300 mb-4">
              Enjambre is a Mexican rock band formed in 2001 in Santa Ana, California. The band is known for their unique sound that blends classic rock with Latin American influences. "El Segundo Es Felino" is their acclaimed album released under Capitol Records.
            </p>
            <h3 className="font-bold mb-2">Popular songs</h3>
            <ul className="space-y-2">
              <li>Dulce Soledad</li>
              <li>Impacto</li>
              <li>Somos Ajenos</li>
              <li>Madrugada</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}