import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { giftCardRouter, saleRouter } from "./routers";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan("dev"));
app.use(cors());

app.use("/api/gift-cards", giftCardRouter);
app.use("/api/sales", saleRouter);

export default app;
