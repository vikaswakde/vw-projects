import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Word {
  text: string;
  animation?:'bounce' |'shake' | 'stagger' | 'fade';
}

interface LyricLine {
  id: string;
  text: string;
  startTime: number;
  endTime: number;
  animationType?:  'bounce' |'shake' | 'stagger' | 'fade';
  words?: Word[];
}

interface LyricsAnimationProps {
  lyricTimings: LyricLine[];
  lyricsData: (LyricLine | Word[])[];
  currentTime: number;
  isPlaying: boolean;
}

const LyricsAnimation: React.FC<LyricsAnimationProps> = ({
  lyricTimings,
  lyricsData,
  currentTime,
  isPlaying,
}) => {
  const [activeLineIndex, setActiveLineIndex] = useState(-1);
  const [activeItemIndex, setActiveItemIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPlaying) return;

    const timeInMs = currentTime * 1000;
    const lineIndex = lyricTimings.findIndex((line) => {
      return timeInMs >= line.startTime && timeInMs <= line.endTime;
    });

    if (lineIndex !== -1) {
      setActiveLineIndex(lineIndex);
      const currentLine = lyricTimings[lineIndex];

      const lineProgress =
        (timeInMs - currentLine.startTime) /
        (currentLine.endTime - currentLine.startTime);
      const line = lyricsData[lineIndex] as LyricLine;
      const activeItem = line.words ? Math.floor(lineProgress * line.words.length) : -1;

      setActiveItemIndex(activeItem);
      if (containerRef.current) {
        const lineElement = containerRef.current.children[
          lineIndex
        ] as HTMLElement;
        if (lineElement) {
          lineElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  }, [currentTime, lyricTimings, lyricsData, isPlaying]);

  return (
    <div
      ref={containerRef}
      className="lyrics-container font-['Noto_Sans_Devanagari'] text-3xl leading-relaxed h-full flex flex-col items-center bg-gradient-to-b from-purple-900 to-black text-white p-4 overflow-y-auto mt-5 scrollbar-hide"
      style={{
        letterSpacing: "0.03em",
        fontWeight: 700,
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;700&display=swap");
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="h-1/6 min-h-[2rem]"></div>
      <AnimatePresence>
        {lyricsData.map((line, lineIndex) => (
          <motion.div
            key={lineIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: lineIndex === activeLineIndex ? 1 : 0.3,
              y: 0,
              scale: lineIndex === activeLineIndex ? 1.05 : 1,
            }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`lyric-line mb-8 text-center max-w-[95%]`}
          >
            {(line as LyricLine)?.words?.map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0 }} // Start with opacity 0 for fade-in effect
                animate={{
                  opacity:
                    isPlaying &&
                    lineIndex === activeLineIndex &&
                    wordIndex <= activeItemIndex
                      ? 1 // Fade in when the word is active
                      : 0.5, // Keep it hidden otherwise
                  y: isPlaying && lineIndex === activeLineIndex && wordIndex <= activeItemIndex 
                    ? (word.animation === 'bounce' ? [0, -10, 0] : 
                       word.animation === 'shake' ? [0, 5, -5, 5, 0] : 
                       word.animation === 'stagger' ? [0, -5, 5, -5, 0] : 
                       0) 
                    : 0, // Apply specific animation based on word.animation
                }}
                transition={{ duration: 0.1, delay: wordIndex * 0.05 }}
                className="inline-block mr-1"
              >
                {word.text}
              </motion.span>
            ))}
          </motion.div>
        ))}
      </AnimatePresence>
      <div className="h-1/2 min-h-[8rem]"></div>
    </div>
  );
};

export default LyricsAnimation;
