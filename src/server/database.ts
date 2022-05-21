const { Pool } = require('pg')

const createSchema = `
CREATE TABLE IF NOT EXISTS sessions_v1 (
    gameid varchar(255) NOT NULL,
    gamestate jsonb NOT NULL,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp,
    PRIMARY KEY (gameid)
  )
`

export const SELECT_STATEMENT = `SELECT gamestate FROM sessions_v1 WHERE gameid = $1`

export const UPSERT_STATEMENT = `
INSERT INTO sessions_v1
    (gameid, gamestate)
    VALUES($1, $2)
    ON CONFLICT (gameid)
    DO
        UPDATE SET gamestate = $2, updated_at = current_timestamp
`

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
      },
})

pool.on('error', (err: any, client: any) =>{
    console.error('Database error', err)
})

export async function query(statement: any, positionals?: any) {
    if (!process.env.DATABASE_URL) {
        return null
    }
    const client = await pool.connect()
    try {
        const data = await client.query(statement, positionals)
        return data
    } finally {
        client.release()
    }
}

// Ensure we have our schema
if (process.env.DATABASE_URL) {
    console.log('Creating initial schema')
    query(createSchema)
}
