import express from "express";
import { verifyToken } from "../verifyToken.js";
import { createTweet, deleteTweet, likeOrDislike } from "../controllers/tweet.js";


const router = express.Router();

// Create a Tweet
router.post("/", verifyToken, createTweet);

//Delete a Tweet
router.delete("/:id", verifyToken, deleteTweet);

// Like or Dislike a Tweet
router.put("/:id/like", likeOrDislike);
export default router;