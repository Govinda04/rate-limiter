import express from "express";
import { redisClient } from "./config/redis";
import { pgPool } from "./config/postgres";

const app = express();

app.get("/health", async (_req, res) => {
  try {
    await redisClient.ping();
    await pgPool.query("SELECT 1");
    res.status(200).json({ status: "ok" });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
});

export default app;
