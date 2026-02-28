import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schema from "@shared/schema";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required. Please check your .env file.");
}

// Check if using SQLite
if (process.env.DATABASE_URL.startsWith("sqlite:")) {
  const sqlite = new Database(process.env.DATABASE_URL.replace("sqlite:", ""));
  export const db = drizzle(sqlite, { schema });
  console.log("Connected to SQLite database");
} else {
  // Fallback to PostgreSQL (you'll need to install pg and @types/pg)
  console.log("PostgreSQL detected - please install: npm install pg @types/pg");
  throw new Error("PostgreSQL setup required. For easier testing, use SQLite by setting DATABASE_URL=sqlite:./litera_club.db");
}
