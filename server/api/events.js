const express = require('express');
const router = express.Router();
const {Event, TimeSlot, db} = require('../db/index')

router.get('/', (req, res, next) => {
  Event.findAll({include:{all:true}})
  .then(events => {
  	res.send(events)})
  .catch(next);
});

router.get('/times/:eventId', (req, res, next) => {
  TimeSlot.findAll({where: {eventTimeId: req.params.eventId}, order: [
    ['startTime', 'ASC']], include:{all:true}})
  .then(times => {
  	res.send(times)})
  .catch(next);
});




module.exports = router;