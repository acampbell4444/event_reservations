const Sequelize = require('sequelize');
const _db = new Sequelize('postgres://localhost:5432/reservations', { logging: false });

module.exports = _db;