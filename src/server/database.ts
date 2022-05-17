const { Pool } = require('pg')

const createSchema = `
CREATE TABLE IF NOT EXISTS sessions_v1 (
    gameid varchar(255) NOT NULL,
    gamestate jsonb NOT NULL,
    PRIMARY KEY (gameid)
  )
`

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

pool.on('error', (err: any, client: any) =>{
    console.error('Database error', err)
})

export async function query(statement: any, positionals?: any) {
    const client = await pool.connect()
    try {
        const data = await client.query(statement, positionals)
        return data
    } finally {
        client.release()
    }
}

// Ensure we have our schema
query(createSchema)