// const { db } = require('../utils/ConnectDbSql')
const connectDB = require('../utils/dbConnect');
const Book = require('../models/book');

// Connect to MongoDB
connectDB();

// const BookModel = db.books;

// // Get all books using sequelize ORM methods
// async function getAllBooks(req, res) {
//     try {
//         const books = await BookModel.findAll();
//         res.json(books);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

// // Create a book using sequelize ORM methods
// async function createBook(req, res) {
//     console.log("REQUEST HERE",req.body);
//     try {
//         const book = await BookModel.create(req.body);
//         res.status(201).json(book);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// }


// // Update a book using sequelize ORM methods
// async function updateBook(req, res) {
//     try {
//         const book = await BookModel.findByPk(req.params.id);
//         if (!book) {
//             return res.status(404).json({ error: 'Book not found' });
//         }
//         await book.update(req.body);
//         res.json(book);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }

// }

// // Delete a book using sequelize ORM methods
// async function deleteBook(req, res) {
//     try {
//         const book = await BookModel.findByPk(req.params.id);
//         if (!book) {
//             return res.status(404).json({ error: 'Book not found' });
//         }
//         await book.destroy();
//         res.json({ message: 'Book deleted successfully' });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// }


// Get all books using mongoose ORM methods
async function getAllBooks(req, res) {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }    
}

// Create a book using mongoose ORM methods
async function createBook(req, res) {
    try {
        const book = new Book(req.body);
        if(!book) {
            return res.status(400).json({ error: 'Bad request' });
        }
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Update a book using mongoose ORM methods
async function updateBook(req, res) {
    try {
     const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Delete a book using mongoose ORM methods
async function deleteBook(req, res) {
    try {
    const book = await Book.findByIdAndDelete(req.params.id);
            if (!book) {
                return res.status(404).json({ error: 'Book not found' });
            }
            res.json({ message: 'Book deleted successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
}







module.exports = {
    getAllBooks,
    createBook,
    updateBook,
    deleteBook
};


