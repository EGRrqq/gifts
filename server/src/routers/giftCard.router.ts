import { Router } from "express";
import * as giftController from "../controllers/giftCard.controller";

const router = Router();

router.get("/", giftController.get);

export default router;
