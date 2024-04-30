import { Router } from "express";

const router = Router();

router.get("/", async (_, res) => {
  res.send({ buh: "buh" });
});

export default router;
