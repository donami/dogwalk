var mongoose = require('mongoose');

var dogSchema = new mongoose.Schema({
  name: String,
  born: String,
  description: String,
  race: String
});

module.exports = mongoose.model('Dog', dogSchema);
