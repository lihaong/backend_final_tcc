import { DataTypes } from 'sequelize';
import db from '../config/Database.js';

const User = db.define('users', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  gender: DataTypes.STRING
}, {
  freezeTableName: true
});

export default User;

(async () => {
  try {
    await db.sync();
    console.log('Database synchronized.');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
})();
