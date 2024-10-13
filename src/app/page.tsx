"use client";

import React, { useState, useEffect } from "react";
import LyricsAnimation from "./components/LyricsAnimation";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import { lyricTimings, lyricsData } from "./song/test";

const SongPage: React.FC = () => {
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
                <h3 className="text-2xl font-bold mb-4">About this Abhang</h3>
                <p className="mb-4 text-purple-200">
                  This is an abhang (devotional poem) by Sant Eknath, a
                  16th-century Marathi saint-poet from Maharashtra, India.
                </p>
                <a
                  href="https://www.aathavanitli-gani.com/Song/Are_Krishna_Are_Kanha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:text-purple-100 underline block mb-4"
                >
                  Read full abhang in Marathi
                </a>
                <h4 className="text-xl font-semibold mb-2">
                  English Translation
                </h4>
                <p className="whitespace-pre-line text-sm leading-relaxed text-purple-100 font-serif space-y-4">
                  <span className="block font-bold text-lg text-purple-300">
                    O Krishna! O Kanha! Enchanter of hearts
                  </span>

                  <span className="block">
                    If saints come to your home, why exhaust them with talk?
                    <br />
                    If sugarcane tastes sweet, should you eat it roots and all?
                    <br />
                    If a loved one becomes a guest, should they stay for too
                    long?
                    <br />
                    If one becomes the village chief, should they ruin the whole
                    village?
                  </span>

                  <span className="block font-bold text-lg text-purple-300">
                    O Krishna! O Kanha! Enchanter of hearts
                  </span>

                  <span className="block">
                    If God enters your being, should you speak nonsense?
                    <br />
                    If sandalwood becomes cool, should you grind and drink it?
                    <br />
                    If you wear saffron robes, should you deceive the world?
                    <br />
                    If a scorpion becomes fiery, should you embrace it to your
                    throat?
                  </span>

                  <span className="block font-bold text-lg text-purple-300">
                    O Krishna! O Kanha! Enchanter of hearts
                  </span>

                  <span className="block">
                    If another&apos;s wife becomes beautiful, should you
                    forcibly take her?
                    <br />
                    If a knife becomes golden, should you stab your own chest?
                    <br />
                    If slippers become velvet, should you tie them to your head?
                  </span>

                  <span className="block font-bold text-lg text-purple-300">
                    O Krishna! O Kanha! Enchanter of hearts
                  </span>

                  <span className="block">
                    If a true guru becomes a relative, should you abandon good
                    conduct?
                    <br />
                    If you meet God daily, should you show off to the world?
                    <br />
                    If you have a lamp at home, should you tie it to the roof?
                    <br />
                    Eknath Janardani says, recognize this Hari in secret
                  </span>

                  <span className="block font-bold text-lg text-purple-300">
                    O Krishna! O Kanha! Enchanter of hearts
                  </span>
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
                  lyricTimings={lyricTimings}
                  lyricsData={lyricsData}
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
            {showInfo || isAudioEnded ? "Show Lyrics" : "Song Info"}
          </button>
        </div>
      </div>

      <audio ref={audioRef} src="/areKrishanAreKanha.mp3" />

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg mb-4">
              Bhai रुको पहिले गाना सुनो फिर पढ़ लेना
              <br />
              <span className="text-gray-600 italic">
                (Translation: Brother, wait, listen to the song first, then you
                can read)
              </span>
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
};

export default SongPage;

// export default SongPage;
