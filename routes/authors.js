const express = require('express');
const authorsRouter = express.Router();
const AuthorController = require('../controllers/authorController');
const {newAuthorValidatorMiddleware, updatedAuthorValidatorMiddleware } = require('../middlewares/Validators/authorValidator');

// Get Author Info by id
authorsRouter.get('/authors/:id', AuthorController.getAuthorById);
// Update Author info by id
authorsRouter.put('/authors/:id', updatedAuthorValidatorMiddleware, AuthorController.updateAuthor);
// Create new Author
authorsRouter.post('/authors', newAuthorValidatorMiddleware, AuthorController.createAuthor);
// Get all Authors
authorsRouter.get('/authors', AuthorController.getAllAuthors);
// Create book by author
authorsRouter.post('/authors/:authorId/newBook', AuthorController.createBookByAuthor);
// Update One Book by Author
authorsRouter.put('/authors/:authorId/testbooks/:bookId', AuthorController.updateAuthorBook);
// Delete One Book by Author
authorsRouter.delete('/authors/:authorId/testbooks/:bookId', AuthorController.deleteOneBook);
// Delete all books by author
authorsRouter.delete('/authors/:authorId/testbooks', AuthorController.deleteAllBooksByAuthor);
// Delete Author and All Books by Author
authorsRouter.delete('/authors/:authorId', AuthorController.deleteAuthorAndBooks);


module.exports = authorsRouter;