// company.js
const mongoose = require('../dbConnection');

const newSchema = new mongoose.Schema({
  Tin_no: {
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

const company = mongoose.model("company", newSchema);
module.exports = company;
