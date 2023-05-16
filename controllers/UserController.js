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

export const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ msg: 'User Created' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateUser = async (req, res) => {
  try {
    const [rowsAffected] = await User.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (rowsAffected === 0) {
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
