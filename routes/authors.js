const express = require('express');
const authorsRouter = express.Router();
const AuthorController = require('../controllers/authorController');
const {newAuthorValidatorMiddleware, updatedAuthorValidatorMiddleware } = require('../middlewares/Validators/authorValidator');

authorsRouter.get('/authors', AuthorController.getAllAuthors);
authorsRouter.get('/authors/:id', AuthorController.getAuthorById);
authorsRouter.post('/authors', newAuthorValidatorMiddleware, AuthorController.createAuthor);
authorsRouter.put('/authors/:id', updatedAuthorValidatorMiddleware, AuthorController.updateAuthor);
authorsRouter.delete('/authors/:id', AuthorController.deleteAuthor);

module.exports = authorsRouter;