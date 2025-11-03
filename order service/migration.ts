import { Pool } from 'pg'
import { DATABASE_URL } from './config'
import {drizzle} from 'drizzle-orm/node-postgres'
import {migrate} from 'drizzle-orm/node-postgres/migrator'

async function runMigration() {
    try {
        console.log('migration start...')
        const pool = new Pool({connectionString: DATABASE_URL})
        const db = drizzle(pool)
        await migrate(db, {migrationsFolder: './db/migrations'})
        console.log('migration is successful!')
        pool.end()
    } catch (error) {
        console.log('migration error', error)
    }
}

runMigration()