export interface SongConfig {
  id: string;
  title: string;
  artist: string;
  language: string;
  duration: number; // Duration in milliseconds
  startAt: number;  // Start time in milliseconds
}

export const iceIceBaby: SongConfig = {
  id: 'ice-ice-baby',
  title: 'Ice Ice Baby',
  artist: 'Vanilla Ice',
  language: 'english',
  // Duration in milliseconds (73 seconds)
  duration: 73000,
  startAt: 0,
}; 