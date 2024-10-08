export function isValidYTUrl(url: string) {
  const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
  return regex.test(url);
}

export function getYTIdFromUrl(url: string) {
  const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
  const match = url.match(regex);
  return match ? match[0] : null;
}

type TranscriptSegment = {
  text: string;
  duration: number;
  offset: number;
}

export const cleanTranscript = (transcript: TranscriptSegment[]): string => {
  let cleanedText = "";
  let currentSentence = "";

  transcript.forEach((segment, index) => {
    // Remove any leading/trailing whitespace and normalize spaces
    const text = segment.text.trim().replace(/\s+/g, " ");

    // Capitalize the first letter of the segment if it's the start of a new sentence
    if (currentSentence === "") {
      currentSentence = text.charAt(0).toUpperCase() + text.slice(1);
    } else {
      currentSentence += " " + text;
    }

    // Check if the segment ends with punctuation
    if (/[.!?]$/.test(text)) {
      cleanedText += currentSentence + "\n";
      currentSentence = "";
    }

    // If it's the last segment and doesn't end with punctuation, add it anyway
    if (index === transcript.length - 1 && currentSentence !== "") {
      cleanedText += currentSentence + ".\n";
    }
  });

  return cleanedText.trim();
};
