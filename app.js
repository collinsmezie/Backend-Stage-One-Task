require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const booksRouter = require('./routes/books');
const cors = require('cors');
const connectDB = require('./utils/dbConnect');
const port = process.env.PORT || 4000;


// Connect to database
connectDB();

// Middleware to allow cross-origin requests
app.use(cors());

// Middleware to parse request body
app.use(bodyParser.json());

// Middleware to handle routes
app.use('/api', booksRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


