import express from "express";
import { allChats, singleChat } from "../controllers/chatControllers.js";
import { catchErrors } from "../middleware/error-middleware.js";

const router = express.Router();

router.get(`/:chatId`, catchErrors(singleChat));
router.get(`/`, catchErrors(allChats));

export default router;