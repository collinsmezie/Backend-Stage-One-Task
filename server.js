require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const booksRouter = require('./routes/books');
const cors = require('cors');
const passport = require('passport');
const bodyParser = require('body-parser');
const authRoute = require('./routes/auth');
const connectDB = require('./utils/dbConnect')
require ('./authentication/auth')


// Connect to database
connectDB();



app.use(bodyParser.urlencoded({ extended: false }));
// Middleware to parse JSON requests
app.use(express.json());

// Middleware to allow cross-origin requests
app.use(cors());

// Middleware for authentication
app.use('/', authRoute);


// Middleware for passport
app.use('/api', passport.authenticate('jwt', { session: false }), booksRouter);

console.log("IN SERVER NOW")

// Middleware for error handling
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err });
  });


  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });


