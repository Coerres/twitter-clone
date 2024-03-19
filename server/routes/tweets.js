import express from "express";
import { verifyToken } from "../verifyToken.js";
import {createTweet} from "../controllers/tweet.js";


const router = express.Router();

router.post('/', verifyToken, createTweet);

export default router;