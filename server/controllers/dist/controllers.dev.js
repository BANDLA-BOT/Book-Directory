"use strict";

var Book = require("../model/book.js");

var searchBook = function searchBook(req, res) {
  var query, books;
  return regeneratorRuntime.async(function searchBook$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          query = req.query.search;
          _context.next = 4;
          return regeneratorRuntime.awrap(Book.find({
            $or: [{
              title: {
                $regex: query,
                $options: 'i'
              }
            }, {
              author: {
                $regex: query,
                $options: 'i'
              }
            }, {
              genre: {
                $regex: query,
                $options: 'i'
              }
            }]
          }));

        case 4:
          books = _context.sent;
          res.json(books);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: 'Error searching books',
            error: _context.t0
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

var getAll = function getAll(req, res, next) {
  var book;
  return regeneratorRuntime.async(function getAll$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Book.find());

        case 3:
          book = _context2.sent;

          if (!book) {
            res.status(404).json({
              message: "Books not found"
            });
          }

          res.status(200).json({
            message: "Books found are",
            Books: book
          });
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          res.json({
            message: "Error while fetching ",
            error: _context2.t0
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

var getBookById = function getBookById(req, res, next) {
  var id, book;
  return regeneratorRuntime.async(function getBookById$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(Book.findById(id));

        case 4:
          book = _context3.sent;

          if (book) {
            res.status(200).json({
              message: "Book Found",
              book: book
            });
          } else {
            res.json({
              message: "Book not found"
            });
          }

          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          res.status(400).json({
            message: "Error while fetching book by ID"
          });

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

var postBook = function postBook(req, res, next) {
  var _req$body, title, author, year, genre, book;

  return regeneratorRuntime.async(function postBook$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _req$body = req.body, title = _req$body.title, author = _req$body.author, year = _req$body.year, genre = _req$body.genre;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(Book.create({
            title: title,
            author: author,
            year: year,
            genre: genre
          }));

        case 4:
          book = _context4.sent;
          res.json({
            message: "Book Uploaded successfully",
            Book: book
          });
          _context4.next = 11;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          res.json({
            message: "Error while uploading Books",
            error: _context4.t0.message
          });

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

var deleteBook = function deleteBook(req, res, next) {
  var id, book;
  return regeneratorRuntime.async(function deleteBook$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(Book.findByIdAndDelete(id));

        case 4:
          book = _context5.sent;

          if (book) {
            res.status(200).json({
              message: "Book deleted Successfully"
            });
          } else {
            res.status(404).json({
              message: "Book not found"
            });
          }

          _context5.next = 11;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);
          res.status(500).json({
            message: "Error while deleting Book",
            error: _context5.t0.message
          });

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

var updateBook = function updateBook(req, res, next) {
  var id, _req$body2, title, author, year, genre, book;

  return regeneratorRuntime.async(function updateBook$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, title = _req$body2.title, author = _req$body2.author, year = _req$body2.year, genre = _req$body2.genre;
          _context6.prev = 2;
          _context6.next = 5;
          return regeneratorRuntime.awrap(Book.findByIdAndUpdate(id, {
            title: title,
            author: author,
            year: year,
            genre: genre
          }, {
            "new": true
          }));

        case 5:
          book = _context6.sent;

          if (book) {
            res.status(200).json({
              message: "Updated successfully",
              book: book
            });
          } else {
            res.status(404).json({
              message: "Book not found"
            });
          }

          _context6.next = 12;
          break;

        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](2);
          res.status(400).json({
            message: "Error while updating Book",
            error: _context6.t0.message
          });

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[2, 9]]);
};

module.exports = {
  getAll: getAll,
  postBook: postBook,
  deleteBook: deleteBook,
  updateBook: updateBook,
  getBookById: getBookById,
  searchBook: searchBook
};
//# sourceMappingURL=controllers.dev.js.map
