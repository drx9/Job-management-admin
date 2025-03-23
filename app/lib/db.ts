import { Pool } from 'pg';


const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'switchyard.proxy.rlwy.net',
  database: process.env.DB_NAME || 'railway',
  password: process.env.DB_PASSWORD || 'VAnPsPFxBBqKWxBFtkZLTTvLiPdtjqQz',
  port: Number(process.env.DB_PORT) || 42012,
});

export default pool;
