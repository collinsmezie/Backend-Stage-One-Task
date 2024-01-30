const Author = require('../models/authors');

// Get all authors using mongoose ORM methods
async function getAllAuthors(req, res) {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }    
}

//Get an author by id using mongoose ORM methods
async function getAuthorById(req, res) {
    try {
        const author = await Author.findById(req.params.id);
        if (!author) {
            return res.status(404).json({ error: 'Author not found' });
        }
        res.json(author);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Create an author using mongoose ORM methods
async function createAuthor(req, res) {
    try {
        const author = new Author(req.body);
        if(!author) {
            return res.status(400).json({ error: 'Bad request' });
        }
        await author.save();
        res.status(201).json(author);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Update an author using mongoose ORM methods
async function updateAuthor(req, res) {
    try {
     const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!author) {
            return res.status(404).json({ error: 'Author not found' });
        }
        res.json(author);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


// Delete an author using mongoose ORM methods
async function deleteAuthor(req, res) {
    try {
    const author = await Author.findByIdAndDelete(req.params.id);
            if (!author) {
                return res.status(404).json({ error: 'Author not found' });
            }
            res.json({ message: 'Author deleted successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
}


module.exports = {
    getAllAuthors,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor
}
