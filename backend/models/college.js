// college.js
const mongoose = require('../dbConnection');

const newSchema = new mongoose.Schema({
  Ugc_id: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

const college = mongoose.model("college", newSchema);
module.exports = college;
