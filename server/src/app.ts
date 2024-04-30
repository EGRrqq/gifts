import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(cors());

app.get("/api", (_, res) => {
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.end(`
    <section>
      <h1>list of available api</h1>
      <ul>
        <li><a href="/api/buh">buh</a></li>
      </ul>
    </section>
  `);
});

app.get("/api/buh", async (_, res) => {
  res.send({ buh: "buh" });
});

export default app;
