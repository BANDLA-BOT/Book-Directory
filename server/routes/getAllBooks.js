const express = require('express')
const {getAll,postBook, deleteBook, updateBook, getBookById,searchBook} = require('../controllers/controllers.js')
const router = express.Router()

router.get('/', getAll)
router.post('/',postBook)
router.get('/:id',getBookById)
router.put('/:id',updateBook)
router.delete('/:id',deleteBook)
router.get('/search/filter',searchBook)


module.exports = router