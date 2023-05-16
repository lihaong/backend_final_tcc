import mysql from 'mysql2';

// Set the MySQL connection configuration
const connectionConfig = {
  host: process.env.DB_HOST || '34.101.233.248',
  user: process.env.DB_USER || 'fajar',
  password: process.env.DB_PASSWORD || 'fajar',
  database: process.env.DB_NAME || 'tcc',
};

// Create a connection pool to the Cloud SQL database
const pool = mysql.createPool(connectionConfig);

export default pool;
