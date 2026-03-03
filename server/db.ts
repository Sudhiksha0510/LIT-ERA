<<<<<<< HEAD
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
=======
import "dotenv/config";
>>>>>>> events-pr
import * as schema from "@shared/schema";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

<<<<<<< HEAD
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, { schema });

console.log("Connected to PostgreSQL");
=======
let db: any;
let pool: any = null;

// Auto-detect database type
if (process.env.DATABASE_URL.startsWith("sqlite:")) {
  // SQLite
  const { drizzle } = await import("drizzle-orm/better-sqlite3");
  const Database = (await import("better-sqlite3")).default;
  
  const sqlite = new Database(process.env.DATABASE_URL.replace("sqlite:", ""));
  db = drizzle(sqlite, { schema });
  console.log("✓ Connected to SQLite database");
} else {
  // PostgreSQL
  const { drizzle } = await import("drizzle-orm/node-postgres");
  const pg = await import("pg");
  const { Pool } = pg.default;
  
  pool = new Pool({ 
    connectionString: process.env.DATABASE_URL,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  });
  
  pool.on('error', (err: any) => {
    console.error('Unexpected database error:', err);
  });
  
  db = drizzle(pool, { schema });
  console.log("✓ Connected to PostgreSQL database");
}

export { db, pool };
>>>>>>> events-pr
