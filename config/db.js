import mysql from 'mysql2';

// Create a connection pool to the Cloud SQL database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tcc',
});

export default pool;
