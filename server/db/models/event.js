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
  monthNum: {
    type: Sequelize.INTEGER
  },
  dayNum: {
    type: Sequelize.INTEGER
  },
  yearNum: {
    type: Sequelize.INTEGER
  }
},{
  getterMethods: {
    start : function () {
      return new Date(this.yearNum, this.monthNum, this.dayNum)
    },
    end : function () {
      return new Date(this.yearNum, this.monthNum, this.dayNum)
    }
  }
});

module.exports = Event;