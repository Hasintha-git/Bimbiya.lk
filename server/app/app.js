const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();

// connect to the database
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to the database');
}).catch(err => {
  console.error(err);
});

// middleware
app.use(bodyParser.json());

// routes
app.use('/users', userRoutes);

// start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
