import React from 'react';
import SongCard from './components/SongCard';

const songs = [
  {
    id: 'marathi-abhang',
    title: 'Are Krishna Are Kanha',
    artist: 'Sant Eknath',
    language: 'marathi',
    coverImage: '/covers/marathi-abhang.jpg'  // Add cover image if you have one
  },
  {
    id: 'ice-ice-baby',
    title: 'Ice Ice Baby',
    artist: 'Vanilla Ice',
    language: 'english',
    coverImage: '/covers/ice-ice-baby.jpg'  // Add cover image if you have one
  },
  {
    id: 'satyanarayanchi-katha',
    title: 'Satyanarayanchi Katha',
    artist: 'Prahlad Shinde',
    language: 'marathi',
    coverImage: '/covers/satyanarayanchi-katha.jpg'  // Add cover image if you have one
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-600 to-blue-300">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Lyric Animation Player
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {songs.map((song) => (
            <SongCard
              key={song.id}
              id={song.id}
              title={song.title}
              artist={song.artist}
              language={song.language}
              coverImage={song.coverImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
