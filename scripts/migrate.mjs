import { neon } from '@netlify/neon';

async function runMigration() {
  try {
    const sql = neon();
    
    console.log('Running migration...');
    
    await sql`
      CREATE TABLE IF NOT EXISTS usuarios (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;
    
    await sql`CREATE INDEX IF NOT EXISTS idx_usuarios_email ON usuarios(email)`;
    
    console.log('Migration completed successfully!');
    
    const result = await sql`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'usuarios'`;
    if (result.length > 0) {
      console.log('✓ Table "usuarios" created successfully');
    }
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

runMigration();
