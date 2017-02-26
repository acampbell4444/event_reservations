const Sequelize = require('sequelize');
const db = require('../_db');

const TimeSlot = db.define('timeSlot', {
  startTime: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true 
    } 
  },
  availableSpots: {
    type: Sequelize.INTEGER,
    defaultValue : 15
  }
},{
    getterMethods: {
      startTimeString : function () {
        return militaryToString(this.startTime)
      }
    }
  }
);

module.exports = TimeSlot;

function militaryToString (time) {
  let stringTime = time.toString()
  if(time<100){return '12:' + time + 'am'}
  if(time<1000) {return stringTime.slice(0,1) + ':' + stringTime.slice(1) + 'am'}
  if(time>1259){stringTime = (time - 1200).toString()}
  let splitString = stringTime.toString().split('')
  splitString.splice(-2,0,':')
  stringTime = splitString.join('')
  return stringTime + (time <= 1159 ? 'am' : 'pm')
}
