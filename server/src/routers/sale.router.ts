import { Router } from "express";
import * as saleController from "../controllers/sales.controller";

const router = Router();

router.get("/", saleController.get);

router.post("/", saleController.create);

export default router;
