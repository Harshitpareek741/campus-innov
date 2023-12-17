const mongoose = require('../dbConnection');

const accadmicsSchema = new mongoose.Schema({
  collegename: {
    type: String,
    required: true
  },
  projectname: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
 
});

const academic = mongoose.model('academic', accadmicsSchema);
module.exports = academic;
