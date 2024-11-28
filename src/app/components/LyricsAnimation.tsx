import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LyricLine {
  id: string;
  text: string;
  startTime: number;
  endTime: number;
  animationType: string;
}

interface LyricItem {
  text: string;
}

interface LyricsAnimationProps {
  lyricTimings: LyricLine[];
  lyricsData: (LyricLine | LyricItem[])[];
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

  // Helper function to check if line is in the new format
  const isNewFormat = (line: LyricLine | LyricItem[]): line is LyricLine => {
    return typeof line === 'object' && 'text' in line;
  };

  // Convert line to array format if it's not already
  const getLineContent = (line: LyricLine | LyricItem[]): LyricItem[] => {
    if (isNewFormat(line)) {
      // New format (Ice Ice Baby)
      return [{ text: line.text }];
    }
    // Old format (Marathi song)
    return line;
  };

  useEffect(() => {
    if (!isPlaying) return;

    const timeInMs = currentTime * 1000;
    const lineIndex = lyricTimings.findIndex((line) => {
      return timeInMs >= line.startTime && timeInMs <= line.endTime;
    });

    if (lineIndex !== -1) {
      setActiveLineIndex(lineIndex);
      const currentLine = lyricTimings[lineIndex];
      // const lineDuration = (currentLine.endTime - currentLine.startTime) / 1000;
      
      const lineProgress = (timeInMs - currentLine.startTime) / (currentLine.endTime - currentLine.startTime);

      const line = getLineContent(lyricsData[lineIndex]);
      const activeItem = Math.floor(lineProgress * line.length);

      setActiveItemIndex(activeItem);

      if (containerRef.current) {
        const lineElement = containerRef.current.children[lineIndex] as HTMLElement;
        if (lineElement) {
          lineElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  }, [currentTime, lyricTimings, lyricsData, isPlaying, getLineContent]);

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
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;700&display=swap');
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
            {getLineContent(line).map((item, itemIndex) => (
              <motion.span
                key={itemIndex}
                animate={{
                  color:
                    isPlaying &&
                    lineIndex === activeLineIndex &&
                    itemIndex <= activeItemIndex
                      ? "#ffffff"
                      : "rgba(255,255,255,0.5)",
                  textShadow:
                    isPlaying &&
                    lineIndex === activeLineIndex &&
                    itemIndex <= activeItemIndex
                      ? "0 0 8px rgba(255,255,255,0.3)"
                      : "none",
                }}
                transition={{ duration: 0.1 }}
                className="inline-block mr-1"
              >
                {item.text}
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
