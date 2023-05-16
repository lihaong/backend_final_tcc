import { Sequelize } from 'sequelize';

const db = new Sequelize('tcc', 'fajar', 'fajar', {
  host: '34.101.233.248',
  dialect: 'mysql'
});

export default db;
