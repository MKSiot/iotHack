var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  zipCode: {
    type: Number,
    required: true
  },

  phoneNumber: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('user', UserSchema);
