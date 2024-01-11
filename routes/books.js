const express = require('express');
const booksRouter = express.Router();
const BookController = require('../controllers/bookController');


booksRouter.get('/books', BookController.getAllBooks);
booksRouter.post('/books', BookController.createBook);
booksRouter.put('/books/:id', BookController.updateBook);
booksRouter.delete('/books/:id', BookController.deleteBook);




module.exports = booksRouter;



// // Create a book
// router.post('/books', async (req, res) => {
//     try {
//         const book = new Book(req.body);
//         if(!book) {
//             return res.status(400).json({ error: 'Bad request' });
//         }
//         await book.save();
//         res.status(201).json(book);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // Get all books
// router.get('/books', async (req, res) => {
//     try {
//         const books = await Book.find();
//         res.json(books);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // Update a book
// router.put('/books/:id', async (req, res) => {
//     try {
//         const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!book) {
//             return res.status(404).json({ error: 'Book not found' });
//         }
//         res.json(book);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // Delete a book
// router.delete('/books/:id', async (req, res) => {
//     try {
//         const book = await Book.findByIdAndDelete(req.params.id);
//         if (!book) {
//             return res.status(404).json({ error: 'Book not found' });
//         }
//         res.json({ message: 'Book deleted successfully' });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });
