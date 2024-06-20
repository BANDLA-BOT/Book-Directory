"use strict";

var express = require('express');

var _require = require('../controllers/controllers.js'),
    getAll = _require.getAll,
    postBook = _require.postBook,
    deleteBook = _require.deleteBook,
    updateBook = _require.updateBook,
    getBookById = _require.getBookById,
    searchBook = _require.searchBook;

var router = express.Router();
router.get('/', getAll);
router.post('/', postBook);
router.get('/:id', getBookById);
router.put('/:id', updateBook);
router["delete"]('/:id', deleteBook);
router.get('/search/filter', searchBook);
module.exports = router;
//# sourceMappingURL=getAllBooks.dev.js.map
