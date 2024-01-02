const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const booksRoute = require('./routes/books');
const cors = require('cors');



// Middleware to parse JSON requests
app.use(express.json());

// Middleware to allow cross-origin requests
app.use(cors());

app.use('/api', booksRoute);



  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });


