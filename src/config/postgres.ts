import { Pool } from "pg";
import { env } from "./env";

export const pgPool = new Pool({
  user: env.postgres.user,
  password: env.postgres.password,
  database: env.postgres.database,
  host: env.postgres.host,
  port: env.postgres.port,
});

pgPool
  .connect()
  .then(() => console.log("✅ Connected to PostgreSQL"))
  .catch((err: any) => console.error("❌ PostgreSQL connection error:", err));
