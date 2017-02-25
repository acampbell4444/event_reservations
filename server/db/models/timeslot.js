const Sequelize = require('sequelize');
const db = require('../_db');

const TimeSlot = db.define('timeSlot', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true 
    } 
  },
  availableSpots: {
    type: Sequelize.INTEGER,
    defaultValue : 15
  }
});

module.exports = TimeSlot;
