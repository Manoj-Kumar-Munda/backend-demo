import dotenv from "dotenv";
import path from "node:path";
import { z } from "zod";

const nodeEnv = process.env.NODE_ENV || "development";

const loadEnvFile = (filename: string, override = false) => {
  dotenv.config({
    path: path.resolve(process.cwd(), filename),
    override,
  });
};

loadEnvFile(".env");
loadEnvFile(`.env.${nodeEnv}`, true);

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production"])
    .default("development"),
  PORT: z.coerce.number().int().positive().default(3000),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("Invalid environment variables:", parsed.error.flatten().fieldErrors);
  process.exit(1);
}

const { NODE_ENV, PORT } = parsed.data;

export const env = {
  nodeEnv: NODE_ENV,
  port: PORT,
  isDev: NODE_ENV === "development",
  isProd: NODE_ENV === "production",
} as const;
