export interface Word {
  text: string;
  animation?: 'bounce' | 'shake' | 'pulse' | 'fade'; // Added 'fade' as an option
}

export interface LyricLine {
  id: string;
  text: string;
  startTime: number; // Start time in milliseconds
  endTime: number; // End time in milliseconds
  animationType?: 'bounce' | 'shake' | 'pulse' | 'fade'; // Added 'fade' as an option
  words: Word[];
}

export const marathiLyrics: LyricLine[] = [
  {
    id: "lyric-1",
    text: "अरे कृष्णा ! अरे कान्हा ! मनरंजनमोहना",
    startTime: 0,
    endTime: 5400, // Converted to milliseconds
    animationType: 'fade',
    words: [
      { text: "अरे", animation: "bounce" },
      { text: "कृष्णा", animation: "shake" },
      { text: "!", animation: "fade" },
      { text: "अरे", animation: "bounce" },
      { text: "कान्हा", animation: "shake" },
      { text: "!", animation: "fade" },
      { text: "मनरंजनमोहना", animation: "pulse" },
    ],
  },
  {
    id: "lyric-2",
    text: "अरे कृष्णा ! अरे कान्हा ! मनरंजनमोहना",
    startTime: 9000, // Converted to milliseconds
    endTime: 14000, // Converted to milliseconds
    animationType: 'fade',
    words: [
      { text: "अरे", animation: "fade" },
      { text: "कृष्णा", animation: "fade" },
      { text: "!", animation: "fade" },
      { text: "अरे", animation: "fade" },
      { text: "कान्हा", animation: "fade" },
      { text: "!", animation: "fade" },
      { text: "मनरंजनमोहना", animation: "fade" },
    ],
  },
  {
    id: "lyric-3",
    text: "आले संत घरीं तरी काय बोलुन शिणवावें?",
    startTime: 22000, // Converted to milliseconds
    endTime: 25000, // Converted to milliseconds
    animationType: 'fade',
    words: [
      { text: "आले", animation: "fade" },
      { text: "संत", animation: "fade" },
      { text: "घरीं", animation: "fade" },
      { text: "तरी", animation: "fade" },
      { text: "काय", animation: "fade" },
      { text: "बोलुन", animation: "fade" },
      { text: "शिणवावें", animation: "fade" },
      { text: "?", animation: "fade" },
    ],
  },
  {
    id: "lyric-4",
    text: "उंस गोड लागला म्हणून काय मुळासहीत खावे?",
    startTime: 26300, // Converted to milliseconds
    endTime: 30200, // Converted to milliseconds
    animationType: 'fade',
    words: [
      { text: "उंस", animation: "fade" },
      { text: "गोड", animation: "fade" },
      { text: "लागला", animation: "fade" },
      { text: "म्हणून", animation: "fade" },
      { text: "काय", animation: "fade" },
      { text: "मुळासहीत", animation: "fade" },
      { text: "खावे", animation: "fade" },
      { text: "?", animation: "fade" },
    ],
  },
  {
    id: "lyric-5",
    text: "प्रीतीचा पाहुणा झाला म्हणून काय फार दिवस रहावे?",
    startTime: 30600, // Converted to milliseconds
    endTime: 35100, // Converted to milliseconds
    animationType: 'fade',
    words: [
      { text: "प्रीतीचा", animation: "fade" },
      { text: "पाहुणा", animation: "fade" },
      { text: "झाला", animation: "fade" },
      { text: "म्हणून", animation: "fade" },
      { text: "काय", animation: "fade" },
      { text: "फार", animation: "fade" },
      { text: "दिवस", animation: "fade" },
      { text: "रहावे", animation: "fade" },
      { text: "?", animation: "fade" },
    ],
  },
  {
    id: "lyric-6",
    text: "गांवचा पाटील झाला म्हणून काय गांवच बुडवावे?",
    startTime: 35200, // Converted to milliseconds
    endTime: 39100, // Converted to milliseconds
    animationType: 'fade',
    words: [
      { text: "गांवचा", animation: "fade" },
      { text: "पाटील", animation: "fade" },
      { text: "झाला", animation: "fade" },
      { text: "म्हणून", animation: "fade" },
      { text: "काय", animation: "fade" },
      { text: "गांवच", animation: "fade" },
      { text: "बुडवावे", animation: "fade" },
      { text: "?", animation: "fade" },
    ],
  },
  {
    id: "lyric-7",
    text: "अरे कृष्णा ! अरे कान्हा ! मनरंजनमोहना",
    startTime: 39200, // Converted to milliseconds
    endTime: 45500, // Converted to milliseconds
    animationType: 'fade',
    words: [
      { text: "अरे", animation: "bounce" },
      { text: "कृष्णा", animation: "shake" },
      { text: "!", animation: "fade" },
      { text: "अरे", animation: "bounce" },
      { text: "कान्हा", animation: "shake" },
      { text: "!", animation: "fade" },
      { text: "मनरंजनमोहना", animation: "pulse" },
    ],
  },
  {
    id: "lyric-8",
    text: "अरे कृष्णा ! अरे कान्हा ! मनरंजनमोहना",
    startTime: 48500, // Converted to milliseconds
    endTime: 54000, // Converted to milliseconds
    animationType: 'fade',
    words: [
      { text: "अरे", animation: "fade" },
      { text: "कृष्णा", animation: "fade" },
      { text: "!", animation: "fade" },
      { text: "अरे", animation: "fade" },
      { text: "कान्हा", animation: "fade" },
      { text: "!", animation: "fade" },
      { text: "मनरंजनमोहना", animation: "fade" },
    ],
  },
];
