const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
});

const TestBook = mongoose.model('testBook', bookSchema);

module.exports = TestBook;
