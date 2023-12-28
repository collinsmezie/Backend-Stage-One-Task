const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    book_title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    current_chapter: {
        type: String,
        required: true
    },
    progress: {
        type: Number,
        required: true
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
