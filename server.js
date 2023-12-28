const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const booksRoute = require('./routes/books');


// Middleware to parse JSON requests
app.use(express.json());

app.use('/api', booksRoute);



  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });


