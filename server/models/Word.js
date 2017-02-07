const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const wordSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a word name!'
  },
  translate: {
    type: String,
    required: 'Please enter a word translate!'
  }
});

// define indexes
wordSchema.index({
  name: 'text',
  description: 'text'
});

module.exports = mongoose.model('Word', wordSchema);
