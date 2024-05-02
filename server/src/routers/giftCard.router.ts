import { Router } from "express";
import * as giftController from "../controllers/giftCard.controller";

const router = Router();

router.get("/", giftController.get);
router.get("/:id", giftController.getSingle);
router.post("/", giftController.create);
router.put("/:id", giftController.update);

export default router;
