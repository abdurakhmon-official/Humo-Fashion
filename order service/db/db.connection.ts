import * as schema from'./schema'
import { Pool } from "pg";
import { DATABASE_URL } from "../config";
import { NodePgDatabase, drizzle } from "drizzle-orm/node-postgres";

const pool = new Pool({
  connectionString: DATABASE_URL,
});

export const DB: NodePgDatabase<typeof schema> = drizzle(pool, { schema });
