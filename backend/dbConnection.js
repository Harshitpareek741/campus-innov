// dbConnection.js
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://harshitpareek893:works@works.3txyysu.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

module.exports = mongoose;
