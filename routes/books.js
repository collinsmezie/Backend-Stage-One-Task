const express = require('express');
const booksRouter = express.Router();
const BookController = require('../controllers/bookController');
const {newBookValidatorMiddleware, updatedBookValidatorMiddleware} = require('../middlewares/validators/bookValidator');


booksRouter.get('/books', BookController.getAllBooks);
booksRouter.get('/books/:id', BookController.getBookById);
booksRouter.post('/books', newBookValidatorMiddleware, BookController.createBook);
booksRouter.put('/books/:id', updatedBookValidatorMiddleware, BookController.updateBook);
booksRouter.delete('/books/:id', BookController.deleteBook);




module.exports = booksRouter;