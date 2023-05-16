import pool from '../config/db.js';

export const getUsers = (req, res) => {
  // Fetch all users from the database
  pool.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json(results);
  });
};

export const getUserById = (req, res) => {
  const userId = req.params.id;
  // Fetch a specific user by ID from the database
  pool.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(results[0]);
  });
};

export const createUser = (req, res) => {
  const { name, email, gender } = req.body;
  // Insert a new user into the database
  pool.query('INSERT INTO users (name, email, gender, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?)', [name, email, gender, new Date(), new Date()], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.status(201).json({ message: 'User created successfully', id: results.insertId });
  });
};

export const updateUser = (req, res) => {
  const userId = req.params.id;
  const { name, email, gender } = req.body;
  // Update a user in the database
  pool.query('UPDATE users SET name = ?, email = ?, gender = ?, updatedAt = ? WHERE id = ?', [name, email, gender, new Date(), userId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User updated successfully' });
  });
};

export const deleteUser = (req, res) => {
  const userId = req.params.id;
  // Delete a user from the database
  pool.query('DELETE FROM users WHERE id = ?', [userId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  });
};
