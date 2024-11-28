"use client";

import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import LyricsAnimation from "../../components/LyricsAnimation";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import { lyricTimings, lyricsData } from "../../song/test";
import { iceIceBabyLyrics } from "../../../data/lyrics/iceIceBaby";
import { LyricLine } from "../../../data/lyrics/iceIceBaby"; // Import LyricLine interface
import { marathiLyrics } from "../../../data/lyrics/marathiLyricsHareKrishan"; // Import Marathi lyrics

export default function PlayPage() {
  const params = useParams();
  const songId = params.id as string;

  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isAudioEnded, setIsAudioEnded] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const handleAudioEnd = () => {
      setIsPlaying(false);
      setIsAudioEnded(true);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("ended", handleAudioEnd);
    audio.volume = 0.3;

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("ended", handleAudioEnd);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
      setIsAudioEnded(false);
    }
    setIsPlaying(!isPlaying);
  };

  const toggleInfo = () => {
    if (isPlaying) {
      setShowPopup(true);
      return;
    }
    setShowInfo(!showInfo);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const getCurrentLyrics = () => {
    if (songId === "ice-ice-baby") {
      return {
        lyricTimings: iceIceBabyLyrics as LyricLine[], // Ensure correct type
        lyricsData: iceIceBabyLyrics as LyricLine[], // Ensure correct type
      };
    } else if (songId === "marathi-abhang") { // Check for Marathi song ID
      return {
        lyricTimings: marathiLyrics as LyricLine[], // Ensure correct type
        lyricsData: marathiLyrics as LyricLine[], // Ensure correct type
      };
    }
    return {
      lyricTimings: lyricTimings as LyricLine[], // Ensure correct type
      lyricsData: lyricsData as unknown as LyricLine[], // Ensure correct type
    };
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-gray-600 to-blue-300">
      <div className="flex flex-col items-center">
        <DeviceFrameset device="iPhone X" color="black">
          <div className="h-full flex flex-col">
            {(showInfo && !isPlaying) || isAudioEnded ? (
              <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-purple-900 to-black text-white scrollbar-hide pt-10">
                <style jsx>{`
                  .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                  }
                  .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                  }
                `}</style>
                <h3 className="text-2xl font-bold mb-4">Taking a chance</h3>
                <p className="mb-4 text-purple-200">
                  I would love to contribute at Peerlist 😊
                </p>
                <p className="mb-4 text-purple-200">
                  Check out my GitHub:{" "}
                  <a
                    href="https://github.com/vikaswakde"
                    className="text-blue-400 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/vikaswakde
                  </a>
                </p>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto bg-purple-900 scrollbar-hide">
                <style jsx global>{`
                  .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                  }
                  .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                <LyricsAnimation
                  lyricTimings={
                    getCurrentLyrics().lyricTimings as unknown as LyricLine[]
                  }
                  lyricsData={
                    getCurrentLyrics().lyricsData as unknown as LyricLine[]
                  }
                  currentTime={currentTime}
                  isPlaying={isPlaying}
                />
              </div>
            )}
          </div>
        </DeviceFrameset>

        <div className="mt-6 flex space-x-4">
          <button
            onClick={togglePlayPause}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button
            onClick={toggleInfo}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            {showInfo || isAudioEnded ? "Know More" : "Song Info"}
          </button>
        </div>

        <audio
          ref={audioRef}
          src={
            songId === "ice-ice-baby"
              ? "/ice-ice-baby.mp3"
              : "/areKrishanAreKanha.mp3"
          }
        />
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg mb-4">
              Please pause the song before viewing info
            </p>
            <button
              onClick={closePopup}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
