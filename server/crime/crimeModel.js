var mongoose = require('mongoose');

var CrimeSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },

  message: {
    type: String,
    required: true
  },

  time: {
    type: Date,
    required: true
  },

  reportedBy: {
    type: String,
    required: true
  },

  phoneNumber: {
    type: Number,
    required: true
  },

  zipCode: {
    type: Number,
    required: true
  },

  email: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('crime', CrimeSchema);
