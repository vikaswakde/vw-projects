export interface Word {
    text: string;
    animation?: 'bounce' |'shake' | 'stagger' | 'fade';
}

export interface LyricLine {
    id: string;
    text: string;
    startTime: number;
    endTime: number;
    animationType?:'bounce' |'shake' | 'stagger' | 'fade';
    words: Word[];
}


export const iceIceBabyLyrics: LyricLine[] = [
  {
    id: 'verse2-1',
    text: "Now that the party is jumpin'",
    startTime: 0,
    endTime: 2000,
    animationType: 'fade',
    words: [
      { text: "Now", animation: "fade" },
      { text: "that", animation: "fade" },
      { text: "the", animation: "fade" },
      { text: "party", animation: "fade" },
      { text: "is", animation: "fade" },
      { text: "jumpin'", animation: "bounce" }
    ]
  },
  {
    id: 'verse2-2',
    text: "With the bass kicked in and the Vegas are pumpin'",
    startTime: 2000,
    endTime: 4000,
    animationType: 'fade',
    words: [
      { text: "With", animation: "fade" },
      { text: "the", animation: "fade" },
      { text: "bass", animation: "fade" },
      { text: "kicked", animation: "fade" },
      { text: "in", animation: "fade" },
      { text: "and", animation: "fade" },
      { text: "the", animation: "fade" },
      { text: "Vegas", animation: "fade" },
      { text: "are", animation: "fade" },
      { text: "pumpin'", animation: "fade" }
    ]
  },
  {
    id: 'verse2-3',
    text: "Quick to the point, to the point, no fakin'",
    startTime: 4000,
    endTime: 6000,
    animationType: 'fade',
    words: [
      { text: "Quick", animation: "fade" },
      { text: "to", animation: "fade" },
      { text: "the", animation: "fade" },
      { text: "point,", animation: "fade" },
      { text: "to", animation: "fade" },
      { text: "the", animation: "fade" },
      { text: "point,", animation: "fade" },
      { text: "no", animation: "fade" },
      { text: "fakin'", animation: "fade" }
    ]
  },
  {
    id: 'verse2-4',
    text: "Cookin' MCs like a pound of bacon",
    startTime: 6000,
    endTime: 8000,
    animationType: 'fade',
    words: [
      { text: "Cookin'", animation: "fade" },
      { text: "MCs", animation: "fade" },
      { text: "like", animation: "fade" },
      { text: "a", animation: "fade" },
      { text: "pound", animation: "fade" },
      { text: "of", animation: "fade" },
      { text: "bacon", animation: "fade" }
    ]
  },
  {
    id: 'verse2-5',
    text: "Burnin' 'em if you ain't quick and nimble",
    startTime: 8000,
    endTime: 10000,
    animationType: 'fade',
    words: [
      { text: "Burnin'", animation: "fade" },
      { text: "'em", animation: "fade" },
      { text: "if", animation: "fade" },
      { text: "you", animation: "fade" },
      { text: "ain't", animation: "fade" },
      { text: "quick", animation: "fade" },
      { text: "and", animation: "fade" },
      { text: "nimble", animation: "fade" }
    ]
  },
  {
    id: 'verse2-6',
    text: "I go crazy when I hear a cymbal",
    startTime: 10000,
    endTime: 12000,
    animationType: 'fade',
    words: [
      { text: "I", animation: "fade" },
      { text: "go", animation: "fade" },
      { text: "crazy", animation: "fade" },
      { text: "when", animation: "fade" },
      { text: "I", animation: "fade" },
      { text: "hear", animation: "fade" },
      { text: "a", animation: "fade" },
      { text: "cymbal", animation: "fade" }
    ]
  },
  {
    id: 'verse2-7',
    text: "And a hi-hat with a souped up tempo",
    startTime: 12000,
    endTime: 14000,
    animationType: 'fade',
    words: [
      { text: "And", animation: "fade" },
      { text: "a", animation: "fade" },
      { text: "hi-hat", animation: "fade" },
      { text: "with", animation: "fade" },
      { text: "a", animation: "fade" },
      { text: "souped", animation: "fade" },
      { text: "up", animation: "fade" },
      { text: "tempo", animation: "fade" }
    ]
  },
  {
    id: 'verse2-8',
    text: "I'm on a roll, it's time to go solo",
    startTime: 14000,
    endTime: 16000,
    animationType: 'fade',
    words: [
      { text: "I'm", animation: "fade" },
      { text: "on", animation: "fade" },
      { text: "a", animation: "fade" },
      { text: "roll,", animation: "fade" },
      { text: "it's", animation: "fade" },
      { text: "time", animation: "fade" },
      { text: "to", animation: "fade" },
      { text: "go", animation: "fade" },
      { text: "solo", animation: "fade" }
    ]
  },
  {
    id: 'verse2-9',
    text: "Rollin' in my 5.0",
    startTime: 16000,
    endTime: 18000,
    animationType: 'fade',
    words: [
      { text: "Rollin'", animation: "fade" },
      { text: "in", animation: "fade" },
      { text: "my", animation: "fade" },
      { text: "5.0", animation: "shake" }
    ]
  },
  {
    id: 'verse2-10',
    text: "With the ragtop down so my hair can blow",
    startTime: 18000,
    endTime: 20000,
    animationType: 'fade',
    words: [
      { text: "With", animation: "fade" },
      { text: "the", animation: "fade" },
      { text: "ragtop", animation: "fade" },
      { text: "down", animation: "fade" },
      { text: "so", animation: "fade" },
      { text: "my", animation: "fade" },
      { text: "hair", animation: "fade" },
      { text: "can", animation: "fade" },
      { text: "blow", animation: "fade" }
    ]
  },
  {
    id: 'verse2-11',
    text: "The girlies on standby, wavin' just to say hi",
    startTime: 20000,
    endTime: 22000,
    animationType: 'fade',
    words: [
      { text: "The", animation: "fade" },
      { text: "girlies", animation: "fade" },
      { text: "on", animation: "fade" },
      { text: "standby,", animation: "fade" },
      { text: "wavin'", animation: "fade" },
      { text: "just", animation: "fade" },
      { text: "to", animation: "fade" },
      { text: "say", animation: "fade" },
      { text: "hi", animation: "fade" }
    ]
  },
  {
    id: 'verse2-12',
    text: '"Did you stop?" No, I just drove by',
    startTime: 22000,
    endTime: 25000,
    animationType: 'fade',
    words: [
      { text: "Did", animation: "fade" },
      { text: "you", animation: "fade" },
      { text: "stop?" , animation: "shake" },
      { text: "No,", animation: "fade" },
      { text: "I", animation: "fade" },
      { text: "just", animation: "fade" },
      { text: "drove", animation: "fade" },
      { text: "by", animation: "bounce" }
    ]
  },
  {
    id: 'verse2-13',
    text: "Kept on, pursuin' to the next stop",
    startTime: 25000,
    endTime: 27000,
    animationType: 'fade',
    words: [
      { text: "Kept", animation: "fade" },
      { text: "on,", animation: "fade" },
      { text: "pursuin'", animation: "fade" },
      { text: "to", animation: "fade" },
      { text: "the", animation: "fade" },
      { text: "next", animation: "fade" },
      { text: "stop", animation: "fade" }
    ]
  },
  {
    id: 'verse2-14',
    text: "I busted a left and I'm headin' to the next block",
    startTime: 27000,
    endTime: 29000,
    animationType: 'fade',
    words: [
      { text: "I", animation: "fade" },
      { text: "busted", animation: "fade" },
      { text: "a", animation: "fade" },
      { text: "left", animation: "fade" },
      { text: "and", animation: "fade" },
      { text: "I'm", animation: "fade" },
      { text: "headin'", animation: "fade" },
      { text: "to", animation: "fade" },
      { text: "the", animation: "fade" },
      { text: "next", animation: "fade" },
      { text: "block", animation: "fade" }
    ]
  },
  {
    id: 'verse2-15',
    text: "The block was dead, yo, so I continued to",
    startTime: 29000,
    endTime: 31000,
    animationType: 'fade',
    words: [
      { text: "The", animation: "fade" },
      { text: "block", animation: "fade" },
      { text: "was", animation: "fade" },
      { text: "dead,", animation: "fade" },
      { text: "yo,", animation: "fade" },
      { text: "so", animation: "fade" },
      { text: "I", animation: "fade" },
      { text: "continued", animation: "fade" },
      { text: "to", animation: "fade" }
    ]
  },
  {
    id: 'verse2-16',
    text: "A1A Beachfront Avenue",
    startTime: 31000,
    endTime: 33000,
    animationType: 'fade',
    words: [
      { text: "A1A", animation: "bounce" },
      { text: "Beachfront", animation: "bounce" },
      { text: "Avenue", animation: "bounce" }
    ]
  },
  {
    id: 'verse2-17',
    text: "Girls were hot wearing less than bikinis",
    startTime: 33000,
    endTime: 35000,
    animationType: 'fade',
    words: [
      { text: "Girls", animation: "fade" },
      { text: "were", animation: "fade" },
      { text: "hot", animation: "fade" },
      { text: "wearing", animation: "fade" },
      { text: "less", animation: "fade" },
      { text: "than", animation: "fade" },
      { text: "bikinis", animation: "fade" }
    ]
  },
  {
    id: 'verse2-18',
    text: "Rockman lovers driving Lamborghinis",
    startTime: 35000,
    endTime: 37000,
    animationType: 'fade',
    words: [
      { text: "Rockman", animation: "fade" },
      { text: "lovers", animation: "fade" },
      { text: "driving", animation: "fade" },
      { text: "Lamborghinis", animation: "stagger" }
    ]
  },
  {
    id: 'verse2-19',
    text: "Jealous, 'cause I'm out getting mine",
    startTime: 37000,
    endTime: 39000,
    animationType: 'fade',
    words: [
      { text: "Jealous,", animation: "fade" },
      { text: "'cause", animation: "fade" },
      { text: "I'm", animation: "fade" },
      { text: "out", animation: "fade" },
      { text: "getting", animation: "fade" },
      { text: "mine", animation: "fade" }
    ]
  },
  {
    id: 'verse2-20',
    text: "Shay with a gauge and Vanilla with a 9",
    startTime: 39000,
    endTime: 41000,
    animationType: 'fade',
    words: [
      { text: "Shay", animation: "fade" },
      { text: "with", animation: "fade" },
      { text: "a", animation: "fade" },
      { text: "gauge", animation: "fade" },
      { text: "and", animation: "fade" },
      { text: "Vanilla", animation: "fade" },
      { text: "with", animation: "fade" },
      { text: "a", animation: "fade" },
      { text: "9", animation: "fade" }
    ]
  },
  {
    id: 'verse2-21',
    text: "Ready for the chumps on the wall",
    startTime: 41000,
    endTime: 43000,
    animationType: 'fade',
    words: [
      { text: "Ready", animation: "fade" },
      { text: "for", animation: "fade" },
      { text: "the", animation: "fade" },
      { text: "chumps", animation: "fade" },
      { text: "on", animation: "fade" },
      { text: "the", animation: "fade" },
      { text: "wall", animation: "fade" }
    ]
  },
  {
    id: 'verse2-22',
    text: "The chumps acting ill because they're full of eight ball",
    startTime: 43000,
    endTime: 45000,
    animationType: 'fade',
    words: [
      { text: "The", animation: "fade" },
      { text: "chumps", animation: "fade" },
      { text: "acting", animation: "fade" },
      { text: "ill", animation: "fade" },
      { text: "because", animation: "fade" },
      { text: "they're", animation: "fade" },
      { text: "full", animation: "fade" },
      { text: "of", animation: "fade" },
      { text: "eight", animation: "fade" },
      { text: "ball", animation: "fade" }
    ]
  },
  {
    id: 'verse2-23',
    text: "Gunshots ranged out like a bell",
    startTime: 45000,
    endTime: 47000,
    animationType: 'fade',
    words: [
      { text: "Gunshots", animation: "bounce" },
      { text: "ranged", animation: "fade" },
      { text: "out", animation: "fade" },
      { text: "like", animation: "fade" },
      { text: "a", animation: "fade" },
      { text: "bell", animation: "shake" }
    ]
  },
  {
    id: 'verse2-24',
    text: "I grabbed my 9, all I heard were shells",
    startTime: 47000,
    endTime: 49000,
    animationType: 'fade',
    words: [
      { text: "I", animation: "fade" },
      { text: "grabbed", animation: "fade" },
      { text: "my", animation: "fade" },
      { text: "9,", animation: "fade" },
      { text: "all", animation: "fade" },
      { text: "I", animation: "fade" },
      { text: "heard", animation: "fade" },
      { text: "were", animation: "fade" },
      { text: "shells", animation: "fade" }
    ]
  },
  {
    id: 'verse2-25',
    text: "Falling on the concrete real fast",
    startTime: 49000,
    endTime: 52000,
    animationType: 'fade',
    words: [
      { text: "Falling", animation: "bounce" },
      { text: "on", animation: "fade" },
      { text: "the", animation: "fade" },
      { text: "concrete", animation: "fade" },
      { text: "real", animation: "fade" },
      { text: "fast", animation: "fade" }
    ]
  },
  {
    id: 'verse2-26',
    text: "bounce in my car, slammed on the gas",
    startTime: 52000,
    endTime: 53000,
    animationType: 'fade',
    words: [
      { text: "Jumped", animation: "fade" },
      { text: "in", animation: "fade" },
      { text: "my", animation: "fade" },
      { text: "car,", animation: "fade" },
      { text: "slammed", animation: "fade" },
      { text: "on", animation: "fade" },
      { text: "the", animation: "fade" },
      { text: "gas", animation: "fade" }
    ]
  },
  {
    id: 'verse2-27',
    text: "Bumper to bumper, the avenue's packed",
    startTime: 53000,
    endTime: 56000,
    animationType: 'fade',
    words: [
      { text: "Bumper", animation: "shake" },
      { text: "to", animation: "fade" },
      { text: "bumper,", animation: "shake" },
      { text: "the", animation: "fade" },
      { text: "avenue's", animation: "fade" },
      { text: "packed", animation: "fade" }
    ]
  },
  {
    id: 'verse2-28',
    text: "I'm trying to get away before the jackers jack",
    startTime: 56000,
    endTime: 57000,
    animationType: 'fade',
    words: [
      { text: "I'm", animation: "fade" },
      { text: "trying", animation: "fade" },
      { text: "to", animation: "fade" },
      { text: "get", animation: "fade" },
      { text: "away", animation: "fade" },
      { text: "before", animation: "fade" },
      { text: "the", animation: "fade" },
      { text: "jackers", animation: "fade" },
      { text: "jack", animation: "fade" }
    ]
  },
  {
    id: 'verse2-29',
    text: "Police on the scene, you know what I mean?",
    startTime: 57000,
    endTime: 59500,
    animationType: 'fade',
    words: [
      { text: "Police", animation: "fade" },
      { text: "on", animation: "fade" },
      { text: "the", animation: "fade" },
      { text: "scene,", animation: "fade" },
      { text: "you", animation: "fade" },
      { text: "know", animation: "fade" },
      { text: "what", animation: "fade" },
      { text: "I", animation: "fade" },
      { text: "mean?", animation: "fade" }
    ]
  },
  {
    id: 'verse2-30',
    text: "They passed me up, confronted all the dope fiends",
    startTime: 59500,
    endTime: 62000,
    animationType: 'fade',
    words: [
      { text: "They", animation: "fade" },
      { text: "passed", animation: "fade" },
      { text: "me", animation: "fade" },
      { text: "up,", animation: "fade" },
      { text: "confronted", animation: "fade" },
      { text: "all", animation: "fade" },
      { text: "the", animation: "fade" },
      { text: "dope", animation: "fade" },
      { text: "fiends", animation: "fade" }
    ]
  },
  {
    id: 'verse2-31',
    text: "If there was a problem, yo, I'll solve it",
    startTime: 62000,
    endTime: 64000,
    animationType: 'fade',
    words: [
      { text: "If", animation: "fade" },
      { text: "there", animation: "fade" },
      { text: "was", animation: "fade" },
      { text: "a", animation: "fade" },
      { text: "problem,", animation: "stagger" },
      { text: "yo,", animation: "fade" },
      { text: "I'll", animation: "fade" },
      { text: "solve", animation: "bounce" },
      { text: "it", animation: "bounce" }
    ]
  },
  {
    id: 'verse2-32',
    text: "Check out the hook while my DJ revolves it",
    startTime: 64000,
    endTime: 66000,
    animationType: 'fade',
    words: [
      { text: "Check", animation: "fade" },
      { text: "out", animation: "fade" },
      { text: "the", animation: "fade" },
      { text: "hook", animation: "stagger" },
      { text: "while", animation: "fade" },
      { text: "my", animation: "fade" },
      { text: "DJ", animation: "bounce" },
      { text: "revolves", animation: "fade" },
      { text: "it", animation: "fade" }
    ]
  },
  {
    id: 'chorus-1',
    text: "Ice, ice, baby",
    startTime: 66000,
    endTime: 68000,
    animationType: 'fade',
    words: [
      { text: "Ice,", animation: "fade" },
      { text: "ice,", animation: "fade" },
      { text: "baby", animation: "fade" }
    ]
  },
  {
    id: 'chorus-2',
    text: "Vanilla Ice, ice, baby",
    startTime: 70000,
    endTime: 72900,
    animationType: 'fade',
    words: [
      { text: "Vanilla", animation: "fade" },
      { text: "Ice,", animation: "fade" },
      { text: "ice,", animation: "fade" },
      { text: "baby", animation: "fade" }
    ]
  }
];
