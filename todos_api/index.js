const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const { DATABASE_URL, PORT } = require('./config');

const app = express();
const bodyParser = require('body-parser');

const { router: todoRouter } = require('./routes/todos');
// var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.use('/api/todos', todoRouter);

app.listen(PORT, function() {
  console.log('APP IS RUNNING ON PORT ' + PORT);
});
