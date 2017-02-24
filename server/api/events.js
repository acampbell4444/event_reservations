const express = require('express');
const router = express.Router();

const Event = require('../db/models/event');

router.get('/', (req, res, next) => {
  Event.findAll()
  .then(events => {
  	res.send(events)})
  .catch(next);
});

// router.post('/', (req, res, next) => {
//   Taco.create(req.body)
//   .then(createdTaco => {
//     res.status(201).json(createdTaco); 
//   })
//   .catch(next);
// });

// router.get('/:tacoId', (req, res, next) => {
//   Taco.findById(req.params.tacoId)
//   .then(taco => res.json(taco))
//   .catch(next);
// });

// router.put('/:tacoId', (req, res, next) => {
// //   Taco.findById(req.params.tacoId)
// //   .then(taco => {
// //     return taco.update(req.body); 
// //   })
// //   .then(updatedTaco => res.json(updatedTaco))
//   Taco.update(req.body, {
//     where: {
//       id: req.params.tacoId 
//     },
//     returning: true
//   })
//   .then(([numRowsUpdated, updatedRows]) => {
//     res.json(updatedRows); 
//   })
//   .catch(next);
// });

// router.delete('/:tacoId', (req, res, next) => {
//   Taco.destroy({
//     where: {
//       id: req.params.tacoId 
//     } 
//   }) 
//   .then(() => res.sendStatus(204))
//   .catch(next);
// });

module.exports = router;