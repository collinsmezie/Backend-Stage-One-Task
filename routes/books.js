const express = require('express');
const booksRouter = express.Router();
const BookController = require('../controllers/bookController');
const bookValidation = require('../validators/bookValidator');



booksRouter.get('/books', BookController.getAllBooks);
booksRouter.post('/books', bookValidation, BookController.createBook);
booksRouter.put('/books/:id', bookValidation, BookController.updateBook);
booksRouter.delete('/books/:id', BookController.deleteBook);




module.exports = booksRouter;