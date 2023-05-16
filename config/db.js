import mysql from 'mysql2';

// Create a connection pool to the Cloud SQL database
const pool = mysql.createPool({
  host: '34.101.233.248',
  user: 'fajar',
  password: 'fajar',
  database: 'tcc',
});

export default pool;
