import express from "express";
import {
  getTranscript,
  postTranscript,
} from "../controller/transcript.controller";

const router = express.Router();

router.post("/", postTranscript);
router.get("/", getTranscript);

export default router;
