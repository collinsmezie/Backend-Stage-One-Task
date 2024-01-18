const express = require('express');
const booksRouter = express.Router();
const BookController = require('../controllers/bookController');


booksRouter.get('/books', BookController.getAllBooks);
booksRouter.post('/books', BookController.createBook);
booksRouter.put('/books/:id', BookController.updateBook);
booksRouter.delete('/books/:id', BookController.deleteBook);




module.exports = booksRouter;