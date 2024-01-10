require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const booksRouter = require('./routes/books');
const cors = require('cors');



// Middleware to parse JSON requests
app.use(express.json());

// Middleware to allow cross-origin requests
app.use(cors());

app.use('/api', booksRouter);



  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });


