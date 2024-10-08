import { Request, Response } from "express";
import { YoutubeTranscript } from "youtube-transcript";
import { cleanTranscript, getYTIdFromUrl, isValidYTUrl } from "../lib/utils";

export const postTranscript = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { url } = req.body;
    console.log(url);

    if (!url) {
      res.status(400).json({ error: "URL is required" });
      return;
    }

    // validate url
    const validYTUrl = isValidYTUrl(url);
    if (!validYTUrl) {
      res.status(400).json({ error: "Invalid YouTube URL" });
      return;
    }

    // get id
    const YTId = getYTIdFromUrl(url);
    if (!YTId) {
      res.status(400).json({ error: "Invalid YouTube ID" });
      return;
    }

    // get transcript
    const transcript = await YoutubeTranscript.fetchTranscript(YTId);
    if (!transcript) {
      res.status(400).json({ error: "Failed to fetch transcript" });
      return;
    }

    // clean transcript
    const cleanedTranscript = cleanTranscript(transcript);
    res.status(200).json({
      transcript: cleanedTranscript,
    });
  } catch (error) {
    console.error("Error in postTranscript:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getTranscript = (req: Request, res: Response): void => {
  res.send("Hello World");
};
