import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schema from "@shared/schema";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required. Please check your .env file.");
}

// Support SQLite
const dbPath = process.env.DATABASE_URL.replace("sqlite:", "");
const sqlite = new Database(dbPath);
export const db = drizzle(sqlite, { schema });

console.log(`Connected to SQLite database: ${dbPath}`);
