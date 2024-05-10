import { Router } from "express";
import * as saleController from "../controllers/sales.controller";

const router = Router();

router.get("/", saleController.getWithSearch);
router.get("/:id", saleController.getSingle);

router.post("/", saleController.create);

router.put("/:id", saleController.update);

router.delete("/:id", saleController.remove);

export default router;
