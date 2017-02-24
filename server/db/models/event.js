const Sequelize = require('sequelize');
const db = require('../_db');

const Event = db.define('event', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true 
    } 
  },
  start: {
    type: Sequelize.DATE
  },
  end: {
    type: Sequelize.DATE
  }
});

module.exports = Event;