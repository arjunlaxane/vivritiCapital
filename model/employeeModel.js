const { ObjectID } = require('bson');
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  first_Name: {
    type: String,
    required: true,
  },
  last_Name: {
    type: String,
    required: true,
  },
  mobile_Number: {
    type: Number,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Department: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Employee', employeeSchema);
