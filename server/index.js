const express = require('express');
const app = express();

const volleyball = require('volleyball');
app.use(volleyball);

const path = require('path');
app.use('/bootstrap', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')));
app.use(express.static(path.join(__dirname, '../public')));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const apiRouter = require('./api');
app.use('/api', apiRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

const {db} = require('./db');
db.sync()
.then(() =>{
  app.listen(3000, () => {
    console.log('server listening for requests on port 3000');
  });
});