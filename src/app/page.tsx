"use client";

import React, { useState, useEffect } from "react";
import LyricsAnimation from "./components/LyricsAnimation";
import MobileFrame from "./components/MobileFrame";
import { lyricTimings, lyricsData } from "./song/test";

const SongPage: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    audio.addEventListener("timeupdate", updateTime);
    return () => audio.removeEventListener("timeupdate", updateTime);
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="container mx-auto p-4 h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 to-purple-100">
      <audio ref={audioRef} src="/areKrishanAreKanha.mp3" />
      <button
        onClick={togglePlayPause}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-xl mb-8 transition duration-300 ease-in-out transform hover:scale-105"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <MobileFrame>
        <LyricsAnimation
          lyricTimings={lyricTimings}
          lyricsData={lyricsData}
          currentTime={currentTime}
          isPlaying={isPlaying}
        />
      </MobileFrame>
    </div>
  );
};

export default SongPage;
