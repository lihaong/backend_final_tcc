import User from '../models/UserModel.js';

export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        id: req.params.id
      }
    });
    if (!response) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createUser = (req, res) => {
  const { name, email, gender } = req.body;
  // Insert a new user into the database
  pool.query('INSERT INTO users (name, email, gender) VALUES (?, ?, ?)', [name, email, gender], (err, results) => {
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
  pool.query('UPDATE users SET name = ?, email = ?, gender = ? WHERE id = ?', [name, email, gender, userId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ msg: 'User Updated' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const rowsAffected = await User.destroy({
      where: {
        id: req.params.id
      }
    });
    if (rowsAffected === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ msg: 'User Deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
