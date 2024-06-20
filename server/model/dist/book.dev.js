"use strict";

var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    lowercase: true
  },
  author: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  genre: {
    type: [String],
    required: true
  }
});
var Book = mongoose.model('book', bookSchema);
module.exports = Book;
//# sourceMappingURL=book.dev.js.map
