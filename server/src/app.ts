import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { BuhRouter } from "./routers";

const app = express();

app.use(morgan("dev"));
app.use(cors());

app.use("/api/buh", BuhRouter);

export default app;
