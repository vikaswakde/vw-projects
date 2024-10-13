import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LyricsAnimationProps {
  lyricTimings: Array<{ startTime: number; endTime: number; text: string }>;
  lyricsData: Array<Array<{ text: string; type: string }>>;
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

    const lineIndex = lyricTimings.findIndex(
      (line) => currentTime >= line.startTime && currentTime < line.endTime
    );

    if (lineIndex !== -1) {
      setActiveLineIndex(lineIndex);
      const lineDuration =
        lyricTimings[lineIndex].endTime - lyricTimings[lineIndex].startTime;
      const lineProgress =
        (currentTime - lyricTimings[lineIndex].startTime) / lineDuration;

      const line = lyricsData[lineIndex];
      const activeItem = Math.floor(lineProgress * line.length);

      setActiveItemIndex(activeItem);

      // Scroll to active line
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
      className="lyrics-container font-['Noto_Sans_Devanagari'] text-4xl leading-relaxed h-full flex flex-col items-center bg-gradient-to-b from-purple-900 to-black text-white p-4  overflow-y-auto"
      style={{
        letterSpacing: "0.03em",
        fontWeight: 700,
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;700&display=swap');
        .lyrics-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {/* <div className="h-1/6 min-h-[1.5rem]"></div> */}
      <AnimatePresence>
        {lyricsData.map((line, lineIndex) => (
          <motion.div
            key={lineIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: lineIndex === activeLineIndex ? 1 : 0.3,
              y: 0,
              scale: lineIndex === activeLineIndex ? 1.1 : 1,
            }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`lyric-line mb-10 text-center max-w-[90%]`}
          >
            {line.map((item, itemIndex) => (
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
      <div className="h-2/3 min-h-[10.25rem]"></div>
    </div>
  );
};

export default LyricsAnimation;
