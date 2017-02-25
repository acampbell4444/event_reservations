const db = require('./_db');
const Event = require('./models/event');
const TimeSlot = require('./models/timeslot');


TimeSlot.belongsTo(Event, {
	as: 'eventTime'
});
//This adds methods to 'timeslot', such as '.setEventTime'.
// It also creates a foreign key attribute on the TimeSlot table pointing ot the Event table


module.exports = {
    TimeSlot,
    Event,
    db
};
