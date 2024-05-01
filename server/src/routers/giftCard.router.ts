import { Router } from "express";
import * as giftController from "../controllers/giftCard.controller";

const router = Router();

router.get("/", giftController.get);
router.post("/", giftController.create);

export default router;
