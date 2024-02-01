const mongoose = require('mongoose');


const authorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String, 
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'testBook'
    }]
  
});


const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
