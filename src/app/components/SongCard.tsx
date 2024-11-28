import React from 'react';
import Link from 'next/link';

interface SongCardProps {
  title: string;
  artist: string;
  language: string;
  id: string;
  coverImage?: string;
}

const SongCard: React.FC<SongCardProps> = ({ title, artist, language, id, coverImage }) => {
  return (
    <Link href={`/play/${id}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-64 cursor-pointer transform hover:scale-105">
        <div className="h-48 bg-purple-600 flex items-center justify-center">
          {coverImage ? (
            <img src={coverImage} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="text-white text-4xl font-bold">{title[0]}</div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600">{artist}</p>
          <p className="text-sm text-gray-500 mt-2 capitalize">{language}</p>
        </div>
      </div>
    </Link>
  );
};

export default SongCard; 