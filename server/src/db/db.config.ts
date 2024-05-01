import { PoolConfig } from "mysql";
import { env } from "process";

export const dbConfig: PoolConfig = {
  connectionLimit: Number(env.DB_LIMIT) || 10,
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
};
