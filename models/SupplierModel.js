import { DataTypes } from 'sequelize';
import db from '../config/Database.js';

const Supplier = db.define('suppliers', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  address: DataTypes.STRING
}, {
  freezeTableName: true
});

export default Supplier;

(async () => {
  try {
    await db.sync();
    console.log('Database synchronized.');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
})();
