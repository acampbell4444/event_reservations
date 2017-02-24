const express = require('express');
const router = express.Router();

// /api ...
const eventRouter = require('./events');
router.use('/event', eventRouter);

router.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;