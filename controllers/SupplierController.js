import Supplier from '../models/SupplierModel.js';

export const getSuppliers = async (req, res) => {
  try {
    const response = await Supplier.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getSupplierById = async (req, res) => {
  try {
    const response = await Supplier.findOne({
      where: {
        id: req.params.id
      }
    });
    if (!response) {
      return res.status(404).json({ error: 'Supplier not found' });
    }
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createSupplier = async (req, res) => {
  try {
    await Supplier.create(req.body);
    res.status(201).json({ msg: 'Supplier Created' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateSupplier = async (req, res) => {
  try {
    const [rowsAffected] = await Supplier.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (rowsAffected === 0) {
      return res.status(404).json({ error: 'Supplier not found' });
    }
    res.status(200).json({ msg: 'Supplier Updated' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteSupplier = async (req, res) => {
  try {
    const rowsAffected = await Supplier.destroy({
      where: {
        id: req.params.id
      }
    });
    if (rowsAffected === 0) {
      return res.status(404).json({ error: 'Supplier not found' });
    }
    res.status(200).json({ msg: 'Supplier Deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
