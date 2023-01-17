import express from "express";
import { allChats, singleChat } from "../controllers/chatControllers.js";

const router = express.Router();

router.get(`/:chatId`, singleChat);
router.get(`/`, allChats);

export default router;