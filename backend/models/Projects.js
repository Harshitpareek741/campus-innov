const mongoose = require('../dbConnection');

const projectSchema = new mongoose.Schema({
  collegeName: {
    type: String,
    required: true
  },
  projectTitle: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  founderName: {
    type: String,
    required: true
  },
  founderEmail: {
    type: String,
    required: true
  }
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
