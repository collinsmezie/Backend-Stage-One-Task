const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const connectDB = require('../utils/dbConnect');

// Connect to MongoDB
connectDB();


// Create a book
router.post('/books', async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all books
router.get('/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a book
router.put('/books/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a book
router.delete('/books/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;



  // ... Define your API routes here ...
//   router.post('/add_book', async (req, res) => {
//     try {
//       const { book_title, author, category, current_chapter, percentage } = req.body;
//         if (!book_title || !author || !category || !current_chapter || !percentage) {
//         res.status(400).json({ error: 'Missing field detected' });
//         return
//       }
//       const result = await collection.insertOne({ book_title, author, category, current_chapter, percentage });
//       res.status(201).json(result);
//     } catch (error) {
//       console.error('Error creating book:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });

//   //Get one user by ID

// //   router.get('/books/:bookId', async (req, res) => {
// //   const bookId = req.params.bookId; // Get the book ID from the URL as a string

// //   try {
// //     const user = await collection.findOne({ _id: new ObjectId(userId) }); // Use ObjectId to convert the string to ObjectId
// //     if (!user) {
// //       // If no user is found, respond with a 404 Not Found status
// //       res.status(404).json({ error: 'User not found' });
// //       return;
// //     }

// //     res.json(user);
// //   } catch (err) {
// //     console.error('Error fetching user:', err);
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // });



//  // Fetch all books

//   router.get('/books', async (req, res) => {
//     try {
//       const books = await collection.find().toArray();
//       res.json(books);
//     } catch (err) {
//       console.error('Error fetching books:', err);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
  

  
//   // Update a book by ID
// router.put('/books/:bookId', async (req, res) => {
//     const bookId = req.params.bookId;
//     const updatedBook = req.body; // Assuming the updated book data is sent in the request body
  
//     try {
//       const result = await collection.updateOne(
//         { _id: new ObjectId(bookId) },
//         { $set: updatedBook }
//       );
  
//       if (result.matchedCount === 0) {
//         res.status(404).json({ error: 'Book not found' });
//         return;
//       }
  
//       res.json({ message: 'Book updated successfully' });
//     } catch (err) {
//       console.error('Error updating book:', err);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
  

// // Delete a user by ID
// router.delete('/books/:bookId', async (req, res) => {
//     const bookId = req.params.bookId;
  
//     try {
//       const result = await collection.deleteOne({ _id: new ObjectId(bookId) });
  
//       if (result.deletedCount === 0) {
//         res.status(404).json({ error: 'Book not found' });
//         return;
//       }
  
//       res.json({ message: 'Book deleted successfully' });
//     } catch (err) {
//       console.error('Error deleting book:', err);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
  
